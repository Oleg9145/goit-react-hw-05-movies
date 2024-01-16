import React, { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../server/server';

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
    <div>
      <h2>Trending Movies</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <a href={`/movie/${movie.id}`}>
              <img src={movie.posterURL} alt={movie.title} />
              {movie.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Home };
