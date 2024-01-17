import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './Home';
import { Movies } from './Movies';
import { MovieDetails } from './MovieDetails';
import { Cast } from './Cast';
import { Reviews } from './Reviews';
import css from '../css/app.module.css';
function App() {
  return (
    <Router basename="/oleg9145.github.io/goit-react-hw-05-movies">
      <div className={css.header}>
        <ul>
          <li>
            <Link className={css.a} to="/">
              Home
            </Link>

            <Link to="/movies/">Movies</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/" element={<Movies />} />
        <Route path="/movie/:movieId" element={<MovieDetails />} />
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />
      </Routes>
    </Router>
  );
}

export { App };
