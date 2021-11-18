import { IVanillaContext } from 'types/vanillaServer';
import userRouter from '../../../core/user/routes';
import Router from '../../common/Router';
import _404_router from './404';
import _404_Route from './404';

const mainRouter = new Router({});
mainRouter.all('/echo/:text', [], (ctx) => {
  const vanillaCtx = ctx.frameworkCtx as IVanillaContext;
  let text = 'not params received';
  if (ctx.frameworkName === 'vanilla') {
    text = vanillaCtx.params.text;
  }
  ctx.status(200).send(text);
});

mainRouter.useRoutes('/user', userRouter);
userRouter.get('/mewpath', [], (ctx) => {});
mainRouter.useRoutes('/admin', userRouter);

// mainRouter.useMiddlewares(function mainUseMiddleware1(ctx) {
// console.log('mainUseMiddleware 1');
// ctx.status(200).send('200 from middleware');
// return stopNext fn to stop overriding body
// return ctx.stopNext();
// });
// mainRouter.useMiddlewares(function mainUseMiddleware1(ctx) {
// console.log('mainUseMiddleware 2');
// ctx.status(200).send('200 from middleware');
// return stopNext fn to stop overriding body
// return ctx.stopNext();
// });

mainRouter.useRoutes('/', _404_router);

const mainRoutes = mainRouter.routes();

// console.log(mainRoutes);

export default mainRoutes;
