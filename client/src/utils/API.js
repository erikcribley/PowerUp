import axios from 'axios'

export default {
  register: (userName, password, name) => {
    return axios.post('/register', {
      username: userName,
      password: password,
      name: name
    })
  },

  login: (userName, password) => {
    return axios.post('/login', {
      username: userName,
      password: password
    })
  },

  getTasks: () => {
    return axios.get('/tasks')
  },

  addTasks: task => {
    return axios.post('/tasks')
  }
}
