'use strict';
require('dotenv').config();
const Koa = require('koa');
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');
const path = require('path');

const messageRoutes = require('./routes/message-routes');
const pageNotFound = require('./middleware/notFoundPage');

const app = new Koa();

const PORT = process.env.PORT || 3000;

app.use(serve(path.join(__dirname, '../../client')));

app.use(bodyParser());

app.use(messageRoutes.routes());
app.use(messageRoutes.allowedMethods());

app.use(pageNotFound);

app.listen(PORT, () => {
  console.log(`Koa server is running in PORT: ${PORT} - Worker: ${process.pid}`);
});
