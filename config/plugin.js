'use strict';

const path = require('path');

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  // vue: {
  //   enable: true,
  //   package: 'egg-view-vuejs',
  // },
  ua: {
    enable: true,
    path: path.join(__dirname, '../app/lib/plugin/egg-ua'),
  },
  vuessr: {
    enable: true,
    path: path.join(__dirname, '../app/lib/plugin/egg-view-vuessr'),
  }
};
