import { createContext } from "react";

type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
};

const defaultThemeContext: ThemeContextType = {
  theme: "dark",
  setTheme: () => {},
};

const ThemeContext = createContext<ThemeContextType>(defaultThemeContext);

export type { ThemeContextType };
export default ThemeContext;