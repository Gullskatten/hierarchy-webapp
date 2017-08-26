import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { validateUserSecret } from '../../actions/auth';
import ValidatorForm from '../../components/ValidatorForm';
import './ValidatorForm.css';

class ValidateSecretForm extends Component {
  state = {
    secret: ''
  };

  setSecretValue = e => {
    this.setState({
      secret: e.target.value
    });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.tokenSuccess && nextProps.auth.secretSuccess) {
      window.location.href = '/';
    }
  }

  render() {
    const { validateUserSecret, auth } = this.props;
    const { secret } = this.state;

    const animateClass = auth.tokenSuccess ? 'fadeInLeft' : 'hide';

    return (
      <div>
        <div className={`validator-content animated ${animateClass}`}>
          <h2>Secret required</h2>
          <p>Some informative text here ....</p>
          <ValidatorForm
            className="validator-form validator-form-secret"
            placeholder={'here goes secret!'}
            onSubmit={() => validateUserSecret(auth.referralUser.token, secret)}
            inputType={'password'}
            inputName={'secret'}
            onChange={this.setSecretValue}
          />

          {auth.secretStatusMessage
            ? <h3 className="validator-error">{auth.secretStatusMessage}</h3>
            : null}
        </div>
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
