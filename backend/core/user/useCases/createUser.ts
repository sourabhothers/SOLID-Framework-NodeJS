import serviceLocator from '../../common/serviceLocator';
import UserEntity from '../UserEntity';

export default async function createUser(user: UserEntity) {
  const newUser = new UserEntity(null, user.name);
  const savedUser = await serviceLocator.userRepository.persist(newUser);
  return savedUser;
}
