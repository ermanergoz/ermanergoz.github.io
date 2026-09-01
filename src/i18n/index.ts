import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslations from "./locales/en.json";
import trTranslations from "./locales/tr.json";

type SupportedLanguage = "en" | "tr";

const STORAGE_KEY = "i18nextLng";
const SUPPORTED_LANGUAGES: SupportedLanguage[] = ["en", "tr"];

export function normalizeLanguage(lang: string): SupportedLanguage {
  const langCode = lang.split("-")[0].toLowerCase();
  return langCode === "tr" ? "tr" : "en";
}

function getInitialLanguage(): SupportedLanguage {
  const savedLang = localStorage.getItem(STORAGE_KEY);
  if (savedLang) {
    return normalizeLanguage(savedLang);
  }

  const browserLang =
    navigator.language ||
    (navigator as Navigator & { userLanguage?: string }).userLanguage ||
    "en";
  return normalizeLanguage(browserLang);
}

const initialLanguage = getInitialLanguage();

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      tr: { translation: trTranslations },
    },
    lng: initialLanguage,
    fallbackLng: "en",
    supportedLngs: SUPPORTED_LANGUAGES,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage"],
      caches: ["localStorage"],
      lookupLocalStorage: STORAGE_KEY,
    },
  });

if (!localStorage.getItem(STORAGE_KEY)) {
  localStorage.setItem(STORAGE_KEY, initialLanguage);
}

document.documentElement.lang = initialLanguage;

export default i18n;
