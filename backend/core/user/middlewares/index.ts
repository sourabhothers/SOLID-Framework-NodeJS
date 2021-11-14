import BaseContext from '../../base/BaseContext';

const userMiddlewares = {
  test: async (ctx: BaseContext) => {
    // ctx.locals.name = 'locals data received from middleware ...';
    // throw new Error('my custom error');
  },
};

export default userMiddlewares;
