import { connect } from 'react-redux'

import Home from './component'

import dataActions from '../../store/data/actions'

const mapStateToProps = (state) => ({
  signupError: state.dataReducer.signup.error
})

const mapDispatchToProps = (dispatch) => ({
  signup: (data) => dispatch(dataActions.signup(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)