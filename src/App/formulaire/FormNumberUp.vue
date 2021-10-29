<template lang="html">
  <div>
    <b-row class="mb-3">
      <b-col sm="12">
        <b-form-group label="Label">
          <b-input-group>
            <b-form-input
              id="label-up"
              v-model="field.label"
              @input="input"
              required
            ></b-form-input>
            <b-form-input
              required
              v-model="field.name"
              :readonly="readonly"
              @dblclick="toogleReadOnly"
            ></b-form-input>
          </b-input-group>
        </b-form-group>
      </b-col>
      <b-col sm="12">
        <b-form-group label="Valeur par defaut">
          <b-form-input v-model="field.value" type="number"></b-form-input>
        </b-form-group>
      </b-col>
      <b-col sm="6">
        <b-form-group label=" suffixe">
          <b-input-group>
            <!-- <b-form-input v-model="prefixe" id="prefixe"></b-form-input> -->
            <b-form-input v-model="field.suffixe" id="suffixe"></b-form-input>
          </b-input-group>
        </b-form-group>
      </b-col>
    </b-row>
    <ValidationFields :field="field"></ValidationFields>
  </div>
</template>

<script>
import { snakeCase } from "snake-case";
import ValidationFields from "../EditsFields/ValidationFields";
export default {
  name: "FormMarkup",
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
  },
  data() {
    return {
      readonly: true,
      value: "",
      prefixe: "",
      suffixe: "",
    };
  },

  watch: {
    //
  },
  computed: {},
  methods: {
    inputValue() {
      if (this.value.length) {
        return (this.field.value = Number(this.value));
      }
    },
    input() {
      if (this.readonly && this.field.name.length <= 32) {
        this.field.name = snakeCase(this.field.label);
      }
    },
    toogleReadOnly() {
      if (this.readonly) this.readonly = false;
      else this.readonly = true;
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
