import React, { Component } from 'react';
import Input from '../../components/input/Input';
import SubmitForm from '../../components/forms/SubmitForm';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { validateSecret } from '../../actions/actions';
import './ValidateSecret.css';

class ValidateSecret extends Component {
  state = {
    inputSecret: ''
  };

  validateSecret = e => {
    e.preventDefault();
    const { validateSecret, tokenValidator } = this.props;
    const { inputSecret } = this.state;

    validateSecret(tokenValidator.referralUser.token, inputSecret);
  };

  inputSecretChanged = e => {
    const inputSecret = e.target.value;
    this.setState({ inputSecret });
  };

  renderStatus() {
    const { error, loading } = this.props.secretValidator;
    return loading
      ? <h2 id="secret-validation-loading">Loading....</h2>
      : error.hasFailed ? <h2 id="secret-validation-error">{error.message}</h2> : null;
  }

  render() {
    return (
      <div id="input-secret">
        <SubmitForm onSubmit={this.validateSecret}>
          <Input
            id="input-secret-field"
            placeholder={`${this.props.tokenValidator.referralUser.firstName} should share with you a secret..`}
            onChange={this.inputSecretChanged}
          />
        </SubmitForm>
        {this.renderStatus()}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      validateSecret
    },
    dispatch
  );
};

const mapStateToProps = state => ({
  tokenValidator: state.tokenValidator,
  secretValidator: state.secretValidator
});

export default connect(mapStateToProps, mapDispatchToProps)(ValidateSecret);
