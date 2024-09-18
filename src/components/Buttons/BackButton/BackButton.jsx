import PropTypes from "prop-types";

const BackButton = ({ onClick }) => (
  <button className="btn btn-active max-w-min" onClick={onClick}>
    ← Back
  </button>
);

BackButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default BackButton;
