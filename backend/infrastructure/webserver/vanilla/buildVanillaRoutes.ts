import { IncomingMessage, ServerResponse } from 'http';
import { Key, pathToRegexp } from 'path-to-regexp';
import { IVanillaContext } from 'types/vanillaServer';
import baseRoutes from '../../../core/base/routes';
import { RouteMethods } from '../../../types';
import BuildVanillaContext from './BuildVanillaContext';

export interface VanillaSingleRoute {
  path: string;
  method: RouteMethods;
  // middlewares?: NFType[];
  controller: (
    context: IVanillaContext
  ) => Promise<void> | void;
  regExp: RegExp;
  keys: Key[];
}

const vanillaRoutes: VanillaSingleRoute[] = [];

const buildVanillaRoutesArray = () => {
  // Initialization required to work this module & export extRoutesArray
  baseRoutes.forEach((currRoute) => {
    let { method, path, controller, middlewares } = currRoute;
    // Middleware
    if (middlewares && !Array.isArray(middlewares)) {
      middlewares = [middlewares];
    }
    let keys: Key[] = [];
    const currRouteBuilt: VanillaSingleRoute = {
      method,
      path,
      regExp: pathToRegexp(currRoute.path, keys),
      keys,
      controller: async (context) => {
        // const builtVanillaCtx = new BuildVanillaContext(req, res); // Use when built using class
        const builtVanillaCtx = BuildVanillaContext(context);
        try {
          // Middlewares
          if (middlewares && middlewares?.length > 0) {
            for (let i = 0; i < middlewares.length; i++) {
              if (Array.isArray(middlewares)) {
                const shouldStopNextFn =
                  (await middlewares[i](builtVanillaCtx)) === true;
                if (shouldStopNextFn) return;
              }
            }
          }
          await controller(builtVanillaCtx);
          // error handle
        } catch (error) {
          // console.error(error);
          builtVanillaCtx.status(500).send('custom error from server (500)');
          // throw error;
        }
      },
    };
    vanillaRoutes.push(currRouteBuilt);
  });
};

// Initialize function
buildVanillaRoutesArray();

export default vanillaRoutes;
