'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    console.log('index')
    console.log(this.ctx.request.url)
    await this.ctx.render('vue-ssr-server-bundle.json', { message: 'egg vue server side render'})
  }
}

module.exports = HomeController;
