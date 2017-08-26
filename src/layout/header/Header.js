import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Link to="/" className="logo">header</Link>
      </header>
    );
  }
}

export default Header;
