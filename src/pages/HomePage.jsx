import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { MoviesList } from '../components/MoviesList/MoviesList';
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
      <MoviesList location={location} movies={movies} />
    </main>
  );
};

export default Home;
