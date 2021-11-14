import KoaRouter, { RouterContext } from '@koa/router';
import koaRoutes from './buildKoaRoutes';

const koaRouter = new KoaRouter();

koaRoutes.forEach((route) => {
  // router[route.method](route.path, route.middlewares!, route.controller);
  koaRouter[route.method](route.path, route.controller);
});

export default koaRouter;
