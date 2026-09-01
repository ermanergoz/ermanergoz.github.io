import { useTranslation } from "react-i18next";
import { useCallback, useEffect } from "react";
import { normalizeLanguage } from "../i18n";

export function useLanguage() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = normalizeLanguage(i18n.language || "en");
  }, [i18n.language]);

  const toggleLanguage = useCallback(() => {
    const currentLang = normalizeLanguage(i18n.language || "en");
    const newLang = currentLang === "tr" ? "en" : "tr";
    i18n.changeLanguage(newLang);
  }, [i18n]);

  return { toggleLanguage } as const;
}
