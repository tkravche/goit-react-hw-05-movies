import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { fetchMovieByQuery } from 'services/moviesAPI';
import { SearchBox } from 'components/Searchbox/SearchBox';
import { MoviesSearchList } from 'components/MoviesSearchList/MoviesSearchList ';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [setIsLoading] = useState(false);
  const [setError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search') ?? '';

  const updateQueryString = search => {
    const nextParams = search !== '' ? { search } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchMovieByQuery(search)
      .then(({ data: { results } }) => {
        setMovies(results);
      })
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, [search, setIsLoading, setError]);

  return (
    <main>
      <SearchBox value={search} onChange={updateQueryString} />
      <MoviesSearchList moviesSearch={movies} />
    </main>
  );
};
