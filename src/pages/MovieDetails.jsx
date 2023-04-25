import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieById } from 'services/moviesAPI';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { movieId } = useParams();

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
      <button onClick={() => navigate(-1)}>Go back</button>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width="240"
        height="340"
      />
      <div>
        <h2>{movie.title}</h2>
        <p>User Score: </p>
        <p>Overview: {movie.overview}</p>
        <p>Genres:</p>
        {movie.genres.map(genre => (
          <ul key={genre.id}>
            <li>{genre.name}</li>
          </ul>
        ))}
        <p>Additional information: </p>
        <Link to={`cast`}>Cast </Link>
        <Link to={`reviews`}>Reviews </Link>
        <Outlet />
      </div>
    </main>
  );
};
