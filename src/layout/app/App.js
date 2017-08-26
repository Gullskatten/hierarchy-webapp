import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../header/Header';
import Home from '../../pages/Home';
import Join from '../../pages/Join';
import NoMatch from '../../pages/NoMatch';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/join" exact component={Join} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
