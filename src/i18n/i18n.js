// src/i18n/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/common.json";
import nl from "./locales/nl/common.json";
import es from "./locales/es/common.json";
import de from "./locales/de/common.json";
import pt from "./locales/pt/common.json";
import fr from "./locales/fr/common.json";
import zh from "./locales/zh/common.json";
import ja from "./locales/ja/common.json";
import ar from "./locales/ar/common.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: en },
      nl: { common: nl },
      es: { common: es },
      de: { common: de },
      pt: { common: pt },
      fr: { common: fr },
      zh: { common: zh },
      ja: { common: ja },
      ar: { common: ar },
    },
    lng: localStorage.getItem("lang") || "en",
    fallbackLng: "en",
    ns: ["common"],
    defaultNS: "common",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
