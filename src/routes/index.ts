import Router from 'koa-router';
import userRouter from './userRouter';
import homeRouter from './homeRouter';

const router = new Router();

router.use(userRouter);
router.use(homeRouter);
console.log(router.routes());

export default router;
