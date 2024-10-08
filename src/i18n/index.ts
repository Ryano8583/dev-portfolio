import { createI18n } from "vue-i18n";

import { datetimeFormats } from "./datetimeFormats";
import initLocale from "./initLocale";

export default (fallbackLocale: string, supportedLocales: string[]) =>
  createI18n({
    fallbackLocale: fallbackLocale,
    legacy: false,
    locale: initLocale(fallbackLocale, supportedLocales),
    datetimeFormats,
  });
