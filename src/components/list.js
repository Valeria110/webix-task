import { listData } from "../model/listData.js";

export const list = {
  css: {
    "background-color": "#e6e6e6",
  },
  rows: [
    {
      view: "list",
      width: 200,
      css: "webix_shadow_medium list",
      select: true,
      template: "#value#",
      data: listData,
      borderless: true,
      scroll: false,
    },
    {},
    {
      template: "✔ Connected",
      autoheight: true,
      css: "connected",
      borderless: true,
    },
  ],
};
