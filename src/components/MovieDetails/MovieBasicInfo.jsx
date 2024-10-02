import { Star, Calendar, Clock, ThumbsUp } from "lucide-react";
import PropTypes from "prop-types";

function MovieBasicInfo({
  movie,
  showOverview = false,
  showRuntime = false,
  showVoteCount = true,
}) {
  if (!movie) {
    return null;
  }

  return (
    <div className="text-white">
      <div className="flex flex-wrap items-center gap-4 mb-4">
        {movie.release_date && (
          <span className="flex items-center">
            <Calendar size={15} className="mr-2 text-lime-300" />
            {new Date(movie.release_date).getFullYear()}
          </span>
        )}
        {movie.vote_average !== undefined && (
          <span className="flex items-center">
            <Star size={15} className="mr-2 text-amber-400" />
            {movie.vote_average.toFixed(1)}
          </span>
        )}
        {showRuntime && movie.runtime && (
          <span className="flex items-center">
            <Clock size={15} className="mr-2 text-cyan-300" />
            {movie.runtime} min
          </span>
        )}
        {showVoteCount && movie.vote_count !== undefined && (
          <span className="flex items-center">
            <ThumbsUp size={15} className="mr-2 text-blue-400" />
            {movie.vote_count}
          </span>
        )}
      </div>
      {showOverview && movie.overview && (
        <p className="text-lg mb-3 text-neutral-200">{movie.overview}</p>
      )}
    </div>
  );
}

MovieBasicInfo.propTypes = {
  movie: PropTypes.shape({
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    runtime: PropTypes.number,
    vote_count: PropTypes.number,
    overview: PropTypes.string,
  }),
  showOverview: PropTypes.bool,
  showRuntime: PropTypes.bool,
  showVoteCount: PropTypes.bool,
};

export default MovieBasicInfo;
