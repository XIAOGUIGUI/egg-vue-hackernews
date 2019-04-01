'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/user1', controller.home.index1);
  router.get(/^(?!\/api)(?!\/public)/, controller.home.index);
};
