import React from 'react'

import UserCard from '../user-card/index'

import '../../stylesheets/home/users-list.css'

class UsersList extends React.Component{
  renderUsers() {
    const {users} = this.props
    if(users){
      return users.map((user, index) => (
        <UserCard
          name={user.attributes.name}
          age={user.attributes.age}
          job={user.attributes.job}
          description={user.attributes.description}
          key={index}
        />
      ))
    }
  }

  render() {
    return (
      <div className='users-list' >{this.renderUsers()}</div>
    )
  }
}

export default UsersList
