import React, { Component } from 'react';
import InputKey from '../../components/input/InputKey';
import SubmitForm from '../../components/forms/SubmitForm';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { validateKey } from '../../actions/actions';
import './ValidateForm.css';

class ValidateForm extends Component {
  state = {
    inputKey: ''
  };

  validateKey = e => {
    e.preventDefault();
    const { validateKey } = this.props;
    const { inputKey } = this.state;

    validateKey(inputKey);
  };

  inputKeyChanged = e => {
    const inputKey = e.target.value;
    this.setState({ inputKey });
  };

  renderStatus() {
    const { error, loading } = this.props.validator;

    return loading
      ? <h2>Loading....</h2>
      : error.hasFailed ? <h2>{error.message}</h2> : null;
  }

  render() {
    return (
      <div id="input-token">
        <SubmitForm onSubmit={this.validateKey}>
          <InputKey
            id="input-token-field"
            placeholder="Type your reference token here.."
            onChange={this.inputKeyChanged}
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
      validateKey
    },
    dispatch
  );
};

const mapStateToProps = state => ({
  validator: state.validator
});

export default connect(mapStateToProps, mapDispatchToProps)(ValidateForm);
