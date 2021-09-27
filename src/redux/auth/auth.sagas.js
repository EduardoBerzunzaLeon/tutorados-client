import { takeLatest, put, all, call } from 'redux-saga/effects';
import authActionTypes from './auth.types';

import {   signInFailure, signInSuccess } from './auth.actions';
import { fetchWithoutToken, fetchWithToken } from '../../utils/fetch';
import Swal from 'sweetalert2';

export function* signInWithEmail({payload: { email, password}}) {
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

        // Swal.fire('Error', body.error.message, 'error');
        // return yield put(signInFailure(body.error.message));
        
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
        
    } catch (error) {
        return yield put(signInFailure(error.message));
    }
}


export function* onEmailSignInStart() {
    yield takeLatest(authActionTypes.EMAIL_SIGN_IN_START, signInWithEmail );
}

export function* onRefreshTokenStart() {
    yield takeLatest(authActionTypes.RENEW_TOKEN_START, renewToken);
}

export function* authSagas() {
    yield all([
        call(onEmailSignInStart),
        call(onRefreshTokenStart),
    ])
}