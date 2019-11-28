import React from 'react';
const PCNewUserCss = require('../css/pc_newUser.css')
export default class PCNewUser extends React.Component {
    constructor(){
        super();
       
    }
    showAPPCode(){
        console.log('please show');
        const tg=window.document.getElementById('appCode');
        tg.style.display='block';
    }
    hideAPPCode(){
        console.log('please hide');
        const tg=window.document.getElementById('appCode');
        tg.style.display='none';
    }
    render() {
        return (
            <div className={PCNewUserCss.backg}>
                <div id='appCode' className={PCNewUserCss.app_code} style={{display:'none'}}>
                    <img src='/src/img/doubanapp_qrcode.png' />
                    <p>iOS / Android 扫码直接下载</p>
                </div>
                <div className={PCNewUserCss.newUser}>
                    <div className={PCNewUserCss.app}>
                        <p>豆瓣 6.0</p>
                        <div className={PCNewUserCss.appDownload}>
                            <a>下载豆瓣 APP</a>
                            <img 
                            src='/src/img/二维码缩略图.png' 
                            onMouseOver={this.showAPPCode.bind(this)}
                            onMouseOut={this.hideAPPCode.bind(this)}
                            />
                        </div>
                    </div>

                    <div className={PCNewUserCss.login}>
                        <div className={PCNewUserCss.login_tab_header}>
                            <ul>
                                <li>短信登录/注册</li>
                                <li>密码登录</li>
                            </ul>
                        </div>
                        <div className={PCNewUserCss.login_tab_index}>
                            <div className={PCNewUserCss.attention}>登录注册表示同意<span>豆瓣使用协议、隐私政策</span></div>
                            <div className={PCNewUserCss.id}>
                                <span>+86</span>
                                <input placeholder='手机号' /></div>
                            <div className={PCNewUserCss.password}>
                                <input placeholder='验证码' />
                                <span>获取验证码</span></div>
                            <button>登录豆瓣</button>
                            <div className={PCNewUserCss.options}>
                                <label><input type='checkbox' />下次自动登录</label>
                                <span>海外手机登录</span>
                            </div>
                        </div>
                        <div className={PCNewUserCss.login_tab_footer}>
                            <span>第三方登录:</span>
                            <img src='/src/img/微信.png' />
                            <img src='/src/img/微博.png' />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}