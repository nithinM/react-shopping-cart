import React from "react";
import { Number, Cvc, Expiration } from "react-credit-card-primitives";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";

const CreditCardInputs = ({
  name,
  placeholder,
  id,
  value,
  valid,
  getInputProps,
  errorMessage,
  inputFieldIconClass,
  iconClass,
  tooltip
}) => {
  const inputClasses = `c-field__input ${
    value ? "c-field__input--not-empty" : ""
  } ${errorMessage && "c-field__input--error"} ${inputFieldIconClass &&
    inputFieldIconClass}`;
  const labelClasses = `c-field__label ${
    value ? "c-field__label--not-empty" : ""
  } ${errorMessage && "c-field__label--error"}`;
  const inputProps = {
    ...getInputProps(),
    name,
    placeholder,
    className: inputClasses,
    id
  };
  return (
    <div className="c-field__input-wrapper">
      <label htmlFor={name} className={labelClasses}>
        {placeholder}
      </label>
      <input {...inputProps} />
      {tooltip && inputFieldIconClass ? (
        <div className={`c-field__icon-holder ${iconClass}`}>
          <Tooltip
            position="top"
            arrow="true"
            arrowType="round"
            size="small"
            animation="shift"
            html={<div style={{ width: 100 }}>{tooltip}</div>}
            maxWidth="50px"
            target=".c-field__icon-holder"
          >
            <div className="c-field__icon-holder-tooltip" />
          </Tooltip>
        </div>
      ) : (
        inputFieldIconClass && (
          <div className={`c-field__icon-holder ${iconClass}`} />
        )
      )}
      {errorMessage && (
        <span className="c-field__help-text c-field__help-text--error">
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default CreditCardInputs;
