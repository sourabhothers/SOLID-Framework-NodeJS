import { model, Schema } from 'mongoose';

export const UserSchema = new Schema({
  name: String,
});

const UserModel = model(' users', UserSchema);

export default UserModel;
