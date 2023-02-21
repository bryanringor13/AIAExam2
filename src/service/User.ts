import axios from 'axios';

function getUsers() {
  return axios.get('/api/user');
}

export {getUsers};
