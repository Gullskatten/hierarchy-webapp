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
      className,
      ...rest
    } = this.props;

    return (
      <form onSubmit={this.handleOnSubmit} className={className} {...rest}>
        <input
          type={inputType}
          placeholder={placeholder}
          name={inputName}
          onChange={e => this.setValue(e)}
        />
      </form>
    );
  }
}
