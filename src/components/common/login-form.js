import React from 'react'

import usersResources from '../../services/resources/users'

import '../../stylesheets/common/login-form.css'

const LoginForm = () => {

  const _handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.target)

    usersResources.login(data)
  }

  return (
    <form className='login-form' onSubmit={this._handleSubmit}>
    <div className='login-form__box'>
      <label className='login-form__username'>
        Username:
        <input type="text" name="name" />
      </label>
      <label className='login-form__password'>
        Password:
        <input type="password" name="psw" />
      </label>
    </div>
    <button
      className='login-form__button'
    >
      <span>OK</span>
    </button>

  </form>
  )
}

export default LoginForm