import { useState } from 'react'
import './App.css'
import ThemeContext from './Theme/CreateThemeContext';
import AppRoutes from './Routes/AppRoutes';

const App = () => {
  const [theme, setTheme] = useState("dark");

  return(
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <AppRoutes />
    </ThemeContext.Provider>
  )
};

export default App;