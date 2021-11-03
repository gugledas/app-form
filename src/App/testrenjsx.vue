<script>
export default {
  name: "CardsJSXTest",
  functional: true,
  props: {
    multiline: Boolean,
    name: String,
    value: String,
  },
  render(createElement) {
    var self = this;
    const input = createElement("b-form-input", {
      props: {
        type: "text",
      },
      on: {
        input: function (e) {
          self.$emit("ev_select_project", e);
        },
      },
    });
    const g = createElement(
      "h2",
      {
        on: {
          click: function () {
            self.$emit("click_h2", "kk888");
          },
        },
      },
      ["kksa888 ?????", input]
    );
    return g;
  },
};
</script>
