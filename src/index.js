import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react'

import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { persistStore } from 'redux-persist'
import rootReducer from './redux/root-reducuer'
const middlewares = [logger]
const Store = createStore(rootReducer, applyMiddleware(...middlewares))
const persistore = persistStore(Store)

ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter>
      <PersistGate persistor={persistore}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

