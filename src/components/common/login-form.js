import React from 'react'

import '../../stylesheets/common/login-form.css'

class LoginForm extends React.Component {
  constructor(){
    super()
    this._handleSubmit = this._handleSubmit.bind(this)
  }

  _handleSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.target)
    const { signin } = this.props
    signin(data)
  }

  render() {
    return (
      <form className='login-form' onSubmit={this._handleSubmit}>
      <div className='login-form__box'>
        <label className='login-form__username'>
          Username:
          <input type="text" name="nickname" />
        </label>
        <label className='login-form__password'>
          Password:
          <input type="password" name="password" />
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
}

export default LoginForm