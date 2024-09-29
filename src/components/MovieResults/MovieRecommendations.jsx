import useMood from "../../hooks/useMood";
import useMovies from "../../hooks/useMovies";
import MovieCard from "../MovieResults/MovieCard";
import BackButton from "../Buttons/BackButton";

function MovieRecommendations() {
  const { selectedMoodData } = useMood();
  const { movies, loading, fetchMovies } = useMovies(selectedMoodData);

  return (
    <div className="container p-4">
      <h2
        className={`text-3xl mb-4 font-bold bg-gradient-to-r ${selectedMoodData.gradient} bg-clip-text text-transparent`}>
        {selectedMoodData.calm}
      </h2>
      {loading ? (
        <p>Loading movies...</p>
      ) : (
        <div>
          {movies.length ? (
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          ) : (
            <p>No movies found for this mood.</p>
          )}
          <button
            onClick={fetchMovies}
            className="btn mt-4 flex items-center btn-neutral hover:bg-her-red hover:text-black">
            Try again!
          </button>
          <div className="mb-4 mt-4">
            <BackButton />
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieRecommendations;
