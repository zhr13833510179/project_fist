'use strict';

const Controller = require('egg').Controller;

class AppRegisteroController extends Controller {
  async index() {
    await this.ctx.render('appRegister1.html',{
        registe: "忘记密码",
        MB: "手机",
        PIN: "验证码",
        PW: "密码",
        HPIN: "获取验证码",
<<<<<<< HEAD
        LD: "忘记密码",
=======
        LD: "确定",
>>>>>>> 9941457b1a826620447b0cbb3835028b37311644
        agree: "注册代表同意",
        conesal: "《隐私条款》",
        jpg2:"/public/images/状态栏.png"
    })
  }
}

module.exports = AppRegisteroController;
