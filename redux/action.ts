export const fetchData = () => {
  return async dispatch => {
    try {
      // Perform async operation (e.g., fetch data from an API)
      let response = await fetch('https://fakestoreapi.com/products');
      response = await response?.json();
      console.log('response', response);

      //   Dispatch an action with the fetched data
      dispatch(setNewData(response));
    } catch (error) {
      // Dispatch an action if there's an error
      console.log('error', error);
    }
  };
};

export const setData = data => ({
  type: 'SET_DATA',
  payload: data,
});

export const setNewData = data => ({
  type: 'SET_NEW_DATA',
  payload: data,
});
