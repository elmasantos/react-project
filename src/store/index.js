import {
  applyMiddleware,
  createStore,
} from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers'

//import logger from 'redux-logger'

import thunk from 'redux-thunk'

const store = createStore(
  reducers,
  undefined,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store