import React from "react";
import PropTypes from "prop-types";

import classnames from "classnames";

const TextInputGroup = ({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  errors
}) => {
  return (
    <React.Fragment>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        className={classnames("form-control form control-lg", {
          "is-invalid": errors
        })}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        errors={errors}
      />
      {errors && <div className="invalid-feedback">{errors}</div>}
    </React.Fragment>
  );
};

TextInputGroup.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
};

TextInputGroup.defaultProps = {
  type: "text"
};

export default TextInputGroup;
