import { createSelector } from 'reselect';

const selectUser = (state) => state.auth;

export const selectCurrentUser = createSelector([selectUser], (user) => {
  console.log(user.currentUser);
  return user.currentUser;
});
