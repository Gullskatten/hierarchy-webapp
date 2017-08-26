import React, { Component } from 'react';

export default class ValidatorForm extends Component {
  setValue = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    const { onSubmit, inputType, placeholder, inputName, isValid, className, ...rest } = this.props;
    const isInputValidated = isValid
      ? { border: '1px solid red' }
      : { border: '1px solid green' };

    return (
      <form onSubmit={onSubmit} className={className} {...rest}>
        <input
          type={inputType}
          placeholder={placeholder}
          name={inputName}
          style={isInputValidated}
          onChange={() => this.setValue()}
        />
      </form>
    );
  }
}
