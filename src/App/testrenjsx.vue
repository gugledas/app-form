<script>
export default {
  name: "CardsJSXTest",
  functional: true,
  props: {
    multiline: Boolean,
    name: String,
    value: String,
  },
  render(createElement, context) {
    var self = this;
    console.log("context : ", context);
    const input = createElement("b-form-input", {
      props: {
        type: "text",
      },
      on: {
        input: function (e) {
          self.$emit("ev_select_project", e);
          console.log(" Vue instance : ", self.$emit);
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
          ev_select_project: function () {
            alert("ev_select_project");
          },
        },
      },
      ["kksa888 ?????", input]
    );
    return g;
  },
};
</script>
