import { small_film_set } from "../model/testdata.js";

export const datatable = {
  view: "datatable",
  id: "datatable",
  autoConfig: true,
  css: "webix_shadow_medium datatable",
  data: small_film_set,
  select: true,
  on: {
    onAfterSelect: function (id) {
      let values = this.getItem(id);
      $$("filmForm").setValues(values);
    },
  },
};
