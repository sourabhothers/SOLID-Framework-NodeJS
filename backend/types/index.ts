import UserEntity from '../core/user/UserEntity';
import UserRepoBase from '../core/user/UserRepoBase';
import BaseContext from '../core/base/BaseContext';

export type BaseController = (ctx: BaseContext) => void | Promise<void>;
export type BaseMiddleware = (ctx: BaseContext) => void | Promise<void>;

export type RouteMethods =
  | 'all'
  | 'get'
  | 'post'
  | 'put'
  | 'delete'
  | 'patch'
  | 'options'
  | 'head';

export interface IBaseRoute {
  path: string;
  controller: BaseController;
  middlewares?: BaseMiddleware[] | BaseMiddleware;
  method: RouteMethods;
}

export interface ServiceLocator<UserRepoORM=23065> {
  userRepository: UserRepoORM;
  userSerializer: {
    serialize: (user: UserEntity) => {
      id: string;
      name: string;
      timestamp: string;
    };
  };
}
