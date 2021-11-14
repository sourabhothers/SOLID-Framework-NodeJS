import { Context as KoaContext } from 'koa';

export abstract class BaseContext {
  abstract statusCode: number;
  abstract responseData: any;
  abstract bodyData: unknown;
  status = (statusCode: number) => {
    throw new Error('BaseContext status method not implemented .');
    return this;
  };
  send = (responseData: any) => {};
  execute = () => {};
}

// Koa specific context builder
export default class BuildNewRequestCtx extends BaseContext {
  private koaCtx: KoaContext;
  statusCode: number = 200;
  responseData: any;
  bodyData: unknown;
  constructor(koaCtx: KoaContext) {
    super();
    this.koaCtx = koaCtx;
    // Set request body
    this.bodyData = koaCtx.body;
  }
  status = (statusCode: number) => {
    this.statusCode = statusCode;
    return this;
  };
  send = (responseData: any) => {
    this.responseData = responseData;
    this.execute();
  };
  execute = () => {
    this.koaCtx.body = this.responseData;
  };
}
