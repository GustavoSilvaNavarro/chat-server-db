'use strict';
const Router = require('@koa/router');

const { getAllMessages, saveMessages } = require('../controllers/message-controllers');

const router = new Router();

router.get('/message', getAllMessages);

router.post('/message', saveMessages);

module.exports = router;
