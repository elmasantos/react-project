import React from 'react'
import Alert from 'react-s-alert';

import Layout from '../../components/common/layout'
import UserCard from '../../components/user-card'
import AuthBox from '../../components/common/auth-box'
import PopularBox from '../../components/common/popular-box'
import usersResources from '../../services/resources/users'

import '../../stylesheets/home/home.css'
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

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
    const { getbyid, signin, signup, signinError, signupError, authenticated,
      user_name } = this.props
    if (signupError) {
      Alert.error(signupError)
    }
    if (signinError) {
      Alert.error(signinError)
    }

    const jobsList = this.getDataRatings('job')
    const namesList = this.getDataRatings('name')

    const profilesAmount = this.getProfilesAmount()

    const namesAmount = this.getDataAmount(namesList)
    const jobsAmount = this.getDataAmount(jobsList)

    return (
      <Layout profiles={profilesAmount} names={namesAmount} jobs={jobsAmount} >
        <Alert stack={{limit: 3}} />
        <div className="home">
          <div className="home__left">
            <AuthBox signup={signup} signin={signin} authenticated={authenticated}
              getbyid={getbyid} user_name={user_name} />
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