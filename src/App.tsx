import React, { useContext } from "react";
import { ThemeContext } from "./components/theme/ThemeContext";
import Header from "components/common/Header";
import Footer from "components/common/Footer";
import ThemeWrapper from "./components/theme/ThemeWrapper"; 

const App: React.FC = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <ThemeWrapper> 
      <Header />
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Footer />
    </ThemeWrapper> 
  );
};

export default App;