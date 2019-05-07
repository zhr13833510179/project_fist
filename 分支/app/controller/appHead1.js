'use strict';

const Controller = require('egg').Controller;

class AppHead1Controller extends Controller {
    async index() {
        await this.ctx.render('AppHead1.html', {
    title:'开门记录',
     list:[
      {subtitler:'开门',subtitleTow:'2分钟前',name:'幻想乡'},
      {subtitler:'开门',subtitleTow:'1天前',name:'幻想乡'},
      {subtitler:'开门',subtitleTow:'1天前',name:'幻想乡'},
      {subtitler:'开门',subtitleTow:'18天前',name:'幻想乡'},
     ],
            urlsix:'../public/images/fase1@2x.png',
            imgurlone:'../public/images/Opendoor2@2x.3.png',
            urlimg:'../public/images/Callthepolice1@2x.2.png',
            urlimgone:'../public/images/Relation1@2x.1.png',
        })
    }
}

module.exports = AppHead1Controller;