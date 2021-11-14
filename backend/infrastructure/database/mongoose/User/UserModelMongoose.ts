import { model, Schema } from 'mongoose';
import UserEntity from '../../../../core/user/UserEntity';

export const userSchema = new Schema<UserEntity>({
  name: String,
});

const UserModelMongoose = model<UserEntity>(' users', userSchema);

export default UserModelMongoose;
