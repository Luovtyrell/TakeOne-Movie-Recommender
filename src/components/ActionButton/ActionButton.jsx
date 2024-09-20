import React from "react";
import PropTypes from "prop-types";

function ActionButton({
  onClick,
  disabled = false,
  size = "btn-md",
  children,
  className = "",
}) {
  return (
    <button
      className={`btn ${size} ${className}`}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </button>
  );
}

ActionButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["btn-sm", "btn-md", "btn-lg"]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default React.memo(ActionButton);
