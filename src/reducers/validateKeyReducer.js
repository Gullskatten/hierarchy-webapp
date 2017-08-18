const initialState = {
  token: '',
  username: '',
  error: {
    hasFailed: false,
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
        token: action.response.token,
        username: action.response.username
      };
    case 'VALIDATE_KEY_FAIL':
      return {
        ...state,
        error: {
          ...state.error,
          hasFailed: true,
          message: action.response.message
        },
        loading: false
      };
    default:
      return state;
  }
};

export default validateKeyReducer;
