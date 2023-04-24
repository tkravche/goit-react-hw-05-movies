import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieCast } from 'services/moviesAPI';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchMovieCast(movieId)
      .then(({ data }) => {
        setCast(data.cast);
      })
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <section>
      <ul>
        {cast.map(actor => (
          <li key={actor.credit_id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              alt={actor.name}
              width="70"
              height="100"
            />
            <div>
              <p>{actor.name}</p>
              <p>Character: {actor.character} </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
