import { Context as KoaContext } from 'koa';
import BaseContext from '../../../core/base/BaseContext';

// Koa specific context builder
// export default class BuildKoaContext extends BaseContext {
//   statusCode: number = 200;
//   responseData: any;
//   bodyData: unknown;
//   frameworkName: string;
//   frameworkCtx: KoaContext;
//   constructor(koaCtx: KoaContext) {
//     super();
//     this.frameworkCtx = koaCtx;
//     // Set request body
//     this.bodyData = koaCtx.body;
//     this.frameworkName = 'koa';
//   }
//   status = (statusCode: number) => {
//     this.statusCode = statusCode;
//     return this;
//   };
//   send = (responseData: any) => {
//     this.responseData = responseData;
//     this.execute();
//   };
//   execute = () => {
//     const koaCtx = this.frameworkCtx;
//     koaCtx.status = this.statusCode;
//     koaCtx.body = this.responseData;
//   };
// }

const BuildKoaContext = (koaCtx: KoaContext): BaseContext => {
  return {
    bodyData: koaCtx.body,
    statusCode: 200,
    responseData: '',
    frameworkName: 'koa',
    frameworkCtx: koaCtx,
    locals: {},
    status: function (statusCode: number) {
      this.statusCode = statusCode;
      return this;
    },
    send: function (responseData: any) {
      this.responseData = responseData;
      this.execute();
    },
    json: function (objData: { [key: string]: any }) {
      const koaCtx = this.frameworkCtx as KoaContext;
      koaCtx.set('Content-Type', 'application/json; charset: utf-8');
      this.responseData = JSON.stringify(objData);
      this.execute();
    },
    execute: function () {
      const koaCtx = this.frameworkCtx as KoaContext;
      koaCtx.status = this.statusCode;
      koaCtx.body = this.responseData;
    },
  };
};

export default BuildKoaContext;
