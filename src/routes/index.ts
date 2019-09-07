/**
 * @desc: 路由配置
 */
import Router from 'koa-router';
import userRouter from './userRouter';

const router = new Router();

router.use(userRouter);

export default router;
