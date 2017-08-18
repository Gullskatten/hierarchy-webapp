import React from 'react';

const SubmitForm = props => {
  return (
    <form {...props}>
      {props.children}
    </form>
  );
};

export default SubmitForm;
