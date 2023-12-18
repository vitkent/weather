import React from "react";
import Button from "../ui/Button/Button";
import Search from "../Search/Search";
import LocationIcon from "../icons/LocationIcon";
import TogglerTheme from "../TogglerTheme/TogglerTheme";
import { ThemeContext, themes } from "../../contexts/ThemeContext";
import './Header.scss';

const Header = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme, setTheme }) => (
        <header className="header">
          <TogglerTheme
            onChange={() => {
              if (theme === themes.light) setTheme(themes.dark)
              if (theme === themes.dark) setTheme(themes.light)
            }}
            value={theme === themes.dark}
          />
          <Search />
          <Button text="Current Location" icon={LocationIcon}/>
        </header>
      )}
    </ThemeContext.Consumer>
  )
}

export default Header;
