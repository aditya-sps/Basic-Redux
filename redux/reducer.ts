const initialState = {
  data: [],
  newData: [],
};

const reducerSample = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        data: [...state.data, action.payload],
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
