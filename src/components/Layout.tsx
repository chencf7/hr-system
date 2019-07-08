import React from 'react';
import {Route} from 'react-router-dom';
import Navbar from 'components/Navbar';

import Home from 'pages/home/home';
import Organization from 'pages/organization/orgmanage';

interface IProps{
  // children?: ReactElement|Array<ReactElement>;
}
export default class Layoutcomp extends React.Component<IProps, {}>{
  constructor(props:Readonly<IProps>){
    super(props);
  }
  componentDidMount(){ }
  render(){
    return (
      <div>
        <Navbar></Navbar>
        <section>
          <Route exact path="/home" component={Home} />
          <Route exact path="/organization" component={Organization} />
          <Route exact path="/" component={Home} />
        </section>
      </div>
    );
  }
}
