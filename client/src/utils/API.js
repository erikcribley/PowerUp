import axios from 'axios'

export default {

  getShip: userId => {
    return axios.get(`/gameplay/${userId}`)
  } 

}
