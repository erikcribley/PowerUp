import axios from 'axios'

export default {
  register: (userName, password) => {
    return axios.post('/register', {
      username: userName,
      password: password
    })
  },

  login: (userName, password) => {
    return axios.post('/login', {
      username: userName,
      password: password
    })
  },

  getTasks: taskId => {
    return axios.get('/tasks')
  },

  addTasks: task => {
    return axios.post('/tasks', { task: task })
  },

  updateTasks: (taskId, task) => {
    return axios.put('/tasks', { taskId: taskId, task: task })
  },

  deleteTasks: taskId => {
    return axios.delete(`/tasks/${taskId}`)
  },

  getShip: userId => {
    return axios.get(`/gameplay/${userId}`)
  },

  getCharacters: () => {
    return axios.get('/characters')
  },

  saveCharacter: (name, ship) => {
    return axios.post('/characters', { name: name, ship: ship })
  },

  getStats: () => {
    return axios.get('/stats')
  },

  getPrompt: promptId => {
    return axios.get(`/prompt/${promptId}`)
  }
}
