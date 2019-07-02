import React from 'react';
import {Icon} from 'antd';

import 'assets/css/home.scss';

interface IProps{

}

// state不能null
class Navbarcomp extends React.Component<IProps, {}>{
  render(){
    return (
      <header className="hr-header">
        <a href="/" className="hr-navbar-brand">人力资源办公系统</a>
        <div className="hr-navbar-content">
          <div></div>
          <ul className="hr-navbar-group">
            <li className="hr-navbar-item">
              <span id="idspan_user">陈超凡</span>
              <Icon type="mail" style={{fontSize: 14, paddingLeft: 5}} />
            </li>
            <li className="hr-navbar-item">退出</li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Navbarcomp;