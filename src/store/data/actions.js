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

export default {
  signup,
}