'use strict';
require('dotenv').config();
const Koa = require('koa');
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');
const path = require('path');

const messageRoutes = require('./routes/message-routes');
const notFoundPage = require('./middleware/notFoundHandler');

const app = new Koa();
const PORT = process.env.PORT || 3000;

app.use(serve(path.join(__dirname, '../../client')));

app.use(bodyParser());

app.use(messageRoutes.routes());
app.use(messageRoutes.allowedMethods());

app.use(notFoundPage);

app.listen(PORT, () => {
  console.log(`Koa Server running in port: ${PORT} - Worker: ${process.pid}`);
});
