import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { inject } from "@vercel/analytics";

import "../dist/output.css";

const app = createApp(App);

app.use(router);

app.mount("#app");

inject();
