import * as zoid from "zoid/dist/zoid.frameworks";

export const WidgetEditionZoid = zoid.create({
  tag: "widget-edition",
  url: "http://localhost:5173",
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
