'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await this.app.vue.render('vue-ssr-server-bundle.json', { message: 'egg vue server side render'});
  }
}

module.exports = HomeController;
