import { Link } from 'react-router-dom';

export const TrendingMoviesList = ({ location, trendingMovies }) => {
  return (
    <div>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
