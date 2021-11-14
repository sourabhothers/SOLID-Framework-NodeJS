import UserEntity from './UserEntity';

export default abstract class UserRepoBase {
  abstract ormName: string;
  abstract ormModel: unknown;
  persist = async (user: UserEntity): Promise<UserEntity> => {
    throw new Error('user.persist not implemented');
    return user;
  };
  getOne = async (key: string, value: string): Promise<UserEntity | null> => {
    throw new Error('user.getOne not implemented');
    return { name: '', id: '' };
  };
}
