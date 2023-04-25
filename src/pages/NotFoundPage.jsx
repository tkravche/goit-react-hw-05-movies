import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <main style={{ textAlign: 'center' }}>
      <b style={{ fontSize: 64 }}>404</b>
      <p>Sorry, we couldn't find that page :(</p>
      <Link to="/">Go to Homepage</Link>
    </main>
  );
};
