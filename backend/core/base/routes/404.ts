import Router from '../../../infrastructure/webserver/Router';

const _404_router = new Router({});

_404_router.all('/(.*)', [], (ctx) => {
  ctx.status(404).send('404 Not Found !');
});

export default _404_router;

// import { IBaseRoute } from '../../../types';

// const _404_Route: IBaseRoute = {
//   method: 'all',
//   path: '/(.*)',
//   controller: (ctx) => {
//     ctx.status(404).send('Not Found (404)');
//   },
// };

// export default _404_Route;
