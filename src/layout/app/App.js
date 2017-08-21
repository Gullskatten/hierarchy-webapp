import React, { Component } from 'react';
import ValidateForm from '../../containers/validateForm/ValidateForm';
import ValidateSecret from '../../containers/validateSecret/ValidateSecret';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="app">
        <ValidateForm />
        <ValidateSecret />
      </div>
    );
  }
}

export default App;
