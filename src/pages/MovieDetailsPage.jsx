import {
  Link,
  Outlet,
  useNavigate,
  useParams,
  useLocation,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieById } from 'services/moviesAPI';
import { MovieDetailsItem } from '../components/MovieDetailsItem/MovieDetailsItem';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { movieId } = useParams();
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    setIsLoading(true);
    fetchMovieById(movieId)
      .then(({ data }) => setMovie(data))
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, [movieId]);
  const navigate = useNavigate();
  return !movie ? (
    ''
  ) : (
    <main>
      <section>
        <button
          type="button"
          onClick={() => {
            navigate(location?.state?.from ?? '/');
          }}
        >
          &#8592;Go back
        </button>

        {/* <button onClick={() => navigate(-1)}> &#8592;Go back</button> */}
        <MovieDetailsItem movie={movie} />
      </section>

      <section>
        <p>Additional information </p>
        <Link to={`cast`} state={location.state}>
          <h4>Cast</h4>{' '}
        </Link>
        <Link to={`reviews`} state={location.state}>
          <h4>Reviews</h4>{' '}
        </Link>
        <Outlet />
      </section>
    </main>
  );
};
