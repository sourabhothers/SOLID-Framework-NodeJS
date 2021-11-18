import { IncomingMessage, ServerResponse } from 'http';
import { IVanillaContext } from 'types/vanillaServer';
import BaseContext from '../../../core/common/BaseContext';

// Vanilla specific context builder
// export default class BuildVanillaContext extends BaseContext {
//   statusCode: number = 200;
//   responseData: any;
//   bodyData: unknown;
//   frameworkName: string;
//   frameworkCtx: VanillaContext;
//   constructor(vanillaCtx: VanillaContext) {
//     super();
//     this.frameworkCtx = vanillaCtx;
//     // Set request body
//     this.bodyData = vanillaCtx.body;
//     this.frameworkName = 'vanilla';
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
//     const vanillaCtx = this.frameworkCtx;
//     vanillaCtx.status = this.statusCode;
//     vanillaCtx.body = this.responseData;
//   };
// }

const BuildVanillaContext = (context: IVanillaContext): BaseContext => {
  return {
    bodyData: '',
    statusCode: 200,
    responseData: '',
    frameworkName: 'vanilla',
    frameworkCtx: context,
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
      context.res.setHeader('Content-Type', 'application/json; charset: utf-8');
      this.responseData = JSON.stringify(objData);
      this.execute();
    },
    execute: function () {
      context.res.statusCode = this.statusCode;
      context.res.end(this.responseData);
    },
    stopNext: () => {
      return true;
    },
  };
};

export default BuildVanillaContext;
