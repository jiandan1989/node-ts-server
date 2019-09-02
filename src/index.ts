import Koa from 'koa';
import * as http from 'http';
import * as path from 'path';
import chalk from 'chalk';
import views from 'koa-views';

const app = new Koa();

app.use(views(path.resolve(__dirname, './template/'), { extension: 'ejs' }));

app.use(async function(ctx) {
  await ctx.render('index', { metaInfo: { title: 'home' } });
});

app.on('error', (err: any) => {
  console.log(chalk.bgBlue('server error', err));
});

const server = http.createServer(app.callback());

server.listen(3000);

server.on('listening', () => {
  console.log(`server running on
    ${chalk.blue.bold(`
      Local: http://localhost:3000
    `)}
  `);
});
