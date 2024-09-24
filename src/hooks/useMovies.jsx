import { useEffect, useState } from "react";
import fetchMoviesFromApi from "../services/movieServices";

const useMovies = (selectedMoodData) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovies = async () => {
    setLoading(true);
    const fetchedMovies = await fetchMoviesFromApi(selectedMoodData);
    setMovies(fetchedMovies);
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return { movies, loading, fetchMovies };
};

export default useMovies;
