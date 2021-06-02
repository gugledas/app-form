<template lang="html">
  <div :object="validationObserverField">
    <pre class="text-left d-none">{{ formDatasValidate }}</pre>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "getStatusValidation",
  props: {
    validationObserver: {
      type: Object,
      required: true,
    },
  },
  components: {
    //
  },
  data() {
    return {
      //
    };
  },
  mounted() {
    //
  },
  watch: {
    //
  },
  computed: {
    ...mapState(["formDatasValidate"]),
    validationObserverField() {
      if (this.validationObserver.fields) {
        this.setFormDatasValidate();
        return this.validationObserver.fields;
      } else {
        return {};
      }
    },
  },
  methods: {
    setFormDatasValidate() {
      this.$store.dispatch(
        "setFormDatasValidate",
        this.validationObserver.fields
      );
    },
  },
};
</script>

<style lang="scss" scoped></style>

<!--
 //nom du fichier en pascal.
 //<template>
 - le nom des attributs en kebab-case;
 - la valeur des attributs et des variables en camelCase;
 - function en PascalCase
 //props, data
 - variable en camelCase
 //methods
 - variable en PascalCase
-->
