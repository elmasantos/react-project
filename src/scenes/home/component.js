import React from 'react'
import Alert from 'react-s-alert';

import Layout from '../../components/common/layout'
import UserCard from '../../components/user-card'
import AuthBox from '../../components/common/auth-box'
import PopularBox from '../../components/common/popular-box'

import '../../stylesheets/home/home.css'
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

class Home extends React.Component {
  componentWillMount() {
    this.props.getusers()
  }

  renderUsers() {
    const { users } = this.props
    console.log("users", users)
    if(users) {
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

  getDataRatings(attribute) {
    const { users } = this.props
    if(users) {
      return users.reduce((result, user) => {
        const actual = result[user.attributes[attribute]]
        result[user.attributes[attribute]] = actual ? actual + 1 : 1

        return result
      }, {})
    }
  }

  getProfilesAmount() {
    const { users } = this.props
    if(users){
      return users.length
    }
    else {
      return 0
    }
  }

  getDataAmount(list) {
    if(list) {
      return Object.keys(list).length
    }
    else {
      return 0
    }
  }

  render() {
    const {
      getbyid,
      signin,
      signup,
      signinError,
      signupError,
      authenticated,
      user_name,
    } = this.props
    console.log(this.props)

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