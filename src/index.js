import { datatable } from "./components/datatable.js";
import { form } from "./components/form.js";
import { header } from "./components/header.js";
import { list } from "./components/list.js";

webix.ui.fullScreen();
webix.ready(function () {
  webix.ui({
    container: "container",
    rows: [
      header,
      {
        cols: [list, { view: "resizer" }, datatable, form],
      },
      {
        template: `<p style="margin-left: auto; margin-right: auto;">The software is provided by <a href="https://webix.com" target="_blank">https://webix.com</a>. 
                       All rights reserved (c)</p>`,
        css: "footer",
        autoheight: true,
        autowidth: true,
      },
    ],
  });
});
