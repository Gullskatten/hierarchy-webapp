import React, { Component } from 'react';
import ValidateTokenForm from '../containers/auth/ValidateTokenForm';
import ValidateSecretForm from '../containers/auth/ValidateSecretForm';

class Join extends Component {
  render() {
    return (
      <div className="join">
        <ValidateTokenForm />
        <ValidateSecretForm />
      </div>
    );
  }
}

export default Join;
