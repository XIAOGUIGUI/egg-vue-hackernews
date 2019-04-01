'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const context = {
      title: 'Vue HN 2.0',
      url: this.ctx.request.url,
      test: {name: 'eeee'}
    }
    await this.ctx.render('vue-ssr-server-bundle.json', { message: 'egg vue server side render'}, {
      context
    })
  }

  async index1() {
    const context = {
      title: 'Vue HN 2.0',
      url: this.ctx.request.url,
      test: {name: 'eeee11'}
    }
    await this.ctx.renderClient('vue-ssr-server-bundle.json', { message: 'egg vue server side render'}, {
      local: context
    })
  }
}

module.exports = HomeController;
