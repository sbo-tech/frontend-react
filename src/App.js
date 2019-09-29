/* eslint-disable */
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(props) {
    console.log('App mounted', props)
  }

  render() {
    return (
      <div>
        <h1> My App </h1>

      </div>
    )
  }
}

export default App
