import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducer from 'redux/reducers';
import Router from 'routerconfig/Router';

const middleware:Array<any> = [thunk];
//当配置环境为非生产环境时，加入logger
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store=createStore(
  reducer,
  applyMiddleware(...middleware)
);

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
