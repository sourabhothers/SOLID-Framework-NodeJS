import UserEntity from '../UserEntity';

const buildError = (entity: string, methodName: string) =>
  `${entity}.${methodName} method not implemented ...`;

export default class UserRepository {
  persist = async (user: UserEntity): Promise<any> => {
    throw new Error(buildError('User', 'persist'));
  };
}
