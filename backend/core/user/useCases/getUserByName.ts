import serviceLocator from '../../serviceLocator';
import UserEntity from '../UserEntity';

export default async function getUserByName(name: string) {
  const gotUser = await serviceLocator.userRepository.getOne('name', name);
  return gotUser;
}
