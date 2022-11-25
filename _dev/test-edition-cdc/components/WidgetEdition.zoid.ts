import * as zoid from "zoid/dist/zoid.frameworks";

export var WidgetEditionZoid = zoid.create({
  tag: "widget-edition",
  url: "http://localhost:5173",
  dimensions: {
    width: "400px",
    height: "200px",
  },
  // props: {
  //   name: {
  //     type: String,
  //     required: true,
  //   },
  // },
});
