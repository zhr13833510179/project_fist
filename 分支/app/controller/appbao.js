'use strict';

const Controller = require('egg').Controller;

class AppbaoController extends Controller {
  async index() {
   await this.ctx.render('AppBao.html',{
    title:'报警记录',
    subtitler:'有人移动保险箱',
        subtitler3:'修改配置',
        subtitleTow:'2分钟前',
        subtitleTow2:'1天前',
        subtitleTow3:'18天前',
        name:'幻想乡',
        subtitler2:'保险箱电量低于20%',
        subtitler4:'保险箱电量低于30%',
        urlsix:'../public/images/fase1@2x.png',
            imgurlone:'../public/images/Opendoor1@2x.1.png',
            urlimg:'../public/images/Callthepolice2@2x.2.png',
            urlimgone:'../public/images/Relation1@2x.1.png',
   })
  }
}

module.exports = AppbaoController;