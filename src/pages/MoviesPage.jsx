import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';

import { fetchMovieByQuery } from 'services/moviesAPI';
import { SearchBox } from 'components/Searchbox/SearchBox';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const [error, setError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search') ?? '';
  const location = useLocation();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ search: form.elements.search.value.trim() });
    form.reset();
  };

  useEffect(() => {
    if (search === '') return;

    fetchMovieByQuery(search)
      .then(({ data: { results } }) => {
        setMovies(results);
      })
      .catch(error => setError(error.message));
  }, [search]);

  return (
    <main>
      <SearchBox OnHandleSubmit={handleSubmit} />
      <MoviesList location={location} movies={movies} />
    </main>
  );
};

export default Movies;
