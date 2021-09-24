import uiActionTypes from './ui.types';



const INITIAL_STATE = {
  siderOpen: false,
};

export const uiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case uiActionTypes.OPEN_SIDER:
      return {
        ...state,
        siderOpen: true,
      };

    case uiActionTypes.CLOSE_SIDER:
      return {
        ...state,
        siderOpen: false,
      };

    default:
      return state;
  }
};
