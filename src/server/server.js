import axios from 'axios';

const KEY = 'b8d685aa89f64a6cf112c60dddfc9250';
const BASE_URL = 'https://api.themoviedb.org/3/';

// Функція для пошуку фільмів
export const fetchMovies = async (query, page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}search/movie`, {
      params: {
        api_key: KEY,
        query: query,
        page: page,
        language: 'en-US',
      },
    });

    return response.data.results.map(
      ({ id, title, overview, poster_path }) => ({
        id,
        title,
        overview,
        posterURL: `https://image.tmdb.org/t/p/w500${poster_path}`, // постер фільму
      })
    );
  } catch (error) {
    throw error;
  }
};
