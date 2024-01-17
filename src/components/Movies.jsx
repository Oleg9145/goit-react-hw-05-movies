import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { fetchMovies } from '../server/server';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const results = await fetchMovies(query);
      setSearchResults(results);
      navigate(`/movies?query=${query}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {' '}
      <button onClick={() => navigate(-1)}>Go Back</button>
      <h1>Search Movies</h1>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map(movie => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Movies };
