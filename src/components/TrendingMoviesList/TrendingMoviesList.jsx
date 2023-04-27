import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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

TrendingMoviesList.propTypes = {
  trendingMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  location: PropTypes.object.isRequired,
};
