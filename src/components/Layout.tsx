import React, { ReactElement } from 'react';
import Navbar from './Navbar';

interface IProps{
  children: ReactElement | Array<ReactElement> 
}
export default class Layoutcomp extends React.Component<IProps, {}>{
  constructor(props:Readonly<IProps>){
    super(props);
  }
  componentDidMount(){
  }
  render(){
    console.log("123333");
    return (
      <div>
        <Navbar></Navbar>
        <section>
          this.props.children
        </section>
      </div>
    );
  }
}
