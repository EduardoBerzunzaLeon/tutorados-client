import { takeLatest, put, all, call } from 'redux-saga/effects';
import authActionTypes from './auth.types';

import {
  signInFailure,
  signInSuccess,
  signOutFailure,
  signOutSuccess,
  signUpFailure,
  signUpSuccess,
} from './auth.actions';
import { fetchWithoutToken, fetchWithToken } from '../../utils/fetch';
import Swal from 'sweetalert2';

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const resp = yield fetchWithoutToken(
      'users/login',
      { email, password },
      'POST'
    );

    const body = yield resp.json();

    if (body.status === 'success') {
      localStorage.setItem('token', body.token);
      localStorage.setItem('token-init-date', new Date().getTime());
      return yield put(signInSuccess(body.data));
    }

    throw new Error(body.error.message);
  } catch (error) {
    Swal.fire('Error', error.message, 'error');
    return yield put(signInFailure(error.message));
  }
}

export function* renewToken() {
  try {
    const resp = yield fetchWithToken('users/renew', 'POST');
    const body = yield resp.json();

    if (body.status === 'success') {
      localStorage.setItem('token', body.token);
      localStorage.setItem('token-init-date', new Date().getTime());
      return yield put(signInSuccess(body.data));
    }

    throw new Error(body.error.message);
  } catch (error) {
    return yield put(signInFailure(error.message));
  }
}

export function* signOut() {
  try {
    localStorage.clear();
    return yield put(signOutSuccess());
  } catch (error) {
    return yield put(signOutFailure(error.message));
  }
}

export function* signUp({
  payload: { name, email, password, confirmPassword, gender },
}) {
  try {
    const resp = yield fetchWithoutToken(
      'users/signup',
      { name, email, password, confirmPassword, gender },
      'POST'
    );

    const body = yield resp.json();

    if (body.status === 'success') {
      localStorage.setItem('token', body.token);
      localStorage.setItem('token-init-date', new Date().getTime());
      return yield put(signUpSuccess(body.data));
    }

    throw new Error(body.error.message);
  } catch (error) {
    return yield put(signUpFailure(error.message));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(authActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onRefreshTokenStart() {
  yield takeLatest(authActionTypes.RENEW_TOKEN_START, renewToken);
}

export function* onSignOutStart() {
  yield takeLatest(authActionTypes.SIGN_OUT_START, signOut);
}

export function* onSignUpStart() {
  yield takeLatest(authActionTypes.SIGN_UP_START, signUp);
}

export function* authSagas() {
  yield all([
    call(onEmailSignInStart),
    call(onRefreshTokenStart),
    call(onSignOutStart),
    call(onSignUpStart),
  ]);
}
