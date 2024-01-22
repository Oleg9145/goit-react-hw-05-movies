import React, { useState, useEffect } from 'react';
import { useParams, Link, Outlet, useNavigate } from 'react-router-dom';
import { fetchMovieDetails } from '../server/server';
import css from '../css/cast.module.css';
const MovieDetails = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movieDetails, setMovieDetails] = useState({});

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

  return (
    <div>
      <button onClick={() => navigate(-1)}>Go Back</button>
      {movieDetails ? (
        <>
          <h1>{movieDetails.title}</h1>
          <p>{movieDetails.overview}</p>

          <nav className={css.Button}>
            <Link className={css.Link} to={`/movies/${movieId}/cast`}>
              Cast
            </Link>
            <Link className={css.Link} to={`/movies/${movieId}/reviews`}>
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
