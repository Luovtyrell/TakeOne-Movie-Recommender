import { useParams } from "react-router-dom";
import useMovieDetail from "../../hooks/useMovieDetail";
import BackButton from "../../components/Buttons/BackButton";
import MovieBasicInfo from "./MovieBasicInfo";
import Loading from "../InfoUI/Loading";
import Error from "../InfoUI/Error";

function MovieDetail() {
  const { id } = useParams();
  const { movie, loading, director, genreElements } = useMovieDetail(id);

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  if (!movie) {
    return (
      <>
        <Error message="Movie not found" />
      </>
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
            <div className="flex flex-wrap gap-2 mb-6">{genreElements}</div>
            <h2 className="text-3xl font-semibold mb-2 text-white">
              Directed by
            </h2>
            <div className="flex items-center mb-6">
              {director?.profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w500${director.profile_path}`}
                  alt={director.name}
                  className="w-11 h-15 mr-3 rounded-full"
                />
              )}
              <p className="text-sm font-bold bg-her-red text-black p-1">
                {director?.name || "Unknown"}
              </p>
            </div>
            <h2 className="text-3xl font-semibold mb-2 text-white">Cast</h2>
            <div className="carousel rounded-box">
              {movie.credits.cast.slice(0, 10).map((actor) => (
                <div key={actor.id} className="carousel-item relative">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                    alt={actor.name}
                    className="h-60 w-auto object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-2">
                    <p className="text-sm text-center font-bold bg-her-red text-black h-6 flex items-center justify-center">
                      {actor.name}
                    </p>
                    <p className="text-white font-bold text-xs bg-black text-center h-6 flex items-center justify-center">
                      {actor.character}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 mb-4">
          <BackButton />
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
