'use strict';

const Controller = require('egg').Controller;

class SignController extends Controller {
  async index() {
    await this.ctx.render('sign.html',{
        user: "用户名",
        password_box: "密码",
        sign_in: "登录",
        register: "注册用户",
        forget: "忘记密码"
    })
    
  };
  async login() {
    const username = this.ctx.request.body.username;
    const password = this.ctx.request.body.password;
    if (username === "123" && password === "456") {
      await this.ctx.redirect("/addSafefive")
    } else {
      await this.ctx.redirect("/cgw")
    }
  }

  
  async cgw() {
    await this.ctx.render("cgw.html")
  }
}

module.exports = SignController;
