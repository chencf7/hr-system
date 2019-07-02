import React from 'react';
import Navbar from 'components/Navbar';

import 'assets/css/home.scss';

interface IProps{

}

interface IState{

}

class Homecomp extends React.Component<IProps, IState>{
  render(){
    return (
      <div>
        <Navbar></Navbar>
        <div className="hr-menu">
          <nav>
            <ul className="menu-group">
              <li className="menu-item">
                <a>
                  <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-zuzhiguanli"></use>
                  </svg>
                  组织管理
                </a>
                <div></div>
              </li>
              <li className="menu-item">
                <a>考勤管理</a>
                <div></div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Homecomp;