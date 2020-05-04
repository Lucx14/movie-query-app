import axios from 'axios';
import { getResult } from './helpers';

const config = {
  headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTA4MGQ5ZDYxZjMwMjQ2ZDg1NTFjNzBmNWUxZDg5YyIsInN1YiI6IjVlYWIyMWY3YTEyODU2MDAxZDY5MTkwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3e7I81YcbPKVb2lb63bEt8Uk0zpaxTZx_WxzNWdXvGo` }
};

export async function getMovie(id) {
  return axios
    .get(`https://api.themoviedb.org/3/movie/${id}`, config)
    .then(getResult);
};