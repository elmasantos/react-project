import React from 'react'

import usersResources from '../../services/resources/users'

import '../../stylesheets/common/registration-form.css'

class RegistrationForm extends React.Component {
  constructor() {
    super()

    this._handleSubmit = this._handleSubmit.bind(this)
  }

  _handleSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.target)
    const { signup } = this.props
    signup(data)
  }

  render() {
    return (
      <form className='registration-form' onSubmit={this._handleSubmit}>
        <div className='registration-form__box'>
          <label>
            Name:
            <input type="text" name="name"/>
          </label>
          <div className='registration-form__info'>
            <label>
              Nickname:
              <input type="text" name="nickname"/>
            </label>
            <label>
              Password:
              <input type="password" name="password"/>
            </label>
            <label>
              Password Confirmation:
              <input type="password" name="password_confirmation"/>
            </label>
            <label className='registration-form__age'>
              Age:
              <input className='registration-form__age_label' type="text" name="age"
              />
            </label>
            <label className='registration-form__job'>
              Job:
              <input className='registration-form__job_label' type="text" name="job"
              />
            </label>
          </div>
          <label >
            Description:
            <input type="text" name="description" />
          </label>
        </div>
        <button
          className='registration-form__button'
        >
          <span>OK</span>
        </button>
      </form>
    )
  }
}

export default RegistrationForm