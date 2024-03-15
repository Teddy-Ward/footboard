import React, { useContext } from "react";
import { ThemeContext } from "./components/theme/ThemeContext";
import Header from "components/common/Header";
import Footer from "components/common/Footer";
import ThemeWrapper from "./components/theme/ThemeWrapper"; 

const App: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <ThemeWrapper> 
      <Header />

      <Footer theme={theme} toggleTheme={toggleTheme} />
    </ThemeWrapper> 
  );
};

export default App;