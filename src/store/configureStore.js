import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import { persistStore } from 'redux-persist';

import UI from 'middleware/UIMiddleware';

import rootReducer from './reducers';

const middleware = applyMiddleware(
  UI
);

const composeEnhancers = (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const enhancers = composeEnhancers(middleware);

export default () => {
  const store = createStore(rootReducer, enhancers);
  const persistor = persistStore(store);
  return {
    store,
    persistor,
  };
};
