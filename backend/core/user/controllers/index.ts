import { BaseController } from 'types';
import { IVanillaContext } from 'types/vanillaServer';
import BaseContext from '../../common/BaseContext';
import createUser from '../useCases/createUser';
import getUserByName from '../useCases/getUserByName';
import sayHello from '../useCases/sayHello';

type UserControllersKeys = 'sayHello' | 'createUser' | 'getOneByName';

const userControllers: Record<UserControllersKeys, BaseController> = {
  sayHello: async (ctx) => {
    ctx.status(200).send("say hello");
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
