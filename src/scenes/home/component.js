import React from 'react'

import Layout from '../../components/common/layout'
import UserCard from '../../components/user-card'
import AuthBox from '../../components/common/auth-box'

import '../../stylesheets/home/home.css'

import usersResources from '../../services/resources/users'

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
      <Layout>
        <div className="home">
          <AuthBox />
          <div className="home__user-list">
            {this.renderUsers()}
          </div>
        </div>
      </Layout>
    )
  }
}

export default Home