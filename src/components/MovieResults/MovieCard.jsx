import { Star, Calendar, ThumbsUp } from "lucide-react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
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
            <h1 className="text-center text-white text-3xl font-bold">
              {movie.title}
            </h1>
            <div className="flex space-x-4">
              <h2 className="text-white flex items-center text-lg">
                <Calendar size={15} className="mr-1 text-her-red" />
                {new Date(movie.release_date).getFullYear()}
              </h2>
              <h2 className="text-white flex items-center text-lg">
                <Star size={15} className="mr-1 text-yellow-400" />
                {movie.vote_average.toFixed(2)}
              </h2>
              <h2 className="text-white flex items-center text-lg">
                <ThumbsUp size={15} className="mr-1 text-sky-400" />
                {movie.vote_count}
              </h2>
            </div>
            <p className="text-justify text-xs">{movie.overview}</p>
          </div>
        </div>
      </Link>
    </li>
  );
}

MovieCard.propTypes = {
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

export default MovieCard;
