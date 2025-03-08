export const header = {
  padding: 20,
  autoheight: true,
  css: "header",
  cols: [
    {
      view: "label",
      label: "My App",
      css: "header-label",
    },
    {},
    {
      cols: [
        { view: "icon", icon: "wxi-user" },
        {
          view: "button",
          value: "Profile",
          css: "webix_transparent profile-btn",
          autowidth: true,
          autoheight: true,
        },
      ],
    },
  ],
};
