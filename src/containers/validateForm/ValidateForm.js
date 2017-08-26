import React, { Component } from 'react';
import Input from '../../components/input/Input';
import SubmitForm from '../../components/forms/SubmitForm';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { validateKey, isTokenEmpty, beginLoading, endLoading } from '../../actions/actions';
import './ValidateForm.css';

class ValidateForm extends Component {
  state = {
    inputKey: ''
  };

  validateKey = e => {
    e.preventDefault();
    const { validateKey, beginLoading, endLoading } = this.props;
    const { inputKey } = this.state;

    beginLoading();
    setTimeout(() => {
    validateKey(inputKey);
    endLoading();
    }, 700);

  };

  inputKeyChanged = e => {
    const inputKey = e.target.value;
    const { isTokenEmpty } = this.props;

    isTokenEmpty(e.target.value);

    this.setState({ inputKey });
  };

  render() {
    const { error, loading, isSuccess, hasAttemptedChallenge } = this.props.tokenValidator;

    return (
      <div id="input-token" style={!isSuccess && hasAttemptedChallenge ? {border: '2px solid #EF4836'} : null }
      className={!isSuccess && hasAttemptedChallenge ? "animated shake" : ""}>
        <SubmitForm onSubmit={this.validateKey}>
          <Input
            id="input-token-field"
            placeholder="Type your friends token here.."
            onChange={this.inputKeyChanged}
          />
        </SubmitForm>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      validateKey,
      isTokenEmpty,
      beginLoading,
      endLoading
    },
    dispatch
  );
};

const mapStateToProps = state => ({
  tokenValidator: state.tokenValidator,
  loadingService: state.loadingService
});

export default connect(mapStateToProps, mapDispatchToProps)(ValidateForm);
