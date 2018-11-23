// import { createSelector } from 'reselect';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native

const initialState = {
  byId: {},
};

function UIModule(state = initialState, action) {
  switch (action.type) {
  default:
    return state;
  }
}

const persistedReducer = persistReducer({
  key: 'UI',
  storage,
}, UIModule);

export default persistedReducer;
