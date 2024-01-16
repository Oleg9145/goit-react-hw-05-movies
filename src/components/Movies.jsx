import React, { useState } from 'react';
import { fetchMovies } from '../server/server';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const results = await fetchMovies(query);
      setSearchResults(results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export { Movies };
