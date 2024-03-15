import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import './index'; 

const App: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
      {/* Your component content */}
      TEST
      <button onClick={toggleTheme}>Toggle Theme</button> 
    </div>
  );
};

export default App;
