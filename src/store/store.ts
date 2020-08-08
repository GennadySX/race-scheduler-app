import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';

// import AsyncStorage from '@react-native-community/async-storage';
// import {createLogger} from 'redux-logger';
//import {persistStore, persistReducer} from 'redux-persist';

import rootReducer from './reducers/index';

/*
* Persistor убрал так как вы описали в комментарии что нет необходимости его

* const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
  blacklist: [],
};
 */

//const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(rootReducer, applyMiddleware(thunk));

///let persistor = persistStore(store);

export {store};
