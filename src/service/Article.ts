import axios from 'axios';

function getArticles() {
  return axios.get('/api/articles');
}

export {getArticles};
