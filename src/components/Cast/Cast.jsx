import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieCast } from 'services/moviesAPI';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCast(movieId)
      .then(({ data }) => {
        setCast(data.cast);
      })
      .catch(error => setError(error.message));
  }, [movieId]);

  return !cast ? (
    ''
  ) : (
    <section>
      <ul>
        {cast.map(actor => (
          <li key={actor.credit_id}>
            {actor.profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
                width="70"
                height="100"
              />
            )}

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

export default Cast;
