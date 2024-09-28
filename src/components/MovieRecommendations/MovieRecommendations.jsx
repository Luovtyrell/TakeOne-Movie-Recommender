import useMood from "../../hooks/useMood";
import useMovies from "../../hooks/useMovies";
import { RotateCw, Star, Calendar, ThumbsUp } from "lucide-react";
import BackButton from "../BackButton/BackButton";

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
                <li key={movie.id} className="group">
                  <div className="relative overflow-hidden rounded-lg aspect-[2/3]">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-200 group-hover:opacity-25"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-200 group-hover:opacity-100 p-4 space-y-2">
                      <h1 className="text-center text-white text-3xl font-bold">
                        {movie.title}
                      </h1>
                      <div className="flex space-x-4">
                        <h2 className="text-white flex items-center text-lg">
                          <Calendar size={15} className="mr-1 text-her-red" />
                          {new Date(movie.release_date).getFullYear()}
                        </h2>
                        <h2 className="text-white flex items-center text-lg">
                          <Star size={15} className="mr-1 text-yellow-400" />{" "}
                          {movie.vote_average.toFixed(2)}
                        </h2>
                        <h2 className="text-white flex items-center text-lg">
                          <ThumbsUp size={15} className="mr-1 text-sky-400" />{" "}
                          {movie.vote_count}
                        </h2>
                      </div>
                      <p className="text-justify text-xs">{movie.overview}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No movies found for this mood.</p>
          )}
          <button
            onClick={fetchMovies}
            className="btn mt-4 flex items-center btn-neutral">
            <RotateCw className="text-her-red" />
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
