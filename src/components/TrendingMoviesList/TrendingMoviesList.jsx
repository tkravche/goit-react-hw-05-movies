import { Link } from 'react-router-dom';

export const TrendingMoviesList = ({ trendingMovies }) => {
  return (
    <div>
      {trendingMovies.map(movie => (
        <ul key={movie.id}>
          <Link to={`movies/${movie.id}`}>
            <li>{movie.title}</li>
          </Link>
        </ul>
      ))}
    </div>
  );
};
