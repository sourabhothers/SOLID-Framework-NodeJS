import UserRepository from '../../repository/userRepository';
import UserEntity from '../../UserEntity';
import UserModel from './UserModel';

class UserRepositoryMongo extends UserRepository {
  persist = async (user: UserEntity) => {
    const newUser = new UserModel(user);
    const savedUser = await newUser.save();
    return savedUser;
  };
}

export default new UserRepositoryMongo();
