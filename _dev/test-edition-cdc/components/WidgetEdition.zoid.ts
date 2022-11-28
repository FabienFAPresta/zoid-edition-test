import * as zoid from "zoid/dist/zoid.frameworks";

export const WidgetEditionZoid = zoid.create({
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

export const WidgetEditionZoidLocal = zoid.create({
  tag: "widget-edition-local",
  url: "http://localhost:5174/",
  dimensions: {
    width: "100%",
    height: "300px",
  },
});
