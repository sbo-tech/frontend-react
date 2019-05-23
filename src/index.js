/* eslint-disable */
import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import ListPage from './components/ListPage';
import DetailPage from './components/DetailPage';
import App from './App'


import { Router, Route, Link, hashHistory, useRouterHistory, IndexRoute } from 'react-router';


// React component
const Main = (props) => (

  <div>
    <h1> Main Router </h1>
    <h2>
      <a href="/#/"> Home </a> &nbsp; | &nbsp;
      <a href="/#/list"> List View </a> &nbsp; | &nbsp;
      <a href="/#/show"> Detail View </a>

    </h2>
    <Router history={hashHistory} >

      <Route path="/" component={App} />
      <Route path="list" component={ListPage}/>
      <Route path="show" component={DetailPage}/>



    </Router>
    {/*<Route path="*" <Footer show={true} /> component={NotFound}/>*/}
  </div>
)

import reducers from './reducers'
const store = createStore(reducers);

/* Render with redux, ignore redux for right now, not using yet. */

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app')
);
