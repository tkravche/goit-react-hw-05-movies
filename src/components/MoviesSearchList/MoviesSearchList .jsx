import { Link } from 'react-router-dom';

export const MoviesSearchList = ({ moviesSearch }) => {
  return (
    <div>
      <ul>
        {moviesSearch.map(movie => (
          <li key={movie.id}>
            <Link to={`${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
