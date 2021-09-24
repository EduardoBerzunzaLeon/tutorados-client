import authActionTypes from './auth.types';

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case authActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
  
      case authActionTypes.SIGN_IN_FAILURE:
      case authActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
