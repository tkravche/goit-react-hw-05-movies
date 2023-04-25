import { Link } from 'react-router-dom';

export const TrendingMoviesList = ({ trendingMovies }) => {
  return (
    <div>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
