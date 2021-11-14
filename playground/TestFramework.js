const http = require('http');

class OwnFramework {
  useHandlers = [
    (req, res) => {
      console.log('app.use 1');
    },
  ];
  controllers = [
    (req, res) => {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8;' });
      res.write('<h1>hello ');
      let lastI = 0;
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          res.write(` ${i}`);
        }, i * 1000);
        lastI = i;
      }
      setTimeout(() => {
        res.end(' world</h1>');
      }, (lastI + 1) * 1000);
    },
  ];
  addController = () => {
    this.controllers.unshift((req, res) => {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8;' });
      res.write('<h1>hello ');
      res.end('world 2</h1>');
    });
  };
  mainServerController = (req, res) => {
    this.useHandlers.forEach((currUseHandle) => {
      currUseHandle(req, res);
    });
    this.controllers[0](req, res);
  };
  constructor() {
    const server = http.createServer(this.mainServerController);
    this.server = server;
  }
  use = (handler) => {
    this.useHandlers.push(handler);
  };
  listen = (
    port,
    cb = () => {
      console.log('app started ...');
    },
  ) => {
    this.server.listen(port, cb);
  };
}

const app = new OwnFramework();
app.use(() => {
  console.log('app.use 2');
});
const server = http.createServer(app.mainServerController, (req, res) => {
  console.log('hello');
});

server.listen(3000, () => {
  console.log('server is started ');
});
app.listen(4000);
