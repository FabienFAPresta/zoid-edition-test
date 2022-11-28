import { create } from "zoid/dist/zoid";

export const WidgetEditionZoid = create({
  tag: "widget-edition",
  url: "https://fabienfapresta.github.io/zoid-edition-test/",
  dimensions: {
    width: "500px",
    height: "500px",
  },
  // props: {
  //   name: {
  //     type: String,
  //     required: true,
  //   },
  // },
});
