import Koa from 'koa';
import chalk from 'chalk';

import { IP } from './utils';

const app = new Koa();
const { log } = console;

app.use(async (ctx) => {
  ctx.body = 'Hello World';
});

app.on('error', (err) => {
  console.log(chalk.bgBlue('server error', err));
});

app.listen(3000, () => {
  console.log(`server running on
    ${chalk.blue.bold(`
      Local: http://localhost:3000
      IP: http://${IP}:3000
    `)}
  `);
});
