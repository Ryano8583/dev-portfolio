import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";
import { fallbackLocale, supportedLocales } from "./i18n/locales";

import { inject } from "@vercel/analytics";

import "../dist/output.css";

const app = createApp(App);

app.use(router).use(i18n(fallbackLocale, supportedLocales));

app.mount("#app");

inject();
