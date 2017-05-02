import React from "react";

const Button = ({ buttonType, buttonText, onClick, name }) => (
  <button
    className={`btn btn-${buttonType}`}
    onClick={onClick}
    name={name}
  >
    {buttonText}
  </button>
);

Button.defaultProps = {
  buttonType: "default"
};

export default Button;
