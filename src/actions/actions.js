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

const sendValidateSecret = () => ({
  type: 'SEND_VALIDATE_SECRET'
});

const validateSecretSuccess = response => ({
  type: 'VALIDATE_SECRET_SUCCESS',
  response
});

const validateSecretFail = response => ({
  type: 'VALIDATE_SECRET_FAIL',
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

export const isTokenEmpty = token => ({
  type: 'IS_TOKEN_EMPTY',
  token
});

export const beginLoading = () => ({
  type: "BEGIN_LOADING"
})

export const endLoading = duration => ({
  type: "END_LOADING",
  duration
})


export const validateSecret = (token, secret) => {
  return dispatch => {
    dispatch(sendValidateSecret());

    return axios
      .post(`http://localhost:8095/user/validate/${token}/${secret}`)
      .then(res => dispatch(validateSecretSuccess(res.data)))
      .catch(err => dispatch(validateSecretFail(err)));
  };
};
