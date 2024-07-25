import {applyMiddleware, combineReducers, createStore} from 'redux';
import reducerSample from './reducer';
import {thunk} from 'redux-thunk';

const reducer = combineReducers({
  reducerSample: reducerSample,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
