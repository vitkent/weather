import React from "react";
import './Button.scss'

const Button = ({icon, text}) => {
  const renderIcon = () => icon ? <span className="button__icon">{React.createElement(icon)}</span> : null;
  return (
    <button className="button extrabold fs22">
      {renderIcon()}
      {text}
    </button>
  )
}

export default Button;
