'use strict';
const Router = require('@koa/router');

const { getAllMessages, postMessage } = require('../controllers/message-controllers');

const router = new Router();

router.get('/message', getAllMessages);

router.post('/message', postMessage);

module.exports = router;
