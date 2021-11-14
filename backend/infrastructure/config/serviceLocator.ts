import UserEntity from '../../core/user/UserEntity';
import userRepoMongo from '../database/mongoose/User/UserRepoMongoose';

const buildServiceLocator = () => {
  let userRepository = userRepoMongo;
  let userSerializer = {
    serialize: (user: UserEntity) => ({
      id: user.id,
      name: user.name,
      timestamp: 'for test',
    }),
  };

  const returnObject = { userRepository, userSerializer };
  Object.freeze(returnObject);
  return returnObject;
};

const serviceLocator = buildServiceLocator();

export default serviceLocator;
