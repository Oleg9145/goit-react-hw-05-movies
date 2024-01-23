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
      fetchMovies(queryFromUrl).then(movies => {
        setSearchResults(movies);

        navigate(`/movies?query=${queryFromUrl}`, {
          replace: true,
          state: { from: location.pathname },
        });
      });
    }
  }, [location.pathname, location.search, navigate]);

  const handleSearch = async () => {
    const results = await fetchMovies(query);
    setSearchResults(results);

    navigate(`/movies?query=${query}`, { state: { from: location.pathname } });
  };

  const handleGoBack = () => {
    if (location.state?.from) {
      navigate(location.state.from);
    } else {
      navigate('/');
    }
  };

  return (
    <div>
      <button onClick={handleGoBack}>Go Back</button>
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
            <Link
              to={`/movies/${movie.id}`}
              state={{ from: `/movies?query=${query}` }}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Movies };
