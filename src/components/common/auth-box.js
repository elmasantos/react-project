import React from 'react'

import '../../stylesheets/common/auth-box.css'

class AuthBox extends React.Component {
  constructor(){
    super()
    this.state = { }
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
      onClick={() => { console.log('clicked!') }}
      className={`auth-box__button auth-box__button--${color}`}
    >
      <span className='auth-box__title'>{title}</span>
    </button>
  )

  render () {
    return (
      <div className='auth-box'>
        <div className='auth-box__message'>YOU ARE NOT IN.</div>
        <div className='auth-box__message'>SO JUST GET IN, NOW!</div>
        <div className='auth-box__actions'>
          {this.renderButton({ color: 'red', title: 'SIGN IN'})}
          {this.renderButton({ color: 'blue', title: 'SIGN UP'})}
        </div>
      </div>
    )
  }
}

export default AuthBox