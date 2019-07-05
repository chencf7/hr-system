import React from 'react';
import {connect} from 'react-redux';
import Layout from 'components/Layout';

import 'assets/css/home.scss';
interface IProps{
  currentmenu:string;
}
interface IState{}

class Homecomp extends React.Component<IProps, IState>{
  constructor(props:Readonly<IProps>){
    super(props);
  }
  render(){
    return (
      <Layout>
        <div>{this.props.currentmenu}</div>
      </Layout>
    );
  }
}

const mapStateToProps=(state: any) => {
  const {homeState} = state;
  return {currentmenu: homeState.currentMenu};
}
export default connect(mapStateToProps)(Homecomp);