import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from '../server/server';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const castData = await fetchCast(movieId);
        setCast(castData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieCast();
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map(member => (
          <li key={member.castId}>{member.actorName}</li>
        ))}
      </ul>
    </div>
  );
};

export { Cast };
