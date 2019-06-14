/* eslint-disable */
import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import ListPage from './components/ListPage';
import DetailPage from './components/DetailPage';
import App from './App';
import { Router, Route, Link, hashHistory, useRouterHistory, IndexRoute } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';

// React component
const Main = (props) => (
  <div className='container'>
    <h1> Main Router </h1>
    <h2>
      <a href="/#/"> Home </a> &nbsp; | &nbsp;
      <a href="/#/list"> List View </a> &nbsp;
    </h2>
    <Router history={hashHistory} >
      <Route path="/" component={App} />
      <Route path="list" component={ListPage}/>
      <Route path="show/:id" component={DetailPage}/>
    </Router>
    {/*<Route path="*" <Footer show={true} /> component={NotFound}/>*/}
  </div>
)

/* Render with redux, ignore redux for right now, not using yet. */
// import { createStore } from 'redux'
// import reducers from './redux/reducers'
// const store = createStore(reducers);
import store from './redux/store'

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app')
);
