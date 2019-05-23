/* eslint-disable */
import React from 'react';

class DetailPage extends React.Component {
  componentDidMount(props) {
    console.log('App mounted', props)
  }

  render() {
    return (
      <div className="wrapper">
        <h1> Detail Page </h1>
      </div>
    );
  }

}

export default DetailPage;
