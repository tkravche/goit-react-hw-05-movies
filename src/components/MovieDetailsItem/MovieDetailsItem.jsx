import { StyledContainer } from './MoviesDetailItem.styled';

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
        <h2>{movie.title}</h2>
        <p>User Score: {movie.vote_average.toFixed(1)} </p>
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
