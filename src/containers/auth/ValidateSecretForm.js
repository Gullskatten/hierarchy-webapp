import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { validateUserSecret } from '../../actions/auth';
import ValidatorForm from '../../components/ValidatorForm';

class ValidateSecretForm extends Component {
  state = {
    secret: ''
  };

  render() {
    const { validateUserSecret } = this.props;
    const { secret } = this.state;

    return (
      <div>
        <h2>Secret here</h2>
        <ValidatorForm
          placeholder={'here goes secret!'}
          onSubmit={() => validateUserSecret(secret)}
          inputType={'text'}
          inputName={'secret'}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      validateUserSecret
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ValidateSecretForm);
