import React, { ReactElement } from 'react';
import Navbar from 'components/Navbar';

interface IProps{
  children: ReactElement|Array<ReactElement>;
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
          {this.props.children}
        </section>
      </div>
    );
  }
}
