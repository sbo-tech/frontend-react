/* eslint-disable */
import React, {PropTypes} from 'react';
import store from './redux/store'
import {addToken, itemsFetchData} from './redux/actions'
import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tokens: {},
      loading: true,
      error: null
    };
    this.newToken = this.newToken.bind(this)
  }

  componentDidMount() {
    console.log('App mounted', store.getState())
  }

  componentWillReceiveProps(nextProps, nextContext) {
    // console.log('new props')
  }

  newToken() {
    store.dispatch(addToken(Math.random().toString()))
  }

  render() {
    let {tokens} = this.props
    return (
      <div className='text-center'>
        {tokens ?
          <small> {JSON.stringify(tokens.pop())} </small>
          : null  }
        <p> redux token sample (open logs </p>

        <button className='btn btn-primary' onClick={this.newToken}>New Token </button>


      </div>
    )
  }
}

App.propTypes = {
  tokens: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  return {
    tokens: state.tokens
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToken: () => dispatch(addToken())
  };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(App);
