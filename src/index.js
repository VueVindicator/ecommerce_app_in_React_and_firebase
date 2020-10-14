import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react'

import { Store, persistore } from './redux/store'

ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter>
      <PersistGate persistore={persistore}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
