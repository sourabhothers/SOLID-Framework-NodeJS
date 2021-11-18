const Router = require('@koa/router');

const userRouter = new Router({ prefix: '/user' });
userRouter.get('/create', (ctx) => {
  ctx.body = '';
});
console.log(userRouter.routes().dispatch);

const adminRouter = new Router({ prefix: 'admin' });
adminRouter.use(userRouter.routes());
adminRouter.post('/delete', (ctx) => {
  ctx.body = '';
});

console.log(adminRouter.routes());
