'use strict';
const Router = require('@koa/router');

const { getAllMessages, saveMessages } = require('../controllers/message-controllers');

const router = new Router();

//! Get - Provide client with all messages
router.get('/message', getAllMessages);

//! POST - Save messages
router.post('/message', saveMessages);

module.exports = router;
