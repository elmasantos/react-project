import Request from './requests'

const getUsers = () => Request.get('https://profiler-api-codeminer.herokuapp.com/users')

const postUser = (data) => Request.post('https://profiler-api-codeminer.herokuapp.com/users', data)

const login = (data) => Request.post('https://profiler-api-codeminer.herokuapp.com/auth/login', data)

export default {
  getUsers,
  postUser,
  login
}