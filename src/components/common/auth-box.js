import React from 'react'

import '../../stylesheets/common/auth-box.css'

import LoginForm from './login-form'

class AuthBox extends React.Component {
  constructor(){
    super()
    this.state = {
      showSignIn: false
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
    if (color == 'blue'){
      this.setState ({
        showSignIn: !this.state.showSignIn
      });
    }
  }

  render () {
    let firstMessage;
    let secondMessage;
    let buttons;
    if(this.state.showSignIn === false){
      firstMessage = <div className='auth-box__message'>YOU ARE NOT IN.</div>
      secondMessage = <div className='auth-box__message'>SO JUST GET IN, NOW!</div>
      buttons = <div className='auth-box__actions'>
        {this.renderButton({ color: 'blue', title: 'SIGN IN'})}
        {this.renderButton({ color: 'pink', title: 'SIGN UP'})}
      </div>
    }
    else {
      firstMessage = <div className='auth-box__message'>Sign in:</div>
      secondMessage = <LoginForm />
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