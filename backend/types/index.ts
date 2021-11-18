import UserEntity from '../core/user/UserEntity';
import UserRepoBase from '../core/user/UserRepoBase';
import BaseContext from '../core/common/BaseContext';

export type BaseController = (ctx: BaseContext) => void | Promise<void>;
export type BaseMiddleware = (
  ctx: BaseContext,
) => void | Promise<void | boolean> | boolean;

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

export interface ServiceLocator<UserRepoORMName> {
  userRepository: UserRepoORMName;
  userSerializer: {
    serialize: (user: UserEntity) => {
      id: string;
      name: string;
      timestamp: string;
    };
  };
}
