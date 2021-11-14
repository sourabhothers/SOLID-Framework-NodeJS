import ChoosenContext from '../../server/context';
import createUser from '../useCases/createUser';

const UserController = {
  createUser: async (ctx: ChoosenContext) => {
    // Received user from body data
    const user = { name: 'new user' };
    const createdUser = await createUser(user);
    ctx.status(200).send({ createdUser });
  },
};
export default UserController;
