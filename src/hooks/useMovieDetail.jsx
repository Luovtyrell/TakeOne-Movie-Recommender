import { useState, useEffect } from 'react';
import { fetchMovieDetails } from '../services/movieServices';

const useMovieDetail = (movieId) => {
  const [state, setState] = useState({ movie: null, loading: true });

  useEffect(() => {
    const fetchMovie = async () => {
      if (movieId) {
        setState((prevState) => ({ ...prevState, loading: true }));
        const movieData = await fetchMovieDetails(movieId);
        setState({ movie: movieData, loading: false });
      }
    };

    fetchMovie();
  }, [movieId]);

  return state;
};

export default useMovieDetail;