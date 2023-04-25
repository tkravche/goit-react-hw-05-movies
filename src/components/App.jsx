import { Routes, Route } from 'react-router-dom';

import { Home } from 'pages/HomePage';
import { Movies } from 'pages/MoviesPage';
import { NotFound } from 'pages/NotFoundPage';
import { Container, Header, Link } from './App.styled';
import { MovieDetails } from 'pages/MovieDetailsPage';
import { Cast } from '../components/Cast/Cast';
import { Reviews } from './Reviews/Reviews';

export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};
