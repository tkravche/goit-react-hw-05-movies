import { Link } from 'react-router-dom';

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
