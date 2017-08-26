import axios from 'axios';

const validateTokenRequest = () => ({
  type: 'VALIDATE_TOKEN_REQUEST'
});

const validateTokenSuccess = res => ({
  type: 'VALIDATE_TOKEN_SUCCESS',
  res
});

const validateTokenFail = res => ({
  type: 'VALIDATE_TOKEN_FAIL',
  res
});

const validateSecretRequest = () => ({
  type: 'VALIDATE_SECRET_REQUEST'
});

const validateSecretSuccess = res => ({
  type: 'VALIDATE_SECRET_SUCCESS',
  res
});

const validateSecretFail = res => ({
  type: 'VALIDATE_SECRET_FAIL',
  res
});

export const validateUserToken = token => {
  return dispatch => {
    dispatch(validateTokenRequest());

    return axios
      .post(`http://localhost:8095/user/validate/${token}`)
      .then(res => dispatch(validateTokenSuccess(res.data)))
      .catch(err => dispatch(validateTokenFail(err)));
  };
};

export const validateUserSecret = (token, secret) => {
  return dispatch => {
    dispatch(validateSecretRequest());

    return axios
      .post(`http://localhost:8095/user/validate/${token}/${secret}`)
      .then(res => dispatch(validateSecretSuccess(res.data)))
      .catch(err => dispatch(validateSecretFail(err)));
  };
};
