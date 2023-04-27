import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MoviesSearchList = ({ moviesSearch, location }) => {
  return (
    <div>
      <ul>
        {moviesSearch.map(movie => (
          <li key={movie.id}>
            <Link to={`${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

MoviesSearchList.propTypes = {
  moviesSearch: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  location: PropTypes.object.isRequired,
};
