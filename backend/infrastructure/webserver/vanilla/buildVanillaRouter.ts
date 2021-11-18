import { IncomingMessage, ServerResponse } from 'http';
import { IVanillaContext } from 'types/vanillaServer';
import { URL } from 'url';
import vanillaRoutes, { VanillaSingleRoute } from './buildVanillaRoutes';

const HOSTNAME = '127.0.0.1';
const PORT = 3000;

const vanillaRouter = async (context: IVanillaContext) => {
  const method = context.req.method?.toLowerCase();
  const parsedURL = new URL(context.req.url!, `http://${HOSTNAME}:${PORT}`);
  let path = parsedURL.pathname.toLowerCase().replace(/^\/+|\/+$/g, '');
  path = `/${path}`;
  let chosenRoute: VanillaSingleRoute | false = false;
  let isRouteMatched: boolean = false;
  let paramsObject: { [key: string]: any } = {};
  const searchQuery = parsedURL.searchParams;
  let queryObject: { [key: string]: any } = {};

  routerForLoop: for (let i = 0; i < vanillaRoutes.length; i++) {
    const route = vanillaRoutes[i];

    // continue if method is not match. (except all method)
    if (route.method === 'all' || route.method === method) {
      // continue executing below code if method match  (except "all")
    } else if (route.method !== method) {
      continue routerForLoop;
    }
    //
    const regexpExecArray = route.regExp.exec(path);
    isRouteMatched = !!regexpExecArray;
    if (!isRouteMatched) continue routerForLoop;
    chosenRoute = route;
    // paramsObject & queries appending to request
    paramForLoop: for (
      let keyIndex = 0;
      keyIndex < chosenRoute.keys.length;
      keyIndex++
    ) {
      const key = chosenRoute.keys[keyIndex];
      // breaking if global (.*) is used
      if (typeof key.name === 'number') continue paramForLoop;
      paramsObject[key.name] =
        decodeURIComponent(regexpExecArray![keyIndex + 1]) ||
        regexpExecArray![keyIndex + 1];
    }
    // query building
    for (const [name, value] of searchQuery.entries()) {
      queryObject[name] = value;
    }
    context.params = paramsObject;
    context.query = queryObject;
    // always break routerForLoop if expected route matched
    if (chosenRoute) break routerForLoop;
  }
  if (chosenRoute) {
    chosenRoute.controller(context);
  } else {
    context.res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8;',
    });
    context.res.end('Not found 404 !');
  }
};

export default vanillaRouter;
