import React from 'react'
import Alert from 'react-s-alert';

import Layout from '../../components/common/layout'
import AuthBox from '../../components/common/auth-box'
import PopularBox from '../../components/common/popular-box'
import UsersList from '../../components/users-list/index'

import '../../stylesheets/home/home.css'
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

class Home extends React.Component {
  componentWillMount() {
    this.props.getusers()
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
      signin,
      signup,
      signinError,
      signupError,
      authenticated,
      user_name,
      user_id,
      age,
      job,
      users
    } = this.props

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
      <Layout users={users} profiles={profilesAmount} names={namesAmount} jobs={jobsAmount} >
        <Alert stack={{limit: 3}} />
        <div className="home">
          <div className="home__left">
            <AuthBox signup={signup} signin={signin} authenticated={authenticated}
              user_name={user_name} user_id={user_id} age={age} job={job} />
          </div>
          <div className="home__user-list">
            <UsersList users={users}/>
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