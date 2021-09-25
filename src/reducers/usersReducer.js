import * as actionTypes from '../types/usersTypes';

const INITIAL_STATE = {
  users: [],
  loading: false,
  error: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case actionTypes.LOADING:
      return { ...state, loading: true };

    case actionTypes.ERROR:
      return { ...state, error: action.payload, loading: false };

    default: return state;
  }
};
