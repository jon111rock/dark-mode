import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

export default function ThemeButton() {
  return (
    <button className="app__dark-mode-btn icon level-right">
      <FontAwesomeIcon icon={faMoon} />
    </button>
  );
}
