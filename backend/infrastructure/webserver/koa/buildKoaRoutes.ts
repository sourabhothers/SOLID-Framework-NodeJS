import { RouterContext } from '@koa/router';
import baseRoutes from '../../../core/base/routes';
import { RouteMethods } from '../../../types';
import BuildKoaContext from './BuildKoaContext';

export interface KoaSingleRoute {
  path: string;
  method: RouteMethods;
  // middlewares?: NFType[];
  controller: (ctx: RouterContext) => Promise<void> | void;
}

const koaRoutes: KoaSingleRoute[] = [];

const buildKoaRoutesArray = () => {
  // Initialization required to work this module & export extRoutesArray
  baseRoutes.forEach((currRoute) => {
    let { method, path, controller, middlewares } = currRoute;
    // Middleware
    if (middlewares && !Array.isArray(middlewares)) {
      middlewares = [middlewares];
    }
    const currRouteBuilt: KoaSingleRoute = {
      method,
      path,
      controller: async (koaCtx) => {
        // const builtKoaCtx = new BuildKoaContext(koaCtx); // Use when built using class
        const builtKoaCtx = BuildKoaContext(koaCtx);
        try {
          // Middlewares
          if (middlewares && middlewares?.length > 0) {
            for (let i = 0; i < middlewares.length; i++) {
              if (Array.isArray(middlewares)) await middlewares[i](builtKoaCtx);
            }
          }
          await controller(builtKoaCtx);
          // error handle
        } catch (error) {
          // console.error(error);
          builtKoaCtx.status(500).send('custom error from server (500)');
          // throw error;
        }
      },
    };
    koaRoutes.push(currRouteBuilt);
  });
};

// Initialize function
buildKoaRoutesArray();

export default koaRoutes;
