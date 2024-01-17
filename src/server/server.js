import axios from 'axios';

const KEY = 'b8d685aa89f64a6cf112c60dddfc9250';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const fetchTrendingMovies = async (
  timeWindow = 'day',
  page = 1,
  language = 'en-US'
) => {
  try {
    const response = await axios.get(`${BASE_URL}trending/all/${timeWindow}`, {
      params: {
        api_key: KEY,
        page: page,
        language: language,
      },
    });

    return response.data.results.map(
      ({ id, title, overview, poster_path }) => ({
        id,
        title,
        overview,
        posterURL: `https://image.tmdb.org/t/p/w500${poster_path}`,
      })
    );
  } catch (error) {
    throw error;
  }
};
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
        posterURL: `https://api.themoviedb.org/3/movie/${id}/images`, // постер фільму
      })
    );
  } catch (error) {
    throw error;
  }
};

export const fetchMovieDetails = async movieId => {
  try {
    const response = await axios.get(`${BASE_URL}movie/${movieId}`, {
      params: {
        api_key: KEY,
        language: 'en-US',
      },
    });

    return {
      id: response.data.id,
      title: response.data.title,
      overview: response.data.overview,
      posterURL: `https://api.themoviedb.org/3/movie/${movieId}/images`,
      genres: response.data.genres.map(genre => genre.name).join(', '),
      releaseDate: response.data.release_date,
    };
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};

export const fetchCast = async movieId => {
  try {
    const response = await axios.get(`${BASE_URL}movie/${movieId}/credits`, {
      params: {
        api_key: KEY,
      },
    });

    return response.data.cast.map(
      ({ cast_id, name, character, profile_path }) => ({
        castId: cast_id,
        actorName: name,
        characterName: character,
        profilePicURL: profile_path
          ? `https://image.tmdb.org/t/p/w500${profile_path}`
          : null,
      })
    );
  } catch (error) {
    console.error('Error fetching movie cast:', error);
    throw error;
  }
};

export const fetchMovieReviews = async (movieId, page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}movie/${movieId}/reviews`, {
      params: {
        api_key: KEY,
        page: page,
      },
    });

    return response.data.results.map(({ id, author, content }) => ({
      id,
      author,
      content,
    }));
  } catch (error) {
    throw error;
  }
};
