import React from 'react'

import '../../stylesheets/common/auth-box.css'

import LoginForm from './login-form'
import RegistrationForm from './registration-form'

class AuthBox extends React.Component {
  constructor(){
    super()
    this.state = {
      showSignIn: false,
      showSignUp: false
    }
  }

  renderAuthBox = ({ content }) => (
    <div className='authbox__element'>
      <span className='authbox__element__content'>
        {content}
      </span>
    </div>
  )

  renderButton = ({ color, title }) => (
    <button
      onClick={this._handleClick.bind(this, color)}
      className={`auth-box__button auth-box__button--${color}`}
    >
      <span className='auth-box__title'>{title}</span>
    </button>
  )

  _handleClick(color) {
    if (color === 'blue'){
      this.setState ({
        showSignIn: !this.state.showSignIn,
        showSignUp: false
      });
    }
    else {
      this.setState ({
        showSignUp: !this.state.showSignUp,
        showSignIn: false
      });
    }
  }

  render () {
    const { signup } = this.props

    let firstMessage;
    let secondMessage;
    let buttons;
    if(this.state.showSignIn === false && this.state.showSignUp === false){
      firstMessage = <div className='auth-box__message'>YOU ARE NOT IN.</div>
      secondMessage = <div className='auth-box__message'>SO JUST GET IN, NOW!</div>
      buttons = <div className='auth-box__actions'>
        {this.renderButton({ color: 'blue', title: 'SIGN IN'})}
        {this.renderButton({ color: 'pink', title: 'SIGN UP'})}
      </div>
    }
    else if (this.state.showSignIn){
      firstMessage = <div className='auth-box__message'>Sign in:</div>
      secondMessage = <LoginForm />
    }
    else if (this.state.showSignUp){
      firstMessage = <div className='auth-box__message'>Sign up:</div>
      secondMessage = <RegistrationForm signup={signup}/>
    }
    return (
      <div className='auth-box'>
        {firstMessage}
        {secondMessage}
        {buttons}
      </div>
    )
  }
}

export default AuthBox