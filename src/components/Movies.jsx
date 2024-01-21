import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { fetchMovies } from '../server/server';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchQuery = params.get('query');

    if (searchQuery) {
      setQuery(searchQuery);
      fetchAndSetMovies(searchQuery);
    }
  }, [location.search]);

  const fetchAndSetMovies = async query => {
    try {
      const results = await fetchMovies(query);
      setSearchResults(results);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = async () => {
    navigate(`/movies?query=${query}`);
    fetchAndSetMovies(query);
  };

  return (
    <div>
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
