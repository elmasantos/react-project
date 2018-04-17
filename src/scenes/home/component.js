import React from 'react'

import Layout from '../../components/common/layout'
import UserCard from '../../components/user-card'
import AuthBox from '../../components/common/auth-box'
import PopularBox from '../../components/common/popular-box'

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

  getDataRatings(attribute) {
    const { users } = this.state

    return users.reduce((result, user) => {
      const actual = result[user.attributes[attribute]]
      result[user.attributes[attribute]] = actual ? actual + 1 : 1

      return result
    }, {})
  }

  getProfilesAmount() {
    const { users } = this.state
    return users.length
  }

  getDataAmount(list) {
    return Object.keys(list).length
  }

  render() {
    const { signup, signupError } = this.props
    console.log(signupError)
    const jobsList = this.getDataRatings('job')
    const namesList = this.getDataRatings('name')

    const profilesAmount = this.getProfilesAmount()

    const namesAmount = this.getDataAmount(namesList)
    const jobsAmount = this.getDataAmount(jobsList)

    return (
      <Layout profiles={profilesAmount} names={namesAmount} jobs={jobsAmount} >
        <div className="home">
          <div className="home__left">
            <AuthBox signup={signup}/>
          </div>
          <div className="home__user-list">
            {this.renderUsers()}
          </div>
          <div className="home__right">
            <PopularBox title="MOST POPULAR NAMES" list={namesList}/>
            <PopularBox title="MOST POPULAR JOBS" list={jobsList}/>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Home