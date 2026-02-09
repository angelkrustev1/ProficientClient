import { useState } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import bulgarian from "../languages/bulgarian";

export default function LanguageProvider({
    children,
}) {
    const [language, setLanguage] = useState(bulgarian)
    const languageChangeHandler = (newLanguage) => setLanguage(newLanguage)
    const languageResetDefaultHandler = () => setLanguage(bulgarian)

    return (
        <LanguageContext.Provider value={{ language, languageChangeHandler, languageResetDefaultHandler }}>
            {children}
        </LanguageContext.Provider>
    );
}