import React from 'react';
import {Icon} from 'antd';

import 'assets/css/home.scss';

interface IProps {
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
  onClickloginIn():void{
    console.log(this.un.value, this.pw.value);
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
                  <input type="text" ref={(input)=>this.un=input} spellCheck={false} placeholder="请输入登录名"/>
                </div>
                <div className="row">
                  <div className="input-addon">
                    <Icon type="lock" style={{fontSize: 16}}/>
                  </div>
                  <input type="password" ref={(input)=>this.pw=input}/>
                </div>
                <div className="row">
                  <a id="idA_Loginin" href="#">注册</a>
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