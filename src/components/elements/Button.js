import React from 'react'

const Button = ({buttonType, buttonText}) => (
  <button className={`btn btn-${buttonType}`}>{buttonText}</button>
)

Button.defaultProps = {
	buttonType: "default"
}

export default Button