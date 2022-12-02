import { createApp } from "vue";
import App from "./App.vue";
import {
  WidgetEditionZoid,
  AppEditionZoidLocal,
  WidgetEditionZoidLocal,
  ExampleEditionZoidLocal,
} from "test-edition-cdc";
import "prestakit/dist/css/bootstrap-prestashop-ui-kit.css";
import ExampleEditionVue from "./components/ExampleEdition.vue";
import WidgetEditionVue from "./components/WidgetEdition.vue";
import { createRouter, createWebHistory } from "vue-router";
import { createI18n } from "vue-i18n";
import enTrans from "./locales/en.json";
import esTrans from "./locales/es.json";
import frTrans from "./locales/fr.json";

const i18n = createI18n({
  locale: "fr",
  fallbackLocale: "en",
  messages: {
    en: enTrans,
    es: esTrans,
    fr: frTrans,
  },
});

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
  "example-edition-zoid-local",
  ExampleEditionZoidLocal.driver("vue3")
);
app.component(
  "widget-edition-zoid-local",
  WidgetEditionZoidLocal.driver("vue3")
);
app.use(router);
app.use(i18n);
app.mount("#app");
