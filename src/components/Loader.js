import React, { Component } from 'react';
import LoadingComponent from 'halogen/SquareLoader';

export default class Loader extends Component {
  render() {
    return (
      <LoadingComponent
        color="#26A65B"
        size="50px"
        margin="30px"
        style={{ paddingTop: '50px' }}
      />
    );
  }
}
