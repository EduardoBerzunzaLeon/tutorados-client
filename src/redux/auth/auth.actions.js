import authActionTypes from './auth.types';

export const emailSignInStart = (emailAndPassword) => ({
  type: authActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const renewTokenStart = () => ({
  type: authActionTypes.RENEW_TOKEN_START,
});

export const signInSuccess = (user) => ({
  type: authActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: authActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const signOutStart = () => ({
  type: authActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: authActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: authActionTypes.SIGN_OUT_FAILURE,
  payload: error,
});

export const signUpStart = (newUser) => ({
  type: authActionTypes.SIGN_UP_START,
  payload: newUser,
});

export const signUpSuccess = () => ({
  type: authActionTypes.SIGN_UP_SUCCESS,
});

export const signUpFailure = (error) => ({
  type: authActionTypes.SIGN_UP_FAILURE,
  payload: error,
});

export const activeAccountStart = (id) => ({
  type: authActionTypes.ACTIVE_ACCOUNT_START,
  payload: id,
});

export const activeAccountSuccess = () => ({
  type: authActionTypes.ACTIVE_ACCOUNT_SUCCESS,
});

export const activeAccountFailure = (error) => ({
  type: authActionTypes.ACTIVE_ACCOUNT_FAILURE,
  payload: error,
});
