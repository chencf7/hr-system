import React from 'react';
import {connect} from 'react-redux';
import Layout from 'components/Layout';

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
      <Layout>
        <div>12333</div>
      </Layout>
    );
  }
}

const mapStateToProps=(state: any) => {
  const {homeState} = state;
  return {currentmenu: homeState.currentMenu};
}
export default connect(mapStateToProps)(Orgcomp);