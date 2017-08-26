const initialState = {
  referralUser: {},
  tokenSuccess: false,
  secretSuccess: false,
  message: '',
  loading: false,
  errorMessage: '',
  hasAttemptedChallenge: false
};

const updateStateObject = (state, newVals) => {
  return Object.assign({}, state, newVals);
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'VALIDATE_TOKEN_REQUEST':
      return updateStateObject(state, { loading: true });
    case 'VALIDATE_TOKEN_SUCCESS':
      return updateStateObject(state, {
        loading: false,
        tokenSuccess: action.res.isSucess,
        referralUser: action.res.user
      });
    case 'VALIDATE_TOKEN_ERROR':
      return updateStateObject(state, {
        errorMessage: action.res.response.data.message,
        tokenSuccess: action.res.response.data.isSuccess,
        loading: false
      });
    case 'VALIDATE_SECRET_REQUEST':
      return updateStateObject(state, { loading: true });
    case 'VALIDATE_SECRET_SUCCESS':
      return updateStateObject(state, {
        loading: false,
        secretSuccess: action.res.isSuccess,
        message: action.res.message
      });
    case 'VALIDATE_SECRET_ERROR':
      return updateStateObject(state, {
        loading: false,
        errorMessage: action.res.response.data.message,
        secretSuccess: action.res.response.data.isSuccess
      });
    default:
      return state;
  }
};

export default authReducer;
