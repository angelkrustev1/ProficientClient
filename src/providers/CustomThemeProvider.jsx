import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CustomThemeContext } from "../contexts/CustomThemeContext";
import themes from "../themes/themes";
import usePersistedState from "../hooks/usePersistedState";

export default function CustomThemeProvider({ children }) {
  // store only "light" / "dark"
  const [themeName, setThemeName] = usePersistedState("themeName", "light");

  const themeOptions = themes[themeName] ?? themes.light;
  const customTheme = createTheme(themeOptions);

  const changeCustomThemeHandler = (newThemeName) => setThemeName(newThemeName);
  const resetDefaultTheme = () => setThemeName("light");

  return (
    <CustomThemeContext.Provider
      value={{ themeName, customTheme, changeCustomThemeHandler, resetDefaultTheme }}
    >
      <ThemeProvider theme={customTheme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
}
