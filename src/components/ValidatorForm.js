import React, { Component } from 'react';
import Loader from './Loader';

export default class ValidatorForm extends Component {
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
      onChange,
      loading,
      ...rest
    } = this.props;

    return (
      <form onSubmit={this.handleOnSubmit} className={className} {...rest}>
        <input
          type={inputType}
          placeholder={placeholder}
          name={inputName}
          onChange={onChange}
          autoComplete="off"
        />
        {loading ? <center style={{marginTop: '1rem'}}><Loader /></center> : null}
      </form>
    );
  }
}
