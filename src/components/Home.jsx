import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from '../server/server';
import css from '../css/home.module.css';
const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const trendingMovies = await fetchTrendingMovies();
        setMovies(trendingMovies);
      } catch (error) {
        console.error(error);
      }
    };

    getTrendingMovies();
  }, []);

  return (
    <div className={css.divcontainer}>
      <h2>Trending Movies</h2>

      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <img src={movie.posterURL} alt={movie.title} />
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Home };
