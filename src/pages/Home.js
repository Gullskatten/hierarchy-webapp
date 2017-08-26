import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>Dis is home!</h1>
        <Link to="/join">Join the network!</Link>
      </div>
    );
  }
}

export default Home;
