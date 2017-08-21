const initialState = {
  referralUser: {},
  error: {
    hasFailed: false,
    hasSecretFailed: false,
    message: ''
  },
  loading: false
};

const validateKeyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEND_VALIDATE_KEY':
      return {
        ...state,
        loading: true
      };
    case 'VALIDATE_KEY_SUCCESS':
      return {
        ...state,
        loading: false,
        hasFailed: action.response.isSuccess,
        referralUser: action.response.user
      };
    case 'VALIDATE_KEY_FAIL':
      console.log(action.response.response.data.message);
      return {
        ...state,
        error: {
          ...state.error,
          hasFailed: action.response.response.data.isSuccess,
          message: action.response.response.data.message
        },
        loading: false
      };
    default:
      return state;
  }
};

export default validateKeyReducer;
