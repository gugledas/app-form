<template lang="html">
  <div>
    <b-row class="mb-3">
      <b-col sm="12">
        <compositeHeaderField :field="fields"></compositeHeaderField>
        <!--
        <b-form-group label="Label" invalid-feedback="Name is required">
          <b-input-group>
            <b-form-input
              v-model="fields.label"
              @input="input"
              required
            ></b-form-input>
            <b-form-input
              required
              v-model="fields.name"
              :readonly="readonly"
              @dblclick="toogleReadOnly"
            ></b-form-input>
          </b-input-group>
        </b-form-group>
      -->
      </b-col>
    </b-row>
    <ValidationFields :field="fields"></ValidationFields>
  </div>
</template>

<script>
import ValidationFields from "../EditsFields/ValidationFields";
export default {
  name: "InputText",
  props: {
    fields: {
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
    compositeHeaderField: () =>
      import("../EditsFields/compositeHeaderField.vue"),
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
        return (this.fields.value = this.value);
      }
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
