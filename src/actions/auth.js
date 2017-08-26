import axios from 'axios';

const validateTokenRequest = () => ({
  type: 'VALIDATE_TOKEN_REQUEST'
});

const validateTokenSuccess = res => ({
  type: 'VALIDATE_TOKEN_SUCCESS',
  res
});

const validateTokenError = res => ({
  type: 'VALIDATE_TOKEN_ERROR',
  res
});

const validateSecretRequest = () => ({
  type: 'VALIDATE_SECRET_REQUEST'
});

const validateSecretSuccess = res => ({
  type: 'VALIDATE_SECRET_SUCCESS',
  res
});

const validateSecretError = res => ({
  type: 'VALIDATE_SECRET_ERROR',
  res
});

export const validateUserToken = token => {
  return dispatch => {
    dispatch(validateTokenRequest());

    return axios
      .post(`http://localhost:8095/user/validate/${token}`)
      .then(res => dispatch(validateTokenSuccess(res.data)))
      .catch(err => dispatch(validateTokenError(err)));
  };
};

export const validateUserSecret = (token, secret) => {
  return dispatch => {
    dispatch(validateSecretRequest());

    return axios
      .post(`http://localhost:8095/user/validate/${token}/${secret}`)
      .then(res => dispatch(validateSecretSuccess(res.data)))
      .catch(err => dispatch(validateSecretError(err)));
  };
};
