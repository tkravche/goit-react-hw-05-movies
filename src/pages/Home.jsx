import { useState, useEffect } from 'react';

import { TrendingMoviesList } from 'components/TrendingMoviesList/TrendingMoviesList';
import { fetchTrendingMovies } from '../services/moviesAPI';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [setIsLoading] = useState(false);
  const [setError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    fetchTrendingMovies()
      .then(({ data: { results } }) => {
        setMovies(prevState => [...results]);
      })
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, [setIsLoading, setError]);

  return (
    <main>
      <h1>Trending today</h1>
      <TrendingMoviesList trendingMovies={movies} />
    </main>
  );
};
