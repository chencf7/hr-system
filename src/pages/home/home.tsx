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
            <ul className="menu-group clear">
              <li className="menu-item">
                <a>
                  <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-zuzhiguanli"></use>
                  </svg>
                  组织管理
                </a>
                <div className="menu-item_in" >
                  <dl className="fr">
                      <dd>组织机构管理</dd>
                      <dd>人员调动管理</dd>
                      <dd>密码信息重置</dd>
                    </dl>
                </div>
              </li>
              <li className="menu-item">
                <a>考勤管理</a>
                <div className="menu-item_in" >
                  <div className="wrap">
                      <dl className="fr">
                        <dd>1</dd>
                        <dd>2</dd>
                        <dd>3</dd>
                      </dl>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Homecomp;