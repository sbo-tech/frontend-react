/* eslint-disable */
import React from 'react';
import axios from 'axios';
import DetailPage from './DetailPage';
import config from '../config';

console.log(' Printing config',config)
class ListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    // Remove the 'www.' to cause a CORS error (and see the error state)
    axios.get(`${config.apiEndpoint}posts/?format=json`)
      .then(res => {
        // Transform the raw data by extracting the nested posts
        const posts = res.data; //.map(obj => obj.data);
        // Update state to trigger a re-render.
        // Clear any errors, and turn off the loading indiciator.
        this.setState({
          posts,
          loading: false,
          error: null
        });
      })
      .catch(err => {
        // Something went wrong. Save the error in state and re-render.
        this.setState({
          loading: false,
          error: err
        });
      });
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

  renderPosts() {
    if(this.state.error) {
      return this.renderError();
    }

    return (
      <ul className= "list-group">
        {this.state.posts.map(post =>
          <li key={post.id} className="list-group-item">
            {post.title}
          {/* <a href= {`#/show?id=${post.id}`}>{post.title}</a> */}
          <DetailPage post={post} />


          </li>
        )}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <h1> Blog Posts </h1>
        {this.state.loading ?
          this.renderLoading()
          : this.renderPosts()}
      </div>
    );
  }
}

export default ListPage;
