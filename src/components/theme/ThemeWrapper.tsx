import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

interface ThemeWrapperProps {
  children: React.ReactNode;
}

const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme === "light" ? "light-theme" : "dark-theme"}`}>
      {children}
    </div>
  );
};

export default ThemeWrapper;
