import React, { Component } from 'react';
import LoadingComponent from 'halogen/SquareLoader';

export default class Loader extends Component {
  render() {
    return (
      <LoadingComponent
        color="#86BBD8"
        size="40px"
      />
    );
  }
}
