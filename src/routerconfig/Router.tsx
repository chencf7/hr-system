import React from 'react';
import {HashRouter as Brouter, Switch, Route} from 'react-router-dom';

import Layout from 'components/Layout';
import Login from 'pages/home/login';
// import Home from 'pages/home/home';
// import Organization from 'pages/organization/orgmanage';

export default ()=>{
  return (
    <Brouter>
      {/* <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/layout" component={Layout} />
        <Route exact path="/organization" component={Organization} />
        <Route exact path="/" component={Home} />
      </Switch> */}
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/" component={Layout} />
      </Switch>
    </Brouter>
  );
}