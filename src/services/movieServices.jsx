import axios from "axios";

const fetchMoviesFromApi = async (selectedMoodData) => {
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  const randomGenreId =
    selectedMoodData.genres[
      Math.floor(Math.random() * selectedMoodData.genres.length)
    ];

  const randomPage = Math.floor(Math.random() * 500) + 1;

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie`,
      {
        params: {
          with_genres: randomGenreId,
          page: randomPage,
          api_key: API_KEY,
        },
      }
    );

    return response.data.results.slice(0, 3);
  } catch (error) {
    console.error("Error fetching movies from API:", error);
    return [];
  }
};

export default fetchMoviesFromApi;
