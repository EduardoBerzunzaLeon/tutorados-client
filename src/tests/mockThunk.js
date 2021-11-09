import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import '@testing-library/jest-dom';
import { emailSignInStart } from '../redux/auth/auth.actions';
import authActionTypes from '../redux/auth/auth.types';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};
let store = mockStore(initState);

Storage.prototype.setItem = jest.fn();

describe('Tests in the auth actions', () => {
  beforeEach(() => {
    store = mockStore(initState);
    jest.clearAllMocks();
  });

  test('startLogin correct', async () => {
    store.dispatch(
      emailSignInStart({
        email: 'eduardoberzunzal@gmail.com',
        password: '12345678',
      })
    );
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: authActionTypes.EMAIL_SIGN_IN_START,
      payload: {
        id: expect.any(String),
        email: expect.any(String),
      },
    });

    expect(localStorage.setItem).toHaveBeenCalledWith(
      'token',
      expect.any(String)
    );

    expect(localStorage.setItem).toHaveBeenCalledWith(
      'token-init-date',
      expect.any(Number)
    );
  });
});
