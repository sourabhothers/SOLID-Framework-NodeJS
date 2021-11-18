import http from 'http';
import moduleName from 'module';
import vanillaRouter from './buildVanillaRouter';
import { vanillaCatchErrorHandler } from './vanillaErrorHandler';

const server = http.createServer(async (req, res) => {
  try {
    const context = { req, res, params: {}, query: {} };
    await vanillaRouter(context);
  } catch (error) {
    console.log(error);
    vanillaCatchErrorHandler(req, res);
  }
});

const PORT = 3000;
const HOSTNAME = '127.0.0.1';

server.listen(3000, () => {
  console.log(`Vanilla app running http://${HOSTNAME}:${PORT} `);
});
