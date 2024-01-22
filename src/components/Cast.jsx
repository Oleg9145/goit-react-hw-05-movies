import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from '../server/server';

import css from '../css/cast.module.css';
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
    <div className={css.divContainer}>
      <h2 className={css.heading}>Cast</h2>
      <ul className={css.castList}>
        {cast.map(member => (
          <li key={member.castId} className={css.castListItem}>
            {member.profilePicURL && (
              <img
                src={member.profilePicURL}
                alt={member.actorName}
                className={css.castImage}
              />
            )}
            <p className={css.actorName}>{member.actorName}</p>
            <p className={css.characterName}>{member.characterName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Cast };
