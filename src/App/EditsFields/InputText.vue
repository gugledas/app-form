<template lang="html">
  <div>
    <b-row class="mb-3">
      <b-col sm="12">
        <compositeHeaderField :field="field"></compositeHeaderField>
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
    compositeHeaderField: () => import("./compositeHeaderField.vue"),
  },
  data() {
    return {
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
      if (this.field.type === "text" || this.field.type === "number") {
        return this.field.type;
      } else {
        return "text";
      }
    },
  },
  methods: {
    //,
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
