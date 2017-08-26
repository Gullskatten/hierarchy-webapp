import React, { Component } from 'react';

export default class ValidatorForm extends Component {
  setValue = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.onSubmit();
  };

  render() {
    const {
      onSubmit,
      inputType,
      placeholder,
      inputName,
      isValid,
      className,
      ...rest
    } = this.props;
    const isInputValidated = isValid
      ? { border: '1px solid green' }
      : { border: '1px solid red' };

    return (
      <form onSubmit={this.handleOnSubmit} className={className} {...rest}>
        <input
          type={inputType}
          placeholder={placeholder}
          name={inputName}
          style={isInputValidated}
          onChange={e => this.setValue(e)}
        />
      </form>
    );
  }
}
