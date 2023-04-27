import PropTypes from 'prop-types';

import { StyledContainer } from './MoviesDetailsItem.styled';

export const MovieDetailsItem = ({ movie }) => {
  return (
    <StyledContainer>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width="240"
        height="340"
      />
      <div>
        <h2>
          {movie.title} ({movie.release_date.slice(0, 4)})
        </h2>
        <p>User Score: {Number(movie.vote_average.toFixed(1)) * 10}% </p>
        <h3>Overview </h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        {movie.genres.map(genre => (
          <span key={genre.id}> {genre.name} </span>
        ))}
      </div>
    </StyledContainer>
  );
};

MovieDetailsItem.propTypes = {
  moviesSearch: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
      overview: PropTypes.string.isRequired,
      genres: PropTypes.array.isRequired,
    })
  ),
};
