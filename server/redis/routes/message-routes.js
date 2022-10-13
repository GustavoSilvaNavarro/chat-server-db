'use strict';
const Router = require('@koa/router');

const { getAllMessages, saveMessage } = require('../controllers/message-controllers');

const router = new Router();

router.get('/message', getAllMessages);

router.post('/message', saveMessage);

module.exports = router;
