import { StrictMode } from "react";
import { BrowserRouter } from "react-router";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CustomThemeProvider from "./providers/CustomThemeProvider.jsx";
import LanguageProvider from "./providers/LanguageProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CustomThemeProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </CustomThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
