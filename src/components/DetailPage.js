/* eslint-disable */
import React from 'react';
import axios from 'axios';
import store from '../redux/store'

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: null,
      loading: true,
      error: null
    };
  }
  componentDidMount() {
    // console.log('stored state ->', store.getState());
    // console.log('incoming props ->', this.props)
  }

  componentWillReceiveProps(newProps){
    let setter = this.state
    setter['post'] = store.getState().items.filter((arg) => {
      return arg.id && arg.id == this.props.params.id
    }).reduce((x,y) => {
      return y
    }, null)
    this.setState(setter)
  }

renderLoading() {
  return <div>Loading...</div>;
}

renderError() {
  return (
    <div>
      Uh oh: {this.state.error.message}
    </div>
  );
}

render() {
  if(this.state.error) {
    return this.renderError();
  }


  let { post } = this.state;
  return (
    <ul>
      { post ?
        <li key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </li>
      : null}


    </ul>
  );
}


}

export default DetailPage
