import { create } from "zoid/dist/zoid.frameworks";

export const WidgetEditionZoid = create({
  tag: "widget-edition",
  url: "http://localhost:5173",

  props: {
    name: {
      type: String,
      required: true,
    },
  },
});
