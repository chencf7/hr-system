import React from 'react';
import {connect} from 'react-redux';
// import Layout from 'components/Layout';

import 'assets/css/home.scss';

interface IProps{
  currentmenu:string,
}
interface IState{}

class Orgcomp extends React.Component<IProps, IState>{
  constructor(props:Readonly<IProps>){
    super(props);
  }
  render(){
    return (
      <div>组织管理页，包含相关组织信息</div>
    );
  }
}

const mapStateToProps=(state: any) => {
  const {homeState} = state;
  return {currentmenu: homeState.currentMenu};
}
export default connect(mapStateToProps)(Orgcomp);