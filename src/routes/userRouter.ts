import Router from 'koa-router';
import { queryUserInfo, getAllUserList, addUser, login } from '../controllers/user';

const router = new Router({
  prefix: '/user',
});

router.post('/login.json', login);
router.post('/addUser.json', addUser);
router.get('/list.json', getAllUserList);
router.get('/queryUserInfo.json', queryUserInfo);

export default router.routes();
