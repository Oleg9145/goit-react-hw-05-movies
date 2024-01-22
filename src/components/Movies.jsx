import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { fetchMovies } from '../server/server';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const getQueryFromUrl = search => {
    return new URLSearchParams(search).get('query') || '';
  };

  useEffect(() => {
    const queryFromUrl = getQueryFromUrl(location.search);
    setQuery(queryFromUrl);

    if (queryFromUrl) {
      fetchMovies(queryFromUrl).then(setSearchResults);
    }
  }, [location.search]);

  const handleSearch = async () => {
    const results = await fetchMovies(query);
    setSearchResults(results);
    navigate(`/movies?query=${query}`);
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
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Movies };
