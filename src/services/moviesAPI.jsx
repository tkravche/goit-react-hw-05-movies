import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '612624e4ceb53e70d9f6450958bf781b';
// const PER_PAGE = 12;

export const fetchTrendingMovies = () => {
  return axios('/trending/movie/day?', {
    params: {
      api_key: API_KEY,
      // per_page: PER_PAGE,
    },
  });
};

export const fetchMovieById = id => {
  return axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
};

export const fetchMovieCast = id => {
  return axios(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`
  );
};

export const fetchMovieReviews = id => {
  return axios(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}`
  );
};

// https://api.themoviedb.org/3/trending/movie/day?api_key=612624e4ceb53e70d9f6450958bf781b
//https://api.themoviedb.org/3/movie/868759?api_key=612624e4ceb53e70d9f6450958bf781b
//https://api.themoviedb.org/3/movie/868759/credits?api_key=612624e4ceb53e70d9f6450958bf781b
//https://api.themoviedb.org/3/movie/868759/reviews?api_key=612624e4ceb53e70d9f6450958bf781b
