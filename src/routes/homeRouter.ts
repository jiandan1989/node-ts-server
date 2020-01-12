import Router from 'koa-router';
import { home } from '../controllers/home';

const router = new Router();

router.get('/', home);

export default router.routes();
