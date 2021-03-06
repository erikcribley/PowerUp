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
    return axios.get('/user/tasks')
  },

  addTasks: (task, taskCredit) => {
    return axios.post('/user/tasks', { task: task, taskCredit: taskCredit })
  },

  updateTasks: (taskId, task) => {
    return axios.put('/user/tasks', { taskId: taskId, task: task })
  },

  updateCredits: credits => {
    return axios.put('/user/credits', { credits: credits })
  },

  deleteTasks: taskId => {
    return axios.delete(`/user/tasks/${taskId}`)
  },

  getShip: userId => {
    return axios.get('/user/gameplay')
  },

  getCharacters: () => {
    return axios.get('/user/characters')
  },

  saveCharacter: (name, ship) => {
    return axios.post('/user/characters', { name: name, ship: ship })
  },

  getStats: () => {
    return axios.get('/user/stats')
  },

  getPrompt: promptId => {
    return axios.get(`/user/gameplay/${promptId}`)
  }
}
