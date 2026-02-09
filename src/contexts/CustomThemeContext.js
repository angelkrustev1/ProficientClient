import { createContext } from "react";

export const CustomThemeContext = createContext({
    theme: {},
    changeCustomThemeHandler: () => null,
    resetDefaultTheme: () => null,
})