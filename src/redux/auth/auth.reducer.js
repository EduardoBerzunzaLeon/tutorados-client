import authActionTypes from './auth.types';

const INITIAL_STATE = {
  checking: true,
  activate: null,
  currentUser: null,
  error: null,
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case authActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        checking: false,
        error: null,
      };

    case authActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };

    case authActionTypes.ACTIVE_ACCOUNT_SUCCESS:
      return {
        ...state,
        activate: true,
        error: null,
      };

    case authActionTypes.ACTIVE_ACCOUNT_FAILURE:
      return {
        ...state,
        checking: false,
        activate: false,
        error: action.payload,
      };

    case authActionTypes.SIGN_IN_FAILURE:
    case authActionTypes.SIGN_OUT_FAILURE:
    case authActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        checking: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
