import { IBaseRoute } from '../../../types';

const _404_all_Route: IBaseRoute = {
  method: 'all',
  path: '/(.*)',
  controller: (ctx) => {
    ctx.status(404).send('Not Found (404)');
  },
};

export default _404_all_Route
