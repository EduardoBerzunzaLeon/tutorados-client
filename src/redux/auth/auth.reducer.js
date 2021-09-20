import authActionTypes from './auth.types';

const initialState = {
  checking: true,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionTypes.LOGIN:
      return {
        ...state,
        ...action.payload,
        checking: false,
      };
    case authActionTypes.CHECKING_FINISH:
      return {
        ...state,
        checking: false,
      };
    default:
      return state;
  }
};
