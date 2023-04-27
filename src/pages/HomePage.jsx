import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { TrendingMoviesList } from 'components/TrendingMoviesList/TrendingMoviesList';
import { fetchTrendingMovies } from '../services/moviesAPI';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const location = useLocation();

  useEffect(() => {
    fetchTrendingMovies()
      .then(({ data: { results } }) => {
        setMovies(prevState => [...results]);
      })
      .catch(error => setError(error.message));
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <TrendingMoviesList location={location} trendingMovies={movies} />
    </main>
  );
};

export default Home;
