import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, Switch} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import MainReducer from './reducers/main-reducer'

import {history} from './history';
import Login from './component/login';
import Home from './component/home';
import Common from './layout/common';
import FrontCommon from './layout/FrontCommon'

const store = createStore(MainReducer, applyMiddleware(thunk.withExtraArgument(history)));

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/admin' component={Common}></Route>
        <Route path='/home' component={FrontCommon}></Route>
        <Route path='/' component={Home}></Route>
      </Switch>
    </Router>
  </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
