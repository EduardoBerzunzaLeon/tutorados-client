import { createStore, compose, applyMiddleware } from 'redux';

import { persistStore } from 'redux-persist';

import thunk from 'redux-thunk';
import rootReducer from './root-reducer';

// Implement this if you want to trace your dispatch
// &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//       trace: true,
//       traceLimit: 25,
//     })

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
