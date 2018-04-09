import Request from './requests'

const getUsers = () => Request.get('https://profiler-api-codeminer.herokuapp.com/users')

export default {
  getUsers,
}