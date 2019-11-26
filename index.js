const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser')();
const jwt = require('./utils/jwt');
const router = require('./server/index');
app.use(bodyParser);
jwt(app);
app.use(router.routes());
app.listen(3000);

console.log('Server running on port 3000');
