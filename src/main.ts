import { createApp } from "vue";
import App from "./App.vue";
//import WidgetEditionZoid from "./zoid/components/WidgetEdition.zoid";

const app = createApp(App);
//app.component("widget-edition", WidgetEditionZoid.driver("vue3"));
app.mount("#app");
