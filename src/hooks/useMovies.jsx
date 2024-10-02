import { useEffect, useState } from "react";
import fetchMoviesFromApi from "../services/movieServices";

const useMovies = (selectedMoodData) => {
  const [state, setState] = useState({ movies: [], loading: true });

  const fetchMovies = async () => {
    setState((prevState) => ({ ...prevState, loading: true }));
    const fetchedMovies = await fetchMoviesFromApi(selectedMoodData);
    setState({ movies: fetchedMovies, loading: false });
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return { ...state, fetchMovies };
};

export default useMovies;
