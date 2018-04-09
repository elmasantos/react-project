import React from 'react'
import usersResources from '../../services/resources/users'
import UserCard from '../../components/user-card'
import '../../stylesheets/home/home.css'

class Home extends React.Component {
  constructor(){
    super()

    this.state = {
      users: []
    }
  }

  componentWillMount() {
    usersResources.getUsers()
      .then((result) => this.setState({
        users: result.data
      }))
  }

  renderUsers() {
    const { users } = this.state
    console.log(users);

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

  render() {

   return (
      <div className="home">
        <div className="home__user-list">
          {this.renderUsers()}
        </div>
      </div>
    )
  }
}

export default Home