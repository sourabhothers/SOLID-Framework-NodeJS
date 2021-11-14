import { IBaseRoute } from '../../../types';
import BaseContext from '../../base/BaseContext';
import userControllers from '../controllers';
import userMiddlewares from '../middlewares';

const userRoutes: IBaseRoute[] = [
  {
    path: '/sayhello',
    method: 'get',
    middlewares: [userMiddlewares.test],
    controller: userControllers.sayHello,
  },
  {
    path: '/create',
    method: 'get',
    // middlewares: [userMiddlewares.test],
    controller: userControllers.createUser,
  },
  {
    path: '/getone',
    method: 'get',
    // middlewares: [userMiddlewares.test],
    controller: userControllers.getOneByName,
  },
];

export default userRoutes;
