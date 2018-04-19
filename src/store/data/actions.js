import * as Types from './action-types'
import usersResources from '../../services/resources/users'

const signup = (data) => (dispatch) => {
  dispatch({
    type: Types.SIGN_UP_USER_REQUEST,
  })

  return usersResources.postUser(data)
    .then(() => {
      dispatch({
        type: Types.SIGN_UP_USER_SUCCESS,
      })
    })
      .catch((error) => {
        dispatch({
          type: Types.SIGN_UP_USER_FAILURE,
          payload: {
            error: error.response.data.message,
          }
        })
      })
}

const signin = (data) => (dispatch) => {
  dispatch( {
    type: Types.SIGN_IN_USER_REQUEST,
  })

  return usersResources.login(data)
    .then((response) => {
      dispatch({
        payload:{
          token: response.data.auth_token,
          id: response.data.id
        },
        type: Types.SIGN_IN_USER_SUCCESS,
      })
    })
      .catch((error) => {
        dispatch({
          type: Types.SIGN_IN_USER_FAILURE,
          payload: {
            error: error.response.data.message,
          }
        })
      })
}

const getbyid = (id) => (dispatch) => {
  dispatch({
    type: Types.GET_BY_ID_REQUEST,
  })
  return usersResources.getById(id)
    .then((response) => {
      console.log(response)
      dispatch({
        payload: {
          name: response.data.attributes.name
        },
        type: Types.GET_BY_ID_SUCCESS,
      })
    })
      .catch((error) => {
        dispatch({
          type: Types.GET_BY_ID_FAILURE,
          payload: {
            error: error.response.data.message,
          }
        })
      })
}

export default {
  signup,
  signin,
  getbyid
}