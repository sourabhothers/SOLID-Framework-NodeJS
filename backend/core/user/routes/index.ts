import Router from '../../common/Router';
import { IBaseRoute } from '../../../types';
import BaseContext from '../../common/BaseContext';
import userControllers from '../controllers';
import userMiddlewares from '../middlewares';
import { Context as KoaContext } from 'koa';

const userRouter = new Router({});

userRouter.get('/create', [], userControllers.createUser);
userRouter.get('/getone', [], userControllers.getOneByName);
userRouter.get('/sayhello', [], userControllers.sayHello);

export default userRouter;

// const userRoutes: IBaseRoute[] = [
//   {
//     path: '/sayhello',
//     method: 'get',
//     middlewares: [userMiddlewares.test],
//     controller: userControllers.sayHello,
//   },
//   {
//     path: '/create',
//     method: 'get',
//     // middlewares: [userMiddlewares.test],
//     controller: userControllers.createUser,
//   },
//   {
//     path: '/getone',
//     method: 'get',
//     // middlewares: [userMiddlewares.test],
//     controller: userControllers.getOneByName,
//   },
// ];

// export default userRoutes;
