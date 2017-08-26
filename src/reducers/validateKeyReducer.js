const initialState = {
  referralUser: {},
  isSuccess: false,
  error: {
    message: ''
  },
  loading: false,
  hasAttemptedChallenge: false
};

const validateKeyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'IS_TOKEN_EMPTY':
    if(action.token === "") {
      return {
        ...state,
        hasAttemptedChallenge: false
      }
    }
    return {
      state
    }

    case 'SEND_VALIDATE_KEY':
      return {
        ...state,
        loading: true,
        hasAttemptedChallenge: true
      };
    case 'VALIDATE_KEY_SUCCESS':
      return {
        ...state,
        loading: false,
        hasAttemptedChallenge: false,
        isSuccess: action.response.isSuccess,
        referralUser: action.response.user
      };
    case 'VALIDATE_KEY_FAIL':
      return {
        ...state,
        error: {
          ...state.error,
          message: action.response.response.data.message
        },
        isSuccess: action.response.response.data.isSuccess,
        loading: false
      };
    default:
      return state;
  }
};

export default validateKeyReducer;
