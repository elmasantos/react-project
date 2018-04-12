import React from 'react'

import '../../stylesheets/common/login-form.css'

const LoginForm = () => (
  <form className='login-form'>
    <label className='login-form__username'>
      Username:
      <input type="text" name="name" />
    </label>
    <label className='login-form__password'>
      Password:
      <input type="password" name="psw" />
    </label>
    <button
      className='login-form__button'
    >
      <span>OK</span>
    </button>

  </form>
)

export default LoginForm