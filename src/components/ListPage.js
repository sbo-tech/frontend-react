/* eslint-disable */
import React, {PropTypes} from 'react';
import axios from 'axios';
import DetailPage from './DetailPage';
import { Router, Route, Link, hashHistory, useRouterHistory, IndexRoute } from 'react-router';
import { connect } from 'react-redux';
import { itemsFetchData } from '../redux/actions';

const BASE_URL = 'http://127.0.0.1:8000'
class ListPage extends React.Component {

  componentDidMount() {
    this.props.fetchData(`${BASE_URL}/posts?/format=json`);
  }

  renderLoading() {
    return <div>Loading...</div>;
  }


  render() {

    let { items, dispatch } = this.props;

    return (
      <div>
        <h1>Blog Posts</h1>

        {items ?
          <ul className='list-group'>
            {items.map(post =>
              <li key={post.id} className='list-group-item'>
                <div className="card col-md-4">
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text"> {post.content.substring(0, 50)}...</p>
                    <Link className="btn btn-primary" to={'show/'+post.id}  > Read More... </Link>
                    <DetailPage post={post} />
                  </div>
                </div>
              </li>
            )}
          </ul>
          : <renderLoading /> }
      </div>
    );
  }
}

ListPage.propTypes = {
  fetchData: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  return {
    items: state.items,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(itemsFetchData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
