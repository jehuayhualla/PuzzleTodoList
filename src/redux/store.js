import { createStore, combineReducers } from "redux";
import rootReducer from './reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['todo_list']
  };

const rootCombineReducer = combineReducers({
todos: persistReducer(persistConfig, rootReducer)
});

export const store = createStore(rootCombineReducer);
export const persistor = persistStore(store);