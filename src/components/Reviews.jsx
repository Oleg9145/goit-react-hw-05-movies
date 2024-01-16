import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies } from '../server/server'; // Припустимо, у вас є функція для отримання оглядів

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const reviewsData = await fetchMovies(movieId);
        setReviews(reviewsData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  return (
    <div>
      <h2>Reviews</h2>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <strong>{review.author_name}:</strong>{' '}
              {/* Використання правильного поля для імені автора */}
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews available for this movie.</p>
      )}
    </div>
  );
};

export { Reviews };
