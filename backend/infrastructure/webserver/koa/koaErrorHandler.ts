import Application from 'koa';

let errorCount = 0;

export default function koaErrorHandler(koaApp: Application) {
  koaApp.on('error', (err) => {
    if (err.code === 'EPIPE') {
      // console.log(`koa app-level EPIPE error : `, err);
    } else if (err.code === 'ECONNRESET') {
      // console.log(`koa app-level ECONNRESET error : `, err);
    } else {
      // console.log(`koa app-level UNKNOWN error`, err);
    }
  });
}
