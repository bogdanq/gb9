import { createContext, useCallback, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material";

const defaultValue = "default value";

export const ThemeContext = createContext(defaultValue);

const themes = {
  dark: {
    color: "#000",
  },
  light: {
    color: "#fff",
  },
};

const themeMUI = {
  dark: createTheme({
    palette: {
      primary: {
        main: "#0000",
      },
    },
  }),
  light: createTheme({
    palette: {
      primary: {
        main: "#ff0000",
      },
    },
  }),
};

export const CustomThemeProvider = ({ children, initialTheme = "light" }) => {
  const [theme, setTheme] = useState({
    theme: themes[initialTheme],
    name: initialTheme,
  });

  const themeSetter = useCallback((name) => {
    if (themes[name]) {
      setTheme({
        name,
        theme: themes[name],
      });
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, themeSetter }}>
      <ThemeProvider theme={themeMUI[theme.name]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
