import type { IntlDateTimeFormat } from "vue-i18n";

export const datetimeFormats = {
  en: {
    year: {
      year: "numeric",
    },
    short: {
      year: "numeric",
      month: "long",
    },
  },
  es: {
    year: {
      year: "numeric",
    },
    short: {
      year: "numeric",
      month: "long",
    },
  },
  fr: {
    year: {
      year: "numeric",
    },
    short: {
      year: "numeric",
      month: "long",
    },
  },
  hi: {
    year: {
      year: "numeric",
    },
    short: {
      year: "numeric",
      month: "long",
    },
  },
  zh: {
    year: {
      year: "numeric",
    },
    short: {
      year: "numeric",
      month: "long",
    },
  },
} as { [x: string]: IntlDateTimeFormat };
