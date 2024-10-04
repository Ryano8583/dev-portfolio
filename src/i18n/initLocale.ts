export default (fallbackLocale: string, supportedLocales: string[]) => {
  const persistedLocale = localStorage.getItem("locale");

  if (persistedLocale) {
    for (const locale of supportedLocales) {
      if (locale === persistedLocale) {
        return persistedLocale;
      }
    }
    localStorage.removeItem("locale");
  }

  const navigatorLocale = navigator.language;

  if (supportedLocales.includes(navigatorLocale)) {
    return navigatorLocale;
  }

  if (navigatorLocale.split("-").length > 1) {
    const navigatorLang = navigatorLocale.split("-")[0];

    if (supportedLocales.includes(navigatorLang)) {
      return navigatorLang;
    }
  }
  return fallbackLocale;
};
