import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const containsForbiddenWords = (description) => {
  const forbiddenWords = [
    "sex",
    "nude",
    "prostitutes",
    "violence",
    "porn",
    "breasts",
  ];
  return forbiddenWords.some((word) =>
    description.toLowerCase().includes(word)
  );
};

const getRandomItems = (array, count) => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const fetchMoviesFromApi = async (selectedMoodData) => {
  const randomGenreId =
    selectedMoodData.genres[
      Math.floor(Math.random() * selectedMoodData.genres.length)
    ];

  const randomPage = Math.floor(Math.random() * 100) + 1;

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie`,
      {
        params: {
          with_genres: randomGenreId,
          page: randomPage,
          api_key: API_KEY,
          "vote_average.gte": 4,
          "vote_count.gte": 10,
        },
      }
    );

    const filteredResults = response.data.results.filter(
      (movie) => !containsForbiddenWords(movie.overview)
    );
    return getRandomItems(filteredResults, 3);
  } catch (error) {
    console.error("Error fetching movies from API:", error);
    return [];
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}`,
      {
        params: {
          api_key: API_KEY,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
};

export default fetchMoviesFromApi;
