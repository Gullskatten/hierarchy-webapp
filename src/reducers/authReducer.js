const initialState = {
  referralUser: {},
  tokenSuccess: false,
  secretSuccess: false,
  tokenStatusMessage: '',
  secretStatusMessage: '',
  loading: false,
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
        tokenSuccess: action.res.isSuccess,
        referralUser: action.res.user,
        tokenStatusMessage: '',
      });
    case 'VALIDATE_TOKEN_ERROR':
      return updateStateObject(state, {
        tokenStatusMessage: action.res.response.data.message,
        tokenSuccess: action.res.response.data.isSuccess,
        loading: false
      });
    case 'VALIDATE_SECRET_REQUEST':
      return updateStateObject(state, { loading: true });
    case 'VALIDATE_SECRET_SUCCESS':
      return updateStateObject(state, {
        loading: false,
        secretSuccess: action.res.isSuccess,
        message: action.res.message,
        secretStatusMessage: ''
      });
    case 'VALIDATE_SECRET_ERROR':
      return updateStateObject(state, {
        loading: false,
        secretStatusMessage: action.res.response.data.message,
        secretSuccess: action.res.response.data.isSuccess
      });
    default:
      return state;
  }
};

export default authReducer;
