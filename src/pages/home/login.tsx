import React from 'react';
import {Icon} from 'antd';

import 'assets/css/home.scss';

export interface loginProps{

}

// 'loginProps' describes the shape of props.
// State is never set so we use the '{}' type.
class Login extends React.Component<loginProps, {}>{
  render(){
    return (
      <div>
        <div className="login-background">
        </div>
        <div className="login-content">
          <div className="header">
            {/* <div>人力资源办公系统</div> */}
          </div>
          <div className="outer">
            <div className="middle">
              <div className="inner-content">
                <span className="title">登录</span>
                <div className="row">
                  <input type="text" spellCheck={false} placeholder="请输入登录名"/>
                  <div className="input-addon">
                    <Icon type="user" style={{fontSize: 16}}/>
                  </div>
                </div>
                <div className="row">
                  <div className="input-addon">
                    <Icon type="lock" style={{fontSize: 16}}/>
                  </div>
                  <input type="password" />
                </div>
                <div className="row">
                  <a id="idA_PWD_SwitchToCredPicker" href="#">注册</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;