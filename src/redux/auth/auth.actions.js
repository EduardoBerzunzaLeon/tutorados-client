import Swal from 'sweetalert2';
import { fetchWithoutToken, fetchWithToken } from '../../utils/fetch';
import authActionTypes from './auth.types';

export const startLogin = (email, password) => {
  return async (dispatch) => {
    const resp = await fetchWithoutToken(
      'users/login',
      { email, password },
      'POST'
    );
    const body = await resp.json();

    if (body.status === 'success') {
      localStorage.setItem('token', body.token);
      localStorage.setItem('token-init-date', new Date().getTime());
      return dispatch(login(body.data));
    }

    Swal.fire('Error', body.error.message, 'error');
  };
};

export const startChecking = () => {
  return async (dispatch) => {
    const resp = await fetchWithToken('users/renew', 'POST');
    const body = await resp.json();

    if (body.status === 'success') {
      localStorage.setItem('token', body.token);
      localStorage.setItem('token-init-date', new Date().getTime());
      dispatch(login(body.data));
      return dispatch({ type: 'persist/REHYDRATE' });
    }

    // Swal.fire('Error', body.error.message, 'error');
    dispatch(checkingFinish());
  };
};

const checkingFinish = () => ({ type: authActionTypes.CHECKING_FINISH });

const login = (user) => ({
  type: authActionTypes.LOGIN,
  payload: user,
});
