import { Link, Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieById } from 'services/moviesAPI';

export const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchMovieById(movieId)
      .then(({ data }) => {
        setMovie(data);
      })
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <main>
      <a href="/">Go back</a>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div>
        <h2>
          {movie.title} - {movieId}
        </h2>
        <p>User Score: </p>
        <p>Overview: {movie.overview}</p>
        <p>
          Genres:
          {/* {movie.genres.map(genre => (
            <span>{genre.name} </span>
          ))} */}
        </p>
        <p>Additional information: </p>
        <Link to={`cast`}>Cast </Link>
        <Link to={`reviews`}>Reviews </Link>
        <Outlet />
      </div>
    </main>
  );
};
