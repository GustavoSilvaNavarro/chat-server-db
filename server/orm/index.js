'use strict';
require('dotenv').config();
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const serve = require('koa-static');
const path = require('path');

const sequelize = require('./models/connectionDB');
// require('./models/message-models');

const messageRoutes = require('./routes/message-routes');
const notFoundPage = require('./middleware/notFoundPage');

const app = new Koa();
const PORT = process.env.PORT || 3000;

app.use(serve(path.join(__dirname, '../../client')));

app.use(bodyParser());

app.use(messageRoutes.routes());
app.use(messageRoutes.allowedMethods());

app.use(notFoundPage);

(async function main () {
  try {
    await sequelize.sync({ force: false });
    console.log('Connection has been established successfully');

    app.listen(PORT, () => {
      console.log(`Server is running in PORT: ${PORT} - Worker: ${process.pid}`);
    });
  } catch (err) {
    console.log('Unable to connect to database: ', err);
  }
})();
