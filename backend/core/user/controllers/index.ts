import { BaseController } from 'types';
import BaseContext from '../../base/BaseContext';
import createUser from '../useCases/createUser';
import getUserByName from '../useCases/getUserByName';
import sayHello from '../useCases/sayHello';

type UserControllersKeys = 'sayHello' | 'createUser' | 'getOneByName';

const userControllers: Record<UserControllersKeys, BaseController> = {
  sayHello: async (ctx) => {
    const message = await sayHello();
    // console.log(ctx.locals);
    ctx.status(200).send(message);
  },
  createUser: async (ctx) => {
    // const createdUser = await createUser({ name: 'saurabh' });
    ctx
      .status(200)
      .json({ user: { name: 'saurabh', id: '61902352613f085e83f4ac2a' } });
  },
  getOneByName: async (ctx) => {
    const foundUser = await getUserByName('saurabh');
    ctx.status(200).json({ user: foundUser });
  },
};

export default userControllers;
