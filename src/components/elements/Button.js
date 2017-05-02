import React from "react";

const Button = ({ buttonType, buttonText, onClick }) => (
  <button
    className={`btn btn-${buttonType}`}
    onClick={onClick}
    name={buttonText}
  >
    {buttonText}
  </button>
);

Button.defaultProps = {
  buttonType: "default"
};

export default Button;
