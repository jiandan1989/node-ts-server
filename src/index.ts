import Koa from 'koa';
import http from 'http';
import chalk from 'chalk';
import cors from 'koa2-cors';
import userRoutes from './routes/userRouter';
import bodyParser from './middlewares/bodyParser';
import { config } from './config';

const app = new Koa();

app.proxy = true;

app.use(
  cors({
    origin: '*',
    exposeHeaders: ['Authorization'],
    credentials: true,
    allowMethods: ['GET', 'PUT', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'X-Custom-Header', 'anonymous'],
    // keepHeadersOnError: true,
  })
);

app.use(async (ctx: { set: (arg0: string, arg1: string) => void }, next: () => void) => {
  ctx.set('Access-Control-Allow-Origin', '*');
  next();
});
app.use(userRoutes);
app.use(bodyParser);

// 输入模板
// app.use(views(path.resolve(__dirname, './template/'), { extension: 'ejs' }));

// app.use(async function(ctx: {
//   render: (arg0: string, arg1: { metaInfo: { title: string } }) => void;
// }) {
//   await ctx.render('index', { metaInfo: { title: 'home' } });
// });

app.on('error', (err: any) => {
  console.log(chalk.bgBlue('server error', err));
});

const server = http.createServer(app.callback());
server.listen(config.port);

server.on('listening', () => {
  console.log(`server running on
    ${chalk.blue.bold(`
      Local: http://localhost:${config.port}
    `)}
  `);
});
