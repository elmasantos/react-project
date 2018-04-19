import Request from './requests'

const getUsers = () => Request.get('https://profiler-api-codeminer.herokuapp.com/users')

const getById = (id) => Request.get('https://profiler-api-codeminer.herokuapp.com/users/' + id)

const postUser = (data) => Request.post('https://profiler-api-codeminer.herokuapp.com/users', data)

const login = (data) => Request.post('https://profiler-api-codeminer.herokuapp.com/auth/login', data)

export default {
  getUsers,
  getById,
  postUser,
  login
}