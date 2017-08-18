import axios from 'axios';

const sendValidateKey = () => ({
  type: 'SEND_VALIDATE_KEY'
});

const validateKeySuccess = response => ({
  type: 'VALIDATE_KEY_SUCCESS',
  response
});

const validateKeyFail = response => ({
  type: 'VALIDATE_KEY_FAIL',
  response
});

export const validateKey = key => {
  return dispatch => {
    dispatch(sendValidateKey());

    return axios
      .post(`http://localhost:8095/user/validate/${key}`)
      .then(res => dispatch(validateKeySuccess(res.data)))
      .catch(err => dispatch(validateKeyFail(err)));
  };
};
