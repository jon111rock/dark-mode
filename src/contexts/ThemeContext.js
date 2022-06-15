import React, { createContext, useState } from "react";
import "../styles/_dark-mode.scss";

export const ThemeContext = createContext();

export function ThemeProvider(props) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={`${darkMode ? "dark-mode" : ""} `}>{props.children}</div>
    </ThemeContext.Provider>
  );
}
