import uiActionTypes from './ui.types';



const initialState = {
  siderOpen: false,
};

export const uiReducer = (state = initialState, action) => {
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
