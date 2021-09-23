import { createSelector } from 'reselect';

const selectUi = (state) => state.ui;

export const selectSiderStatus = createSelector(
  [selectUi],
  (ui) => ui.siderOpen
);
