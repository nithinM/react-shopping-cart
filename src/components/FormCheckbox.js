import React from "react";

const FormCheckbox = ({ field, state, error, label, onChange, className }) => (
  <div className="c-field__input-wraper">
    <div className={`c-field__checkbox ${className}`}>
      <input
        className="c-field__checkbox-input"
        name={field}
        id={field}
        type="checkbox"
        onChange={onChange}
        checked={state !== false}
      />
      <label className="c-field__checkbox-label" htmlFor={field}>
        {label}
      </label>
    </div>
  </div>
);

export default FormCheckbox;
