import React from 'react';
import {Icon} from 'antd';

import 'assets/css/home.scss';
import {Http} from 'utils/Utilmethod';
import * as URL from 'utils/Url';

interface IProps {
  history: any
}

// 'loginProps' describes the shape of props.
// State is never set so we use the '{}' type.
class Login extends React.Component<IProps, {}>{
  constructor(props: IProps){
    super(props);
  }
  componentDidMount(){
    this.un.focus();
  }
  un: any;
  pw: any;
  // 登录按钮事件
  onClickloginIn():void{
    // console.log(this.un.value, this.pw.value);
    Http.post(URL.LogininURL, {});
  }
  // 键盘enter事件
  enterKeyupLoginIn(event?: React.KeyboardEvent<HTMLInputElement>){
    if(event&&event.keyCode===13){
      this.props.history.push('/home');
    }
  }
  render(){
    return (
      <div>
        <div className="login-background">
        </div>
        <div className="login-content">
          <div className="header">
          </div>
          <div className="outer">
            <div className="middle">
              <div className="inner-content">
                <span className="title">登录</span>
                <div className="row">
                  <div className="input-addon">
                    <Icon type="user" style={{fontSize: 16}}/>
                  </div>
                  <input type="text"
                      ref={(input)=>this.un=input}
                      spellCheck={false}
                      placeholder="请输入登录名"
                      onKeyUp={(e)=>this.enterKeyupLoginIn(e)}
                  />
                </div>
                <div className="row">
                  <div className="input-addon">
                    <Icon type="lock" style={{fontSize: 16}}/>
                  </div>
                  <input type="password"
                      ref={(input)=>this.pw=input}
                      onKeyUp={(e)=>this.enterKeyupLoginIn(e)}
                  />
                </div>
                <div className="row">
                  <a id="ida_register" href="#">注册</a>
                </div>
                <div className="row">
                  <button onClick={()=>this.onClickloginIn()}>登陆</button>
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