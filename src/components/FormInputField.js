import React from "react";

const FormInputField = ({
  field,
  inputType,
  state,
  error,
  label,
  onChange
}) => (
  <div className="c-field__input-wrapper">
    <label
      className={`c-field__label ${
        state ? "c-field__label--not-empty" : ""
      } ${error && " c-field__label--error"}`}
      htmlFor={field}
    >
      {label}
    </label>
    <input
      className={`c-field__input ${
        state ? "c-field__input--not-empty" : ""
      } ${error && " c-field__input--error"}`}
      id={field}
      type={inputType}
      name={field}
      placeholder={label}
      onChange={onChange}
      value={state}
    />
    {error && (
      <span className="c-field__help-text c-field__help-text--error">
        {error}
      </span>
    )}
  </div>
);

export default FormInputField;
