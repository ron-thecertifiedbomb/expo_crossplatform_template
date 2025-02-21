import React, { createContext, useContext, useState } from "react";
import { Colors } from "../Colors";



type Theme = "light" | "dark";

interface ThemeContextProps {
  theme: Theme;
  colors: typeof Colors.light; // Use the correct type based on your Colors
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light"); // Default to light

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, colors: Colors[theme], toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeColor = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeColor must be used within a ThemeProvider");
  }
  return context;
};
