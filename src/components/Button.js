import React from "react";
import PropTypes from "prop-types";

const Button = ({ type, text, classN, onClickFn }) => (
  <button type={type} className={classN} onClick={onClickFn}>
    {text}
  </button>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  classN: PropTypes.string.isRequired,
  onClickFn: PropTypes.func
};

Button.defaultTypes = {
  // type: "",
  // text: "",
  // classN: "",
  onClickFn: () => {}
};
export default Button;
