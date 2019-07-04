import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Icon} from 'antd';
import {
  getMenulistByuser,
  changeSecondmenu,
  clickSecondmenu
} from 'redux/actions/homeAction';
import 'assets/css/home.scss';

interface IProps{
  menulist:Array<any>,
  smenuvisible:boolean,
  smenulist:Array<any>,
  getMenulistByuser?:any,
  changeSecondmenu:Function,
  clickSecondmenu:Function
}

// state不能null
class Navbarcomp extends React.Component<IProps, any>{
  constructor(props:Readonly<IProps>){
    super(props);
  }
  componentDidMount(){
    this.props.getMenulistByuser();
  }
  firstMenuhoverin(menuname:string){
    //console.log(menuname);
    this.props.changeSecondmenu(true, menuname);
  }
  firstMenuhoverout(){
    this.props.changeSecondmenu(false);
  }
  secondMenuclick(menuname: string){
    this.props.clickSecondmenu(menuname);
  }
  CreateMenulist(){
    const {menulist}=this.props;
    // const getSecondMenus = (menus:any)=>{
    //   if(menus&&menus instanceof Array){
    //     return menus.map((m)=><dd key={m.name}>{m.name}</dd>);
    //   }else
    //     return null;
    // }
    return menulist.map((data, index)=>{
      let iconre=null;
      if(index===0){
        iconre = (
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-zuzhiguanli"></use>
          </svg>
        );
      }
      return (
        <li
            className="menu-item"
            key={data.id}
            onClick={()=>this.firstMenuhoverin(data.name)}
        >
          <a>{iconre}{data.name}</a>
          {/* <div className="menu-item_in">
            <div className="menu-content-group">
              <dl>{getSecondMenus(data.children)}</dl>
            </div>
          </div> */}
        </li>
      );
    })
  }
  render(){
    const {smenuvisible, smenulist} = this.props;
    const secondMenustyle = {display: smenuvisible?'block':'none'};
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
        <div
            className="hr-menu"
            onMouseLeave={()=>this.firstMenuhoverout()}
        >
          <nav>
            <ul className="menu-group clear">
              {this.CreateMenulist()}
            </ul>
          </nav>
          <div className="menu-content" style={secondMenustyle}>
            <div className="menu-content-group">
              <dl>
                {smenulist.map((md)=>(
                  <dd key={md.name} onClick={()=>this.secondMenuclick(md.name)}>
                    <Link to="./organization">{md.name}</Link>
                  </dd>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps=(state: any) => {
  const {homeState} = state;
  return {
    menulist: homeState.menuList,
    smenuvisible: homeState.secondmenuVisible,
    smenulist: homeState.secondmenuList
  };
}
export default connect(
  mapStateToProps,
  {getMenulistByuser, changeSecondmenu, clickSecondmenu}
)(Navbarcomp);
