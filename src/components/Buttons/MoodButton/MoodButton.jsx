import PropTypes from "prop-types";

const MoodButton = ({ mood, onClick }) => (
  <button className="btn btn-sm" onClick={() => onClick(mood)}>
    {mood}
  </button>
);

MoodButton.propTypes = {
  mood: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MoodButton;
