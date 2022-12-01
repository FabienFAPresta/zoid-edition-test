import { createApp } from "vue";
import App from "./App.vue";
import { WidgetEditionZoid, WidgetEditionZoidLocal } from "test-edition-cdc";
import "prestakit/dist/css/bootstrap-prestashop-ui-kit.css";

const app = createApp(App);
app.component("widget-edition-zoid", WidgetEditionZoid.driver("vue3"));
app.component(
  "widget-edition-zoid-local",
  WidgetEditionZoidLocal.driver("vue3")
);
app.mount("#app");
