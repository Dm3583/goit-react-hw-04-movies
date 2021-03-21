import axios from 'axios';

const API_KEY = 'feea8d10db0dbe86ef0439bac77167c5';
const BASE_URL = 'https://api.themoviedb.org/3/';

const fetchTrendingMovies = () => {
  return axios
    .get(`${BASE_URL}trending/movie/week?api_key=${API_KEY}`)
    .then(response => response.data)
    .catch(error => error);
};

const fetchMoviesForQuery = query => {
  return axios
    .get(
      `${BASE_URL}search/movie?&query=${query}&api_key=${API_KEY}&page=1&include_adult=false`,
    )
    .then(response => response.data)
    .catch(error => error);
};

export default { fetchTrendingMovies, fetchMoviesForQuery };

// Search for query
// https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
