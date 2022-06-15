import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../../../../contexts/ThemeContext";

export default function ThemeButton() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const themeToggle = () => {
    setDarkMode((curr) => !curr);
  };

  return (
    <button
      className="app__dark-mode-btn icon level-right"
      onClick={themeToggle}
    >
      <FontAwesomeIcon className="icon-sun" icon={darkMode ? faSun : faMoon} />
    </button>
  );
}
