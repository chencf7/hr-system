import React from 'react';
import {BrowserRouter as Brouter, Switch, Route} from 'react-router-dom';
import Login from 'pages/home/login';

export default ()=>{
  return (
    <Brouter>
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
    </Brouter>
  );
}