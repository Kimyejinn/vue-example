/* eslint-disable */
import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import stroe from "./store";

const app = createApp(App);
app.use(router).use(stroe).mount("#app");
