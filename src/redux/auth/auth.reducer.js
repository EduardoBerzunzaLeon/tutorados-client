import { REHYDRATE } from 'redux-persist/es/constants';
import authActionTypes from './auth.types';

const initialState = {
  checking: true,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionTypes.LOGIN:
      return {
        ...state,
        currentUser: action.payload,
        checking: false,
      };
    case authActionTypes.CHECKING_FINISH:
      return {
        ...state,
        checking: false,
      };

    case REHYDRATE:
      console.log(state?.currentUser?.id || {});
      return {
        id: state?.currentUser?.id || 0,
      };
    default:
      return state;
  }
};
