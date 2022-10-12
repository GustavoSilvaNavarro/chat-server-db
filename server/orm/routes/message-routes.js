'use strict';
const Router = require('@koa/router');

const { getAllMessages, saveChatMessages } = require('../controllers/message-controllers');

const router = new Router();

router.get('/message', getAllMessages);

router.post('/message', saveChatMessages);

module.exports = router;
