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
    <div className='user-card__age'>
      <span className='user-card__age--blue'>
        {age}
      </span>
      <span>
        &nbsp;years old
      </span>
    </div>
    <div className='user-card__job'>
      Work as&nbsp;
      <span className='user-card__job--blue'>
        {job}
      </span>
    </div>
  </div>
    <div className='description'>Description</div>
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
