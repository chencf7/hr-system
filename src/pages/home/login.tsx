import React from 'react';
import 'assets/css/home.scss';

export interface loginProps{

}

// 'loginProps' describes the shape of props.
// State is never set so we use the '{}' type.
class Login extends React.Component<loginProps, {}>{
  render(){
    return (
      <div className="content">
        <div className="login-header">
          <div>人力资源办公系统</div>
        </div>
      </div>
    );
  }
}

export default Login;