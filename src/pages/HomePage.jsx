import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { TrendingMoviesList } from 'components/TrendingMoviesList/TrendingMoviesList';
import { fetchTrendingMovies } from '../services/moviesAPI';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    setIsLoading(true);
    fetchTrendingMovies()
      .then(({ data: { results } }) => {
        setMovies(prevState => [...results]);
      })
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <TrendingMoviesList location={location} trendingMovies={movies} />
    </main>
  );
};
