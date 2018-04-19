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

const signin = (state = {}, {type, payload}) => {
  switch(type) {
    case Types.SIGN_IN_USER_FAILURE:
      return {
        error: payload.error,
        token: null,
        authenticated: false
      }
    case Types.SIGN_IN_USER_REQUEST:
      return {
        token: null,
        authenticated: false
      }
    case Types.SIGN_IN_USER_SUCCESS:
      return {
        token: payload.token,
        id: payload.id,
        authenticated: true
      }
    default:
      return state
  }
}

const getbyid = (state = {}, {type, payload}) => {
  switch(type) {
    case Types.GET_BY_ID_FAILURE:
      return {
        error: payload.error
      }
    case Types.GET_BY_ID_REQUEST:
      return {
        name: ''
      }
    case Types.GET_BY_ID_SUCCESS:
      return {
        name: payload.name
      }
    default:
      return state
  }
}

const getusers = (state = {}, {type, payload}) => {
  switch(type) {
    case Types.GET_BY_ID_FAILURE:
      return {
        error: payload.error
      }
    case Types.GET_BY_ID_REQUEST:
      return {
        users: ''
      }
    case Types.GET_BY_ID_SUCCESS:
      return {
        users: payload.users
      }
    default:
      return state
  }
}

export default combineReducers({
  signup,
  signin,
  getbyid,
  getusers,
})
