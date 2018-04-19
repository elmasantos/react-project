import { connect } from 'react-redux'

import Home from './component'

import dataActions from '../../store/data/actions'

const mapStateToProps = (state) => ({
  signupError: state.dataReducer.signup.error,
  signinError: state.dataReducer.signin.error,
  authenticated: state.dataReducer.signin.authenticated,
  user_id: state.dataReducer.signin.id,
  user_name: state.dataReducer.getbyid.name,
  users: state.dataReducer.getusers.users
})

const mapDispatchToProps = (dispatch) => ({
  signup: (data) => dispatch(dataActions.signup(data)),
  signin: (data) => dispatch(dataActions.signin(data)),
  getbyid: (id) => dispatch(dataActions.getbyid(id)),
  getusers: () => dispatch(dataActions.getusers())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)