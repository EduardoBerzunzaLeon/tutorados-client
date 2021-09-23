import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authReducer } from './auth/auth.reducer';
import { uiReducer } from './ui/ui.reducer';

// const rootPersistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['auth'],
// };

const authPersistConfig = {
  key: 'auth',
  storage,
  blacklist: ['currentUser', 'checking'],
  // stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers({
  ui: uiReducer,
  // auth: authReducer,
  auth: persistReducer(authPersistConfig, authReducer),
});

// export default persistReducer(rootPersistConfig, rootReducer);
export default rootReducer;
