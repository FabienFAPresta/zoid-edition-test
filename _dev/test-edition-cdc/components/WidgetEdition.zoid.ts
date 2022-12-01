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

export const AppEditionZoidLocal = zoid.create({
  tag: "app-edition-local",
  url: "http://localhost:5174/",
  dimensions: {
    width: "100%",
    height: "300px",
  },
});

export const WidgetEditionZoidLocal = zoid.create({
  tag: "widget-edition-local",
  url: "http://localhost:5174/widget",
  dimensions: {
    width: "100%",
    height: "300px",
  },
});

export const ExampleEditionZoidLocal = zoid.create({
  tag: "example-edition-local",
  url: "http://localhost:5174/example",
  dimensions: {
    width: "100%",
    height: "300px",
  },
});