import { useContext } from "react"
import { LanguageContext } from "../contexts/LanguageContext"

export default function useLanguage() {
    const { language } = useContext(LanguageContext);

    return language;
}