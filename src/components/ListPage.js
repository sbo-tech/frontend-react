/* eslint-disable */
import React from 'react';

class ListPage extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(props) {
    console.log('App mounted', props)
  }

  render() {
    return (
      <div className="wrapper">
        <h1> List Page </h1>
      </div>
    );
  }

}

export default ListPage;
