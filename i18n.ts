import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translations for all supported languages
import enUS from "./public/locales/en-US/translation.json";
import zhCN from "./public/locales/zh-CN/translation.json";
import zhTW from "./public/locales/zh-TW/translation.json";
import es from "./public/locales/es/translation.json";
import fr from "./public/locales/fr/translation.json";
import de from "./public/locales/de/translation.json";
import ja from "./public/locales/ja/translation.json";
import ko from "./public/locales/ko/translation.json";
import pt from "./public/locales/pt/translation.json";
import ru from "./public/locales/ru/translation.json";
import ar from "./public/locales/ar/translation.json";

export const resources = {
    "en-US": {
        translation: enUS,
    },
    "zh-CN": {
        translation: zhCN,
    },
    "zh-TW": {
        translation: zhTW,
    },
    "es": {
        translation: es,
    },
    "fr": {
        translation: fr,
    },
    "de": {
        translation: de,
    },
    "ja": {
        translation: ja,
    },
    "ko": {
        translation: ko,
    },
    "pt": {
        translation: pt,
    },
    "ru": {
        translation: ru,
    },
    "ar": {
        translation: ar,
    },
};

i18n
    // Detect user's current language
    // Documentation: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // Inject react-i18next instance
    .use(initReactI18next)
    // Initialize i18next
    // Configuration options documentation: https://www.i18next.com/overview/configuration-options
    .init({
        // compatibilityJSON: "v3",
        // debug: true,
        lng: "en-US",
        fallbackLng: "en-US",
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false,
        },
        resources: resources,
    });
export default i18n;
