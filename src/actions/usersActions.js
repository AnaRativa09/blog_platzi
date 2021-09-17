export const getAll = () => (dispatch) => {
  dispatch({
    type: 'get-users',
    payload:[1,2,3]
  }) 
}