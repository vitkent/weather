import React from "react";
import './TogglerTheme.scss'

const TogglerTheme = ({ value, onChange }) => {
  return (
    <div className="toggler-theme">
      <input
        id="togglerTheme"
        className="toggler-theme__input"
        type="checkbox"
        checked={value}
        onChange={onChange}
      />
      <label className="toggler-theme__label" htmlFor="togglerTheme"></label>
      <span className="toggler-theme__name extrabold">{ value ?  "Dark Mode" : "Light Mode" }</span>
    </div>
  )
}

export default TogglerTheme;
