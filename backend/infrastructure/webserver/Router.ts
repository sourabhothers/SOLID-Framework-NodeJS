import { deepClone, prependPathPrefix } from '../utility';
import {
  BaseController,
  BaseMiddleware,
  IBaseRoute,
  RouteMethods,
} from 'types';

interface RouterOptions {
  prefix?: string;
}

export default class Router {
  protected areRoutesLocked: boolean = false;
  protected thisPrefix: string;
  protected thisRoutes: IBaseRoute[] = [];
  private thisMiddlewares: BaseMiddleware[] = [];
  constructor(options: RouterOptions) {
    this.thisPrefix = options.prefix ? options.prefix : '';
  }
  useMiddlewares = (middlewares: BaseMiddleware[] | BaseMiddleware) => {
    // check is routes creation locked
    // if (this.areRoutesLocked === true) {
    //   throw new Error(`Don't use useMiddlewares after executing routes()`);
    // }
    if (Array.isArray(middlewares)) {
      this.thisMiddlewares.push(...middlewares);
    } else {
      this.thisMiddlewares.push(middlewares);
    }
  };
  useRoutes = (routerPrefix: string, router: Router) => {
    // check is routes creation locked
    // if (this.areRoutesLocked === true) {
    //   throw new Error(`Don't use useRoutes method after executing routes()`);
    // }
    // self routes error
    if (router === this)
      throw new Error("Can't accept self same instance as router param.");
    // deep cloning object
    const routerRoutes = deepClone(router.routes());
    // prefix for router.routes
    routerRoutes.forEach((route) => {
      route.path = prependPathPrefix(routerPrefix, route.path);
    });
    //
    this.thisRoutes = [...this.thisRoutes, ...routerRoutes];
  };
  // @desc add GET route
  get = (
    path: string,
    middlewares: BaseMiddleware | BaseMiddleware[],
    controller: BaseController,
  ) => {
    this.addNewRoute('get', path, middlewares, controller);
  };
  // @desc add POST route
  post = (
    path: string,
    middlewares: BaseMiddleware | BaseMiddleware[],
    controller: BaseController,
  ) => {
    this.addNewRoute('post', path, middlewares, controller);
  };
  // @desc add POST route
  delete = (
    path: string,
    middlewares: BaseMiddleware | BaseMiddleware[],
    controller: BaseController,
  ) => {
    this.addNewRoute('delete', path, middlewares, controller);
  };
  // @desc add POST route
  patch = (
    path: string,
    middlewares: BaseMiddleware | BaseMiddleware[],
    controller: BaseController,
  ) => {
    this.addNewRoute('patch', path, middlewares, controller);
  };
  // @desc add POST route
  all = (
    path: string,
    middlewares: BaseMiddleware | BaseMiddleware[],
    controller: BaseController,
  ) => {
    this.addNewRoute('all', path, middlewares, controller);
  };
  // add new route
  protected addNewRoute = (
    method: RouteMethods,
    path: string,
    middlewares: BaseMiddleware | BaseMiddleware[],
    controller: BaseController,
  ) => {
    // check is routes creation locked
    // if (this.areRoutesLocked === true) {
    //   throw new Error(`Don't execute any methods after executing routes()`);
    // }
    // newRouteObject
    const newRoute: Partial<IBaseRoute> = {};
    newRoute.method = method;
    newRoute.path = path;
    //
    if (!middlewares && !controller) {
      throw new Error('At least provide one controller');
    }
    if (!!middlewares && !Array.isArray(middlewares)) {
      middlewares = [middlewares];
    }
    newRoute.middlewares = [...middlewares];
    newRoute.controller = controller;

    this.thisRoutes.push(newRoute as IBaseRoute);
  };
  // Routes build function
  routes = (): IBaseRoute[] => {
    // return already created object array
    // if (this.areRoutesLocked === true) {
    //   console.log(
    //     `method after executing routes()`,
    //   );
    //   return this.thisRoutes;
    // }
    //
    this.thisRoutes.forEach((route, idx) => {
      // prefix routes
      route.path = prependPathPrefix(this.thisPrefix, route.path);
      // unshift middlewares
      if (route.middlewares) {
        if (!Array.isArray(route.middlewares)) {
          route.middlewares = [route.middlewares];
        }
        route.middlewares = [...this.thisMiddlewares, ...route.middlewares];
      }
    });
    // this.areRoutesLocked = true;
    return deepClone(this.thisRoutes);
  };
}
