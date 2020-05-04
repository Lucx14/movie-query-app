import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/'
});

export default instance;
