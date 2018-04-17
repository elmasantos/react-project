import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Home from './scenes/home'
import registerServiceWorker from './registerServiceWorker'
import store from './store'

import './stylesheets/index.css'

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
