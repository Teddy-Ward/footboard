import React from "react";

interface FooterProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const Footer: React.FC<FooterProps> = ({ theme, toggleTheme }) => {
  return (
    <footer>
      <a
        href="https://tedward.net"
        target="_blank"
        rel="noreferrer"
        className="ted-link"
      >
        Design by TedWard
      </a>
      <button onClick={toggleTheme} className="theme-toggle">
        Toggle Theme ({theme})
      </button>
    </footer>
  );
};

export default Footer;
