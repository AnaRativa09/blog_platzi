import axios from 'axios';

export const getAll = () => async (dispatch) => {
  const responseData = await axios.get('https://jsonplaceholder.typicode.com/users');

  dispatch({
    type: 'get-users',
    payload: responseData.data,
  });
};
