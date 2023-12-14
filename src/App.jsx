import React from "react";
import { ThemeContext, themes } from "./contexts/ThemeContext";
import TogglerTheme from "./components/TogglerTheme/TogglerTheme";

const App = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme, setTheme }) => (
        <div className="container">
          <TogglerTheme
            onChange={() => {
              if (theme === themes.light) setTheme(themes.dark)
              if (theme === themes.dark) setTheme(themes.light)
            }}
            value={theme === themes.dark}
          />
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

export default App;
