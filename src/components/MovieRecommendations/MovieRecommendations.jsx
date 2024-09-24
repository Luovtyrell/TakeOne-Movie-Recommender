import useMood from "../../hooks/useMood";
import useMovies from "../../hooks/useMovies";

function MovieRecommendations() {
  const { selectedMoodData } = useMood();
  const { movies, loading, fetchMovies } = useMovies(selectedMoodData);

  return (
    <div className="p-4 container">
      <h2 className="text-2xl font-semibold mb-2">Additional Filters</h2>
      <p className="text-lg">
        I am... <span className="font-bold">{selectedMoodData.type}</span>
      </p>
      {loading ? (
        <p>Loading movies...</p>
      ) : (
        <div>
          {movies.length ? (
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {movies.map((movie) => (
                <li key={movie.id} className="flex flex-col items-center">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="rounded-lg mb-2"
                  />
                  <p className="text-center">{movie.title}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No movies found for this mood.</p>
          )}
          <button onClick={fetchMovies} className="mt-4 btn">
            Try again!
          </button>
        </div>
      )}
    </div>
  );
}

export default MovieRecommendations;
