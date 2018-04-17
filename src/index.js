import React from 'react';
import ReactDOM from 'react-dom';
import Home from './scenes/home';
import './stylesheets/index.css'
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'

import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
