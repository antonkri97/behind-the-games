import React, { Component } from 'react';
import Form from './Form';
import Data from '../containers/data';

class App extends Component {
  render() {
    return (
      <div>
        <Form />
        <Data />
      </div>
    );
  }
}

export default App;
