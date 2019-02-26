/* eslint valid-jsdoc: "off" */

'use strict';

const path = require('path')
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1551108819525_8947';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.vue = {
    cache: true,
    rendererOption: {
      template: path.join(appInfo.baseDir, 'app/view/layout.html'),
      clientManifest: path.join(appInfo.baseDir, 'config/vue-ssr-client-manifest.json'),
      runInNewContext: false
    }
   };

  return {
    ...config,
    ...userConfig
  };
};
