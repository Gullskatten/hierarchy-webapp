import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { validateUserToken } from '../../actions/auth';
import ValidatorForm from '../../components/ValidatorForm';

class ValidateTokenForm extends Component {
  state = {
    token: ''
  };

  render() {
    const { validateUserToken } = this.props;
    const { token } = this.state;

    return (
      <div>
        <h2>Token here</h2>
        <ValidatorForm
          className={'here goes token!'}
          onSubmit={() => validateUserToken(token)}
          inputType={'text'}
          inputName={'token'}
          isValid={true}
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
      validateUserToken
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ValidateTokenForm);
