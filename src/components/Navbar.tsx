import React from 'react';
import {connect} from 'react-redux';
import {Icon} from 'antd';
import {
  getMenulistByuser,
  changeSecondmenu
} from 'redux/actions/homeAction';
import 'assets/css/home.scss';

interface IProps{
  menulist:Array<any>,
  smenuvisible:boolean,
  smenulist:Array<any>,
  getMenulistByuser?:any,
  changeSecondmenu:Function
}

// state不能null
class Navbarcomp extends React.Component<IProps, {}>{
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
  firstMenuhoverOut(){
    this.props.changeSecondmenu(false);
  }
  FirstMenulist(){
    const {menulist}=this.props;
    return menulist.map((data, index)=>{
      if(index===0){
        return (
          <li
              className="menu-item"
              key={data.id}
              onMouseEnter={()=>this.firstMenuhoverin(data.name)}
          >
            <a>
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-zuzhiguanli"></use>
              </svg>
              {data.name}
            </a>
          </li>
        );
      }else{
        return (
          <li
              className="menu-item"
              key={data.id}
              onMouseEnter={()=>this.firstMenuhoverin(data.name)}
          >
            <a>{data.name}</a>
          </li>
        );
      }
    })
  }
  render(){
    const {smenuvisible, smenulist} = this.props;
    // debugger;
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
            onMouseLeave={()=>this.firstMenuhoverOut()}
        >
          <nav>
            <ul className="menu-group clear">
              {this.FirstMenulist()}
            </ul>
          </nav>
          <div className="menu-content" style={secondMenustyle}>
            <div className="menu-content-group">
              <dl>
                {smenulist.map((d)=><dd key={d.name}>{d.name}</dd>)}
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
  {getMenulistByuser, changeSecondmenu}
)(Navbarcomp);
