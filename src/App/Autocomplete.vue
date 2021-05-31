<template>
  <div>
    <div>
      <multiselect
        v-model="value.value"
        :options="options"
        :custom-label="nameWithLang"
        placeholder=""
        label="name"
        track-by="name"
        :show-no-results="false"
        :showLabels="false"
      >
        <template slot="noResult">
          <span class="option__titl d-none">no body</span></template
        >
        <template slot="placeholder">
          <span class="option__title"
            >Code postal ou nom de la vialle</span
          ></template
        >
        <template slot="noOptions">
          <span class="option__title">aea</span></template
        >
      </multiselect>
    </div>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";

export default {
  props: {
    value: {
      type: Object,
      default: function () {
        return { value: "" };
      },
    },
  },
  components: {
    Multiselect,
  },
  data() {
    return {
      options: [
        { name: "Vue.js", language: "JavaScript" },
        { name: "Rails", language: "Ruby" },
        { name: "Sinatra", language: "Ruby" },
        { name: "Laravel", language: "PHP" },
        { name: "Phoenix", language: "Elixir" },
        { name: "Sinatra", language: "Ruby" },
        { name: "Laravel", language: "PHP" },
        { name: "Phoenix", language: "Elixir" },
      ],
    };
  },
  methods: {
    nameWithLang({ name, language }) {
      return `${name} — [${language}]`;
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style></style>
