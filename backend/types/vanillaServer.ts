// import { IncomingMessage } from "http";
import { IncomingMessage, ServerResponse } from 'http';

export interface IVanillaContext {
    req: IncomingMessage;
    res: ServerResponse;
    params: { [key: string]: any };
    query: { [key: string]: any };
}
