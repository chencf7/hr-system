import React from 'react';
import {connect} from 'react-redux';
import {Icon} from 'antd';
import {getMenulistByuser} from 'redux/actions/homeAction';

import 'assets/css/home.scss';

interface IProps{
  getMenulistByuser?: any
}

// state不能null
class Navbarcomp extends React.Component<IProps, {}>{
  constructor(props: any){
    super(props);
  }
  componentDidMount(){
    debugger;
    this.props.getMenulistByuser();
  }
  render(){
    return (
      <div>
        <header className="hr-header">
          <a href="/" className="hr-navbar-brand">人力资源办公系统</a>
          <div className="hr-navbar-content">
            <div></div>
            <ul className="hr-navbar-group">
              <li className="hr-navbar-item">
                <span id="idspan_user">陈超凡</span>
                <Icon type="mail" style={{fontSize: 14, paddingLeft: 5}} />
              </li>
              <li className="hr-navbar-item"><a>退出</a></li>
            </ul>
          </div>
        </header>
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
              </li>
            </ul>
          </nav>
          <div className="menu-content">
            12345
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps=(state: any) => ({
  menuList: state.menuList
})
// const mapDispatchToProps=(dispatch:any)=>({
//   doChangeCategorys: (menuList:Array<any>)=>dispatch(changeCategorys(menuList))
// });

export default connect(
  mapStateToProps,
  {getMenulistByuser}
)(Navbarcomp);
// export default connect(
//   mapStateToProps,
//   {getMenulist}
// )(Navbarcomp);