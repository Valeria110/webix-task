export const form = {
  view: "form",
  id: "filmForm",
  width: 300,
  css: "webix_shadow_medium",
  elements: [
    {
      type: "section",
      template: "EDIT FILMS",
      css: { background: "white" },
    },

    { view: "text", name: "title", label: "Title" },
    { view: "text", name: "year", label: "Year" },
    { view: "text", name: "rating", label: "Rating" },
    { view: "text", name: "votes", label: "Votes" },
    {
      margin: 10,
      cols: [
        {
          view: "button",
          value: "Add new",
          css: "webix_primary",
          click: function () {
            let newFilmdata = $$("filmForm").getValues();
            const lastFilmRank = $$("datatable").getItem(
              $$("datatable").getLastId()
            ).rank;
            newFilmdata.id = webix.uid();
            newFilmdata.rank = lastFilmRank + 1;

            $$("datatable").add(newFilmdata);
            $$("filmForm").clear();
          },
        },
        {
          view: "button",
          value: "Clear",
          css: "webix_danger",
          click: function () {
            $$("filmForm").clear();
          },
        },
      ],
    },
  ],
};
