import React from 'react';
import {BrowserRouter as Brouter, Switch, Route} from 'react-router-dom';

import Login from 'pages/home/login';
import Home from 'pages/home/home';

export default ()=>{
  return (
    <Brouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Brouter>
  );
}