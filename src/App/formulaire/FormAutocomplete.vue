<template lang="html">
  <div>
    <b-row class="mb-3">
      <b-col sm="12">
        <compositeHeaderField :field="field"></compositeHeaderField>
      </b-col>
    </b-row>
    <ValidationFields :field="field"></ValidationFields>
  </div>
</template>

<script>
import compositeHeaderField from "../EditsFields/compositeHeaderField.vue";
import ValidationFields from "../EditsFields/ValidationFields";
export default {
  name: "InputText",
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
    ValidationFields,
    compositeHeaderField,
  },
  data() {
    return {
      readonly: true,
      value: "",
    };
  },
  mounted() {
    //
  },
  watch: {
    //
  },
  computed: {},
  methods: {
    inputValue() {
      if (this.value.length) {
        return (this.field.value = this.value);
      }
    },
  },
};
</script>

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
