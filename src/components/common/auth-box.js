import React from 'react'

import '../../stylesheets/common/auth-box.css'

const AuthBox = () => {
  const renderAuthBox = ({ content }) => (
    <div className='authbox__element'>
      <span className='authbox__element__content'>
        {content}
      </span>
    </div>
  )

  const renderButton = ({ color, title }) => (
    <button
      onClick={() => { console.log('clicked!') }}
      className={`auth-box__button auth-box__button--${color}`}
    >
      <span className='auth-box__title'>{title}</span>
    </button>
  )

  return (
    <div className='auth-box'>
      <div className='auth-box__message'>YOU ARE NOT IN.</div>
      <div className='auth-box__message'>SO JUST GET IN, NOW!</div>
      <div className='auth-box__actions'>
        {renderButton({ color: 'red', title: 'SIGN IN'})}
        {renderButton({ color: 'blue', title: 'SIGN UP'})}
      </div>
    </div>
  )
}

export default AuthBox