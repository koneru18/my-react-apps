import { useContext } from "react";
import ThemeContext, {type ThemeContextType} from "./CreateThemeContext";

const ChangeTheme = () => {
  const { theme, setTheme } = useContext<ThemeContextType>(ThemeContext);

  const handleOnclick = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  }

  return (
    <>
      <p>Theme: {theme}</p>
      <button onClick={handleOnclick}>
        Change Theme
      </button>
    </>
  );
};

export default ChangeTheme;