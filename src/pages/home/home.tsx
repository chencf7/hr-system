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
      </div>
    );
  }
}

export default Homecomp;