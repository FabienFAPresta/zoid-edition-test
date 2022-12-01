import { createApp } from "vue";
import App from "./App.vue";
import { WidgetEditionZoid, WidgetEditionZoidLocal } from "test-edition-cdc";
import "prestakit/dist/css/bootstrap-prestashop-ui-kit.css";
import ExampleEditionVue from "./components/ExampleEdition.vue";
import WidgetEditionVue from "./components/WidgetEdition.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: WidgetEditionVue },
  { path: "/widget", component: WidgetEditionVue },
  { path: "/example", component: ExampleEditionVue },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.component("widget-edition-zoid", WidgetEditionZoid.driver("vue3"));
app.component(
  "widget-edition-zoid-local",
  WidgetEditionZoidLocal.driver("vue3")
);
app.use(router);
app.mount("#app");
