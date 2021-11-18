import { IncomingMessage, Server, ServerResponse } from 'http';

let errorCount = 0;

export const vanillaCatchErrorHandler = (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  res.writeHead(400, {
    'Content-Type': 'text/plain',
  });
  res.write('something went wrong. please retry.');
  res.end();
};

export default function koaErrorHandler(vanillaServer: Server) {
  vanillaServer.on('error', (err) => {
    console.log('error occurred on vanilla sever level');
  });
}
