import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../server/server';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const details = await fetchMovieDetails(movieId);
        setMovieDetails(details);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDetails();
  }, [movieId]);

  return (
    <div>
      {movieDetails ? (
        <>
          <h1>{movieDetails.title}</h1>
          <p>{movieDetails.overview}</p>
          {/* інші деталі фільму */}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export { MovieDetails };
