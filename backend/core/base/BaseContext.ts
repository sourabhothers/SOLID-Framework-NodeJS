export default abstract class BaseContext {
  abstract statusCode: number;
  abstract responseData: any;
  abstract bodyData: unknown;
  abstract locals: { [key: string]: any };
  abstract frameworkName: string;
  abstract frameworkCtx: unknown;
  status = (statusCode: number) => {
    throw new Error('BaseContext status method not implemented .');
    return this;
  };
  send = (responseData: any) => {
    throw new Error('BaseContext send method not implemented .');
    return;
  };
  json = (objData: { [key: string]: any }) => {
    throw new Error('BaseContext json method not implemented .');
    return;
  };
  execute = () => {
    throw new Error('BaseContext execute method not implemented .');
    return;
  };
}
