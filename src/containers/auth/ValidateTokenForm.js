import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { validateUserToken } from '../../actions/auth';
import ValidatorForm from '../../components/ValidatorForm';
import './ValidatorForm.css';

class ValidateTokenForm extends Component {
  state = {
    token: ''
  };

  setTokenValue = e => {
    this.setState({
      token: e.target.value
    });
  };

  render() {
    const { validateUserToken, auth } = this.props;
    const { token } = this.state;
    const animateClass = auth.tokenSuccess ? 'fadeOutRight' : 'fadeIn';

    return (
      <div>
        <div className={`validator-content animated ${animateClass}`}>
          <h2>Reference token required </h2>
          <p>
            A reference token must be obtained from an existing user in order to
            register
          </p>
          <ValidatorForm
            className={`validator-form validator-form-token`}
            placeholder={'here goes token!'}
            onSubmit={() => validateUserToken(token)}
            inputType={'text'}
            inputName={'token'}
            onChange={this.setTokenValue}
            loading={auth.loading}
          />

          {auth.tokenStatusMessage
            ? <h3 className="validator-error">{auth.tokenStatusMessage}</h3>
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
      validateUserToken
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ValidateTokenForm);
