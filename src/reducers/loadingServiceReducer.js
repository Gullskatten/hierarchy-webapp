const initialState = {
  isLoading: false
};

const loadingService = (state = initialState, action) => {

  switch (action.type) {

    case 'BEGIN_LOADING':
        return {...state, isLoading: true}

    case 'END_LOADING':
    setTimeout(() => {
      return {...state, isLoading: false}
    }, action.duration);

    default:
        return state;
  }
};

export default loadingService;
