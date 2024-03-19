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
      <div onClick={toggleTheme} className="theme-toggle">
    {theme === 'light' ? (
        <img src={require("../../assets/icons/moon.svg").default} alt="Moon Icon" />
    ) : (
        <img src={require("../../assets/icons/sun.svg").default} alt="Sun Icon" />
    )}
</div>
    </footer>
  );
};

export default Footer;
