import { useParams } from "react-router-dom";
import useMovieDetail from "../../hooks/useMovieDetail";
import BackButton from "../../components/Buttons/BackButton";
import MovieBasicInfo from "./MovieBasicInfo";

function MovieDetail() {
  const { id } = useParams();
  const { movie, loading } = useMovieDetail(id);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-2xl">Loading...</p>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-2xl">Movie not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="relative h-[50vh]">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
      </div>
      <div className="container mx-auto px-4 -mt-24 relative z-10">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4 underline decoration-her-red text-white">
              {movie.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-white">
              <MovieBasicInfo
                movie={movie}
                showOverview={true}
                showRuntime={true}
                showVoteCount={false}
              />
            </div>
            <h2 className="text-3xl font-semibold mb-2 text-white">Genres</h2>
            <div className="flex flex-wrap gap-2">
              {movie.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="bg-her-red text-black px-3 py-1 rounded-full text-sm font-semibold">
                  {genre.name}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8">
          <BackButton />
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
