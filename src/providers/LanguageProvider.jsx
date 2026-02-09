import { LanguageContext } from "../contexts/LanguageContext";
import bulgarian from "../languages/bulgarian";
import usePersistedState from "../hooks/usePersistedState";

export default function LanguageProvider({
    children,
}) {
    const [language, setLanguage] = usePersistedState('lang', bulgarian)
    const languageChangeHandler = (newLanguage) => setLanguage(newLanguage)
    const languageResetDefaultHandler = () => setLanguage(bulgarian)

    return (
        <LanguageContext.Provider value={{ language, languageChangeHandler, languageResetDefaultHandler }}>
            {children}
        </LanguageContext.Provider>
    );
}