import React, { useState, useEffect } from 'react';
import {
  useParams,
  Link,
  Outlet,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { fetchMovieDetails } from '../server/server';
import css from '../css/cast.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [movieDetails, setMovieDetails] = useState({});

  const from = location.state?.from || '/';
  const search = location.state?.search || '';

  useEffect(() => {
    const fetchMovieDetailsData = async () => {
      try {
        const details = await fetchMovieDetails(movieId);
        setMovieDetails(details);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetailsData();
  }, [movieId]);

  const handleBack = () => {
    navigate(from + search);
  };

  return (
    <div>
      <button onClick={handleBack}>Go Back</button>
      {movieDetails ? (
        <>
          <h1>{movieDetails.title}</h1>
          <p>{movieDetails.overview}</p>

          <nav className={css.Button}>
            <Link
              className={css.Link}
              to={`/movies/${movieId}/cast`}
              state={{ from, search }}
            >
              Cast
            </Link>
            <Link
              className={css.Link}
              to={`/movies/${movieId}/reviews`}
              state={{ from, search }}
            >
              Reviews
            </Link>
          </nav>

          <Outlet />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export { MovieDetails };
