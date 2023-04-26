import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';

import { fetchMovieByQuery } from 'services/moviesAPI';
import { SearchBox } from 'components/Searchbox/SearchBox';
import { MoviesSearchList } from 'components/MoviesSearchList/MoviesSearchList ';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search') ?? '';
  const location = useLocation();
  console.log(location);
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ search: form.elements.search.value.trim() });
    form.reset();
  };

  useEffect(() => {
    setIsLoading(true);
    fetchMovieByQuery(search)
      .then(({ data: { results } }) => {
        setMovies(results);
      })
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, [search]);

  return (
    <main>
      <SearchBox value={search} OnHandleSubmit={handleSubmit} />
      <MoviesSearchList location={location} moviesSearch={movies} />
    </main>
  );
};
