const initialState = {
  data: null,
  newData: [],
};

const reducerSample = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        data: action.payload,
      };

    case 'CLEAR_DATA':
      return {
        data: null,
        newData: [],
      };

    case 'SET_NEW_DATA':
      return {
        ...state,
        newData: [...action.payload],
      };

    default:
      return state;
  }
};

export default reducerSample;
