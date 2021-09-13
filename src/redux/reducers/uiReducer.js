import { types } from '../types/types';

const initialState = {
  siderOpen: false,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiOpenSider:
      return {
        ...state,
        siderOpen: true,
      };

    case types.uiCloseSider:
      return {
        ...state,
        siderOpen: false,
      };

    default:
      return state;
  }
};
