const initialState = {
  isSuccess: false,
  error: {
    message: ''
  },
  loading: false
};

const validateSecretReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'SEND_VALIDATE_SECRET':
        return {
          ...state,
          loading: true
        };
      case 'VALIDATE_SECRET_SUCCESS':
        return {
          ...state,
          loading: false,
          isSuccess: action.response.isSuccess,
          message: action.response.message
        };
      case 'VALIDATE_SECRET_FAIL':
        console.log(action.response.response.data.message);
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

export default validateSecretReducer;
