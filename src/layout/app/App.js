import React, { Component } from 'react';
import GuardianModal from '../../containers/modals/GuardianModal';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="app">
        <GuardianModal/>
      </div>
    );
  }
}

export default App;
