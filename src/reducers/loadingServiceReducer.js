const initialState = {
  isLoading: false
};

const loadingService = (state = initialState, action) => {

  switch (action.type) {

    case 'BEGIN_LOADING':
      return {...state, isLoading: true}
    case 'END_LOADING':
      return {...state, isLoading: false}
    default:
        return state;
  }
};

export default loadingService;
