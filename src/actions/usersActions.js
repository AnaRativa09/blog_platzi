import axios from 'axios';
import * as actionTypes from '../types/usersTypes';

export const getAll = () => async (dispatch) => {
  dispatch({
    type: actionTypes.LOADING,
  });

  try {
    const responseData = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch({
      type: actionTypes.GET_USERS,
      payload: responseData.data,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.ERROR,
      payload: err.message,
    });
  }
};

export const getAll2 = () => async (dispatch) => {
  const responseData = await axios.get('https://jsonplaceholder.typicode.com/users');

  dispatch({
    type: 'get-users',
    payload: responseData.data,
  });
};
