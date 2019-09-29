/* eslint-disable */
import React from 'react';
import axios from 'axios';

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {},
      loading: true,
      error: null
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
   console.log('Detail mounted', this.props.post)
   this.setState({
    post: this.props.post,
    loading: false,
    error: null
  });
  }

  renderError() {
    return (
      <div>
        Uh oh: {this.state.error.message}
      </div>
    );
  }

  handleClick() {
    console.log('save your data', this.props.post)

  }


  render() {
    let { post } = this.state
    return (
      <div className="wrapper">
        {this.state.post.content}
      </div>
    );
  }
 }


export default DetailPage;
