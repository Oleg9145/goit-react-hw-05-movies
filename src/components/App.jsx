import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import css from '../css/app.module.css';

const Home = lazy(() =>
  import('./Home').then(module => ({ default: module.Home }))
);
const Movies = lazy(() =>
  import('./Movies').then(module => ({ default: module.Movies }))
);
const MovieDetails = lazy(() =>
  import('./MovieDetails').then(module => ({ default: module.MovieDetails }))
);
const Cast = lazy(() =>
  import('./Cast').then(module => ({ default: module.Cast }))
);
const Reviews = lazy(() =>
  import('./Reviews').then(module => ({ default: module.Reviews }))
);

function App() {
  return (
    <Router basename="">
      <div className={css.header}>
        <ul>
          <li>
            <Link className={css.a} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={css.a} to="/movies/">
              Movies
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/" element={<Movies />} />
          <Route path="/movie/:movieId" element={<MovieDetails />} />
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export { App };
