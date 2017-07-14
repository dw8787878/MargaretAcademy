import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk
import { composeWithDevTools } from 'redux-devtools-extension';

import campusReducer from './reducers';

// INITIAL STATE
export const initialState = {
  campuses: []
}

// ACTION TYPES
export const GET_ALL_CAMPUSES = 'GET_ALL_CAMPUSES';

// ACTION CREATORS
export function getAllCampuses (campuses) {
  const action = { type: GET_ALL_CAMPUSES, campuses }
  return action;
}

// THUNK CREATORS
export function getCampuses () {
  return function thunk (dispatch) {
    return axios.get('/api/allCampuses')
      .then(res => res.data)
      .then(campuses => {
        const action = getAllCampuses(campuses);
        dispatch(action);
      });
  }
}

const store = createStore(campusReducer, applyMiddleware(thunkMiddleware, createLogger()));

export default store;
