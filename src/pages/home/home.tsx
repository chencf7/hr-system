import React from 'react';
import Layout from 'components/Navbar';

import 'assets/css/home.scss';
interface IProps{}
interface IState{}

class Homecomp extends React.Component<IProps, IState>{
  render(){
    return (
      <Layout>
        <div>123</div>
      </Layout>
    );
  }
}

export default Homecomp;