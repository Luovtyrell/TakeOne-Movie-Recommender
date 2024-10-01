import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import MovieBasicInfo from "../MovieDetails/MovieBasicInfo";

function MovieCardHover({ movie }) {
  return (
    <li className="group">
      <Link to={`/movie/${movie.id}`} className="block">
        <div className="relative overflow-hidden rounded-lg aspect-[2/3]">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-200 group-hover:opacity-25"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-200 group-hover:opacity-100 p-4 space-y-2">
            <h1 className="text-center text-4xl text-her-red font-bold">
              {movie.title}
            </h1>
            <MovieBasicInfo
              movie={movie}
              showOverview={false}
              showRuntime={false}
              showVoteCount={true}
            />
          </div>
        </div>
      </Link>
    </li>
  );
}

MovieCardHover.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    vote_count: PropTypes.number.isRequired,
    overview: PropTypes.string,
  }).isRequired,
};

export default MovieCardHover;
