'use strict';
const notFoundPage = (ctx) => {
  ctx.response.status = 404;
  ctx.body = '<h1>Page not Found</h1>';
};

module.exports = notFoundPage;
