import React, { Component } from 'react';
import './Input.css';

export default class Input extends Component {
  render() {
    return <input  autoComplete="off" type="text" {...this.props} />;
  }
}
