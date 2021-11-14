import UserEntity from '../../../../core/user/UserEntity';
import UserRepoBase from '../../../../core/user/UserRepoBase';
import UserModelMongoose from './UserModelMongoose';

class UserRepoMongoose extends UserRepoBase {
  ormName = 'mongoose';
  ormModel = UserModelMongoose;
  // save to mongo
  persist = async (user: Omit<UserEntity, 'id'>): Promise<UserEntity> => {
    let newUser = new this.ormModel(user);
    const savedUser = await newUser.save();
    const { id, name } = savedUser;
    return new UserEntity(id, name);
  };
  getOne = async (key: string, value: string): Promise<UserEntity | null> => {
    const foundUser = await this.ormModel.findOne({ [key]: value });
    if (!foundUser) return null;
    return new UserEntity(foundUser._id, foundUser.name);
  };
}

const userRepoMongo = new UserRepoMongoose();

export default userRepoMongo;
