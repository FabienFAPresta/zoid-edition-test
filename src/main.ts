import { createApp } from "vue";
import App from "./App.vue";
import { WidgetEditionZoid } from "test-edition-cdc";

const app = createApp(App);
app.component("widget-edition-zoid", WidgetEditionZoid.driver("vue3"));
app.mount("#app");
