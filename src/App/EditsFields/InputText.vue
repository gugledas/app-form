<template lang="html">
  <div>
    <b-row class="mb-3">
      <b-col sm="12">
        <b-form-group label="Label" invalid-feedback="Name is required">
          <b-input-group>
            <b-form-input
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
          <b-form-input v-model="field.value" :type="type"></b-form-input>
        </b-form-group>
      </b-col>
      <b-col sm="12">
        <b-form-group label="Prefixe | suffixe">
          <b-input-group>
            <b-form-input v-model="prefixe"></b-form-input>
            <b-form-input v-model="suffixe"></b-form-input>
          </b-input-group>
        </b-form-group>
      </b-col>
    </b-row>
    <ValidationFields :field="field"></ValidationFields>
  </div>
</template>

<script>
import { snakeCase } from "snake-case";
import ValidationFields from "./ValidationFields.vue";
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
  },
  data() {
    return {
      readonly: true,
      prefixe: "",
      suffixe: "",
    };
  },
  mounted() {
    //
  },
  watch: {
    //
  },
  computed: {
    type() {
      if (this.field.type.length > 2) {
        return this.field.type;
      } else {
        return "text";
      }
    },
  },
  methods: {
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
