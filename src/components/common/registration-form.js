import React from 'react'

import '../../stylesheets/common/registration-form.css'

const RegistrationForm = () => (
  <form className='registration-form'>
    <div className='registration-form__box'>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <div className='registration-form__info'>
        <label className='registration-form__age'>
          Age:
          <input className='registration-form__age_label' type="text" name="age" />
        </label>
        <label className='registration-form__job'>
          Job:
          <input className='registration-form__job_label' type="text" name="job" />
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

export default RegistrationForm