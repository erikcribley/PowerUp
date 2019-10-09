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

  getTasks: (taskId, numTasks) => {
    return axios.get(`/tasks/${taskId}/${numTasks}`)
  },

  addTasks: task => {
    return axios.post('/tasks', { task: task })
  },

  updateTasks: (taskId, task) => {
    return axios.put('/tasks', { taskId: taskId, task: task })
  },

  deleteTasks: taskId => {
    return axios.delete('/tasks', { taskId: taskId })
  },

  getShip: userId => {
    return axios.get(`/gameplay/${userId}`)
  }
}
