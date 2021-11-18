import BaseContext from '../../common/BaseContext';

const userMiddlewares = {
  test: async (ctx: BaseContext) => {
    // ctx.locals.name = 'locals data received from middleware ...';
    // throw new Error('my custom error');
    console.log("test middleware");
    
  },
};

export default userMiddlewares;
