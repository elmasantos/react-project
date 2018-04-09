import React from 'react'
import '../../stylesheets/home/user-card.css'

const UserCard = ({
  name,
  age,
  job,
  description,
}) => (
  <div className='user-card'>
  <div className='user-card__name'>{name}</div>
  <div className='user-card__info'>
    <div className='user-card__age'>Age: {age}</div>
    <div className='user-card__job'>Job: {job}</div>
  </div>

    <div className='user-card__description'>{description}</div>
  </div>
)

UserCard.defaultProps = {
  name: '',
  age: null,
  job: null,
  description: '',
}

export default UserCard