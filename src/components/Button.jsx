//  ./components/Button.jsx
import React, { useContext } from "react";
import { ThemeContext } from "../themes/ThemeContext";

const Button = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="toggle-button">
      Switch to {theme === "light" ? "dark" : "light"} mode
    </button>
  );
};

export default Button;
