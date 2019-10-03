import axios from 'axios'

export default {
  tasks: () => {
    return axios.get('/tasks')
  },

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
  }
}
