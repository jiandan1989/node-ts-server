import Koa from 'koa';
import * as http from 'http';
import chalk from 'chalk';

import { IP } from './utils';

const app = new Koa();

app.use(async (ctx: any) => {
  ctx.body = 'Hello World';
});

app.on('error', (err: any) => {
  console.log(chalk.bgBlue('server error', err));
});

// app.listen(3000, () => {

// });

const server = http.createServer(app.callback());

server.listen(3000);

server.on('listening', () => {
  console.log(`server running on
    ${chalk.blue.bold(`
      Local: http://localhost:3000
      IP: http://${IP}:3000
    `)}
  `);
});
