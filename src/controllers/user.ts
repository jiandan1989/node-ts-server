// import uuid from 'uuid';

const userList = [
  { id: 101, userName: 'Fight Club' },
  { id: 102, userName: 'Sharp Objects' },
  { id: 103, userName: 'Frankenstein' },
  { id: 101, userName: 'Into The Wild' },
];

export async function addUser(ctx: any, next: any) {
  ctx.body = 'success';
  await next();
}

export async function queryUserInfo(ctx: any, next: any) {
  ctx.body = JSON.stringify(userList[0]);
  next();
}

export async function getAllUserList(ctx: any, next: any) {
  ctx.body = userList;
  next();
}

export async function login(ctx: any, next: any) {
  ctx.body = '111';
  next();
}
