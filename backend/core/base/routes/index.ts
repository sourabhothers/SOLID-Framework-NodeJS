import { BaseMiddleware, IBaseRoute } from '../../../types';
import userRoutes from '../../user/routes';
import _404_all_Route from './404';

const baseRoutes: IBaseRoute[] = [];

// build new route path with prefix
const prependPathPrefix = (prefix: string, path: string) => {
  // remove trailing / from testPrefix
  prefix = prefix.replace(/^(\/+)|(\/+)$/g, '');

  // remove trailing / from testPath
  path = path.replace(/^(\/+)|(\/+)$/g, '');

  // join both parts with /(slash)
  let newPath = `/${prefix}/${path}`;

  // return new path
  return newPath;
};

// append routes to main route function
const addRoutesToMain = (
  entityRoutes: IBaseRoute[],
  options: {
    pathPrefix?: string;
    preMiddlewares?: BaseMiddleware | BaseMiddleware[];
  },
) => {
  const { pathPrefix, preMiddlewares } = options;

  entityRoutes.forEach((route) => {
    // prefix to path
    if (pathPrefix) {
      route.path = prependPathPrefix(pathPrefix, route.path);
      console.log(route.path);
    }
    // prepend common middleware
    if (preMiddlewares) {
      if (route.middlewares && !Array.isArray(route.middlewares)) {
        route.middlewares = [route.middlewares];
      }
      if (Array.isArray(route.middlewares)) {
        if (Array.isArray(preMiddlewares)) {
          // if preMiddlewares is array
          route.middlewares = [...preMiddlewares, ...route.middlewares];
        } else {
          // if preMiddlewares is not array
          route.middlewares = [preMiddlewares, ...route.middlewares];
        }
      }
    }
    baseRoutes.push(route);
  });
};

// userRoutes
addRoutesToMain(userRoutes, {
  pathPrefix: '/user',
});

// 404 handler
addRoutesToMain([_404_all_Route], {});

export default baseRoutes;
