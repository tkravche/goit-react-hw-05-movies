import { Link } from 'react-router-dom';

export const MoviesSearchList = ({ moviesSearch }) => {
  return (
    <div>
      {moviesSearch.map(movie => (
        <ul key={movie.id}>
          <Link to={`${movie.id}`}>
            <li>{movie.title}</li>
          </Link>
        </ul>
      ))}
    </div>
  );
};
