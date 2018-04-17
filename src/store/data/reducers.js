import { combineReducers } from 'redux'
import * as Types from './action-types'

const signup = (state = {}, { type, payload }) => {
  switch(type) {
    case Types.SIGN_UP_USER_FAILURE:
      return {
        error: payload.error
      }
    case Types.SIGN_UP_USER_REQUEST:
    case Types.SIGN_UP_USER_SUCCESS:
    default:
      return state
  }
}

export default combineReducers({
  signup
})
