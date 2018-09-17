import React from "react";
import PropTypes from "prop-types";
import buttonWrapper from "../hoc/buttonWrapper";

const Button = ({ classes, text }) => (
  <button type="button" className={classes} aria-label="props.ariaLabel">
    {text}
  </button>
);

Button.propTypes = {
  classes: PropTypes.string,
  text: PropTypes.string
};

Button.defaultProps = {
  classes: null,
  text: null
};

export default buttonWrapper(Button);
