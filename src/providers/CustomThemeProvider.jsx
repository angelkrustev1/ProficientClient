import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CustomThemeContext } from "../contexts/CustomThemeContext";
import theme from "../themes/default";

export default function CustomThemeProvider({ children }) {
    const [customTheme, setCustomTheme] = useState(theme);

    const changeCustomThemeHandler = (newTheme) => setCustomTheme(newTheme);
    const resetDefaultTheme = () => setCustomTheme(theme);

    return (
        <CustomThemeContext.Provider value={{ customTheme, changeCustomThemeHandler, resetDefaultTheme }}>
            <ThemeProvider theme={customTheme}>
                {children}
            </ThemeProvider>
        </CustomThemeContext.Provider>
    );
}