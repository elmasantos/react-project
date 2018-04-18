import { connect } from 'react-redux'

import Home from './component'

import dataActions from '../../store/data/actions'

const mapStateToProps = (state) => ({
  signupError: state.dataReducer.signup.error,
  signinError: state.dataReducer.signin.error
})

const mapDispatchToProps = (dispatch) => ({
  signup: (data) => dispatch(dataActions.signup(data)),
  signin: (data) => dispatch(dataActions.signin(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)