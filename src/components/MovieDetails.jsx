import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchMovieDetails } from '../server/server';
import { Cast } from './Cast';
import { Reviews } from './Reviews';

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
          <Cast movieId={movieId} />
          <Reviews movieId={movieId} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export { MovieDetails };
