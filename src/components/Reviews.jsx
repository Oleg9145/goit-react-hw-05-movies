import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../server/server';

import css from '../css/reviews.module.css';
const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviewsData = async () => {
      try {
        const reviewsData = await fetchMovieReviews(movieId);
        setReviews(reviewsData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieReviewsData();
  }, [movieId]);

  return (
    <div className={css.reviewsContainer}>
      <h2 className={css.reviewsHeading}>Reviews</h2>
      <ul className={css.reviewsList}>
        {reviews.map(review => (
          <li key={review.id} className={css.reviewItem}>
            <strong className={css.authorName}>{review.author_name}:</strong>
            {review.content}
          </li>
        ))}
      </ul>
    </div>
  );
};
export { Reviews };
