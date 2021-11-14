import Router from '@koa/router';
import Koa from 'koa';
import koaRouter from './buildKoaRouter.js';
import koaErrorHandler from './koaErrorHandler.js';

// Database connection
// import '../config/mongoConnection';

export const app = new Koa();

// Koa error handling
koaErrorHandler(app);

// use koa router
app.use(koaRouter.routes());

// const router = new Router();

// router.get('/sayhello', (ctx) => {
//   ctx.status = 200;
//   ctx.body = 'hi';
// });
// app.use(router.routes());

app.listen(3000, () => {
  console.log('app running http://localhost:3000 ...');
});
