import selectedRepository from '../repositories/repository';
import UserEntity from '../UserEntity';

const { userRepository } = selectedRepository;

export default async function createUser(user: UserEntity) {
  const userEntity = new UserEntity(user.name);
  return await userRepository.persist(userEntity);
}
