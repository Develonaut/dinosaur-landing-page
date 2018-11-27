// eslint-disable no-useless-escape
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import createHistory from 'history/createBrowserHistory';
import configureStore from 'store/configureStore';
import * as serviceWorker from 'serviceWorker';
import WebFont from 'webfontloader';

import Router from 'components/shared/Router';

import 'stylesheets/reset.module.css';
import stylesHTML from 'stylesheets/html.module.css';
import stylesBody from 'stylesheets/body.module.css';
import stylesRoot from 'stylesheets/root.module.css';

const {
  persistor,
  store,
} = configureStore();

const app = (
  <Provider store={store}>
    <PersistGate
      loading={null}
      onBeforeLift={null}
      persistor={
        persistor
      }
    >
      <BrowserRouter>
        <Router history={createHistory()} />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

const HTML = document.querySelector('html');
const Body = document.querySelector('body');
const Root = document.getElementById('root');

HTML.classList.add(stylesHTML.root);
Body.classList.add(stylesBody.root);
Root.classList.add(stylesRoot.root);

ReactDOM.render(app, Root);

WebFont.load({
  google: {
    families: ['Abril Fatface', 'Open Sans'],
  }
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
