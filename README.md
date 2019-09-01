# node-ts-server

- [heroku](https://signup.heroku.com/): 注册 heroku
- [当前已经部署后的一个测试地址](https://stark-garden-78805.herokuapp.com/)
- 安装 heroku cli mac 使用 brew 安装

```bash
brew install heroku/brew/heroku
```

- [使用示例进行测试](https://devcenter.heroku.com/articles/getting-started-with-nodejs#prepare-the-app)

- [部署](https://devcenter.heroku.com/articles/getting-started-with-nodejs#deploy-the-app)

- [ ] ~~[定义 procfile](https://devcenter.heroku.com/articles/procfile)~~

```bash
git clone https://github.com/heroku/node-js-getting-started.git
cd node-js-getting-started
# 安装
npm i

# 启动
npm start 或者使用 heroku local web

# 创建应用名 可自定义应用名称 或者随机生成
heroku create <appName?>

# 部署
git push heroku master

# 打开部署后的网站
heroku open

# 查看日志
heroku logs --tail
```
