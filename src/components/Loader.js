import React, { Component } from 'react';
import LoadingComponent from 'halogen/ClipLoader';

export default class Loader extends Component {
  render() {
    return <LoadingComponent color="#26A65B" size="12px" margin="30px" style={{paddingTop: '50px'}}/>
  }
}
