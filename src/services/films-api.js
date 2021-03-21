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

const fetchMovieDetails = movieId => {
  return axios
    .get(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`)
    .then(response => response.data)
    .catch(error => error);
};

const fetchMovieCast = movieId => {
  return axios
    .get(
      `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
    )
    .then(response => response.data)
    .catch(error => error);
};

const fetchMovieReviews = movieId => {
  return axios
    .get(
      `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
    )
    .then(response => response.data)
    .catch(error => error);
};

export default {
  fetchTrendingMovies,
  fetchMoviesForQuery,
  fetchMovieDetails,
  fetchMovieCast,
  fetchMovieReviews,
};

// Search for query
// https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false

// Movie details
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

// Movie casts
//https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US

// Movie reviews
// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
