import { useEffect, useState } from "react";
import { fetchMovieDetails } from "../services/movieServices";

const useMovieDetail = (movieId) => {
  const [state, setState] = useState({
    movie: null,
    loading: true,
    error: null,
    director: null,
    genres: [],
    genreElements: [],
  });

  useEffect(() => {
    const fetchMovie = async () => {
      if (movieId) {
        setState({
          movie: null,
          loading: true,
          error: null,
          director: null,
          genres: [],
          genreElements: [],
        });
        try {
          const movieData = await fetchMovieDetails(movieId);
          const director = movieData.credits.crew.find(
            (member) => member.job === "Director"
          );
          const genres = movieData.genres;

          const genreElements = genres.map((genre) => (
            <span
              key={genre.id}
              className="bg-her-red text-black px-3 py-1 rounded-full text-sm font-semibold">
              {genre.name}
            </span>
          ));

          setState({
            movie: movieData,
            loading: false,
            error: null,
            director,
            genres,
            genreElements,
          });
        } catch {
          setState({
            movie: null,
            loading: false,
            error: "Error fetching movie details",
            director: null,
            genres: [],
            genreElements: [],
          });
        }
      }
    };

    fetchMovie();
  }, [movieId]);

  return state;
};

export default useMovieDetail;
