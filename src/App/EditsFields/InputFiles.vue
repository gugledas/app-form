<template lang="html">
  <div>
    <b-row class="mb-3">
      <b-col sm="12">
        <compositeHeaderField :field="field"></compositeHeaderField>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import compositeHeaderField from "./compositeHeaderField.vue";
export default {
  name: "InputFiles",
  props: {
    field: {
      type: Object,
      required: true,
      validator: function (val) {
        return val.label === undefined ||
          val.value === undefined ||
          val.name === undefined ||
          val.require === undefined
          ? false
          : true;
      },
    },
  },
  components: {
    compositeHeaderField,
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
    //
  },
  methods: {
    //
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
