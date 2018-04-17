import Request from './requests'

const getUsers = () => Request.get('https://profiler-api-codeminer.herokuapp.com/users')

const postUser = (data) => Request.post('https://profiler-api-codeminer.herokuapp.com/users', data)

export default {
  getUsers,
  postUser
}