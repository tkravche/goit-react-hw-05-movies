import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieReviews } from 'services/moviesAPI';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchMovieReviews(movieId)
      .then(({ data }) => {
        setReviews(data.results);
      })
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <section>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <p>{review.author}</p>
              <p>{review.content} </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We do not have any reviews for this movie</p>
      )}
    </section>
  );
};
