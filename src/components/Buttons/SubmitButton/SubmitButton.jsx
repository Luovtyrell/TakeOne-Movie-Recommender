import PropTypes from "prop-types";

const SubmitButton = ({ onClick, disabled }) => (
  <button
    className="btn wide w-full mt-4"
    onClick={onClick}
    disabled={disabled}>
    Submit
  </button>
);

SubmitButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default SubmitButton;
