import Koa from 'koa';
import KoaRouter from '@koa/router';

// Database connection
import '../config/mongoConnection';

const app = new Koa();
const router = new KoaRouter();
router.get('/', (ctx) => {
  ctx.body = 'homepage';
});
app.use(router.routes());
app.use((ctx) => {
  ctx.body = 'Oops... Page Not found ...';
});

app.listen(3000, () => {
  console.log('app running http://localhost:3000 ...');
});
