import authActionTypes from './auth.types';

export const emailSignInStart = emailAndPassword => ({
  type: authActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

export const renewTokenStart = () => ({
  type: authActionTypes.RENEW_TOKEN_START  
})

export const signInSuccess = (user) => ({
  type: authActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = error => ({
  type: authActionTypes.SIGN_IN_FAILURE,
  payload: error
});

export const renewTokenFailure = (error) => ({ 
  type: authActionTypes.RENEW_TOKEN_FAILURE,
  payload: error
});
