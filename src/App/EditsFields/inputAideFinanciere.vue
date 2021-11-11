<template lang="html">
  <div>
    <b-row class="mb-3">
      <b-col sm="12">
        <compositeHeaderField :field="field"></compositeHeaderField>
      </b-col>
      <b-col sm="12">
        <b-form-group label="Description">
          <b-form-input v-model="field.description" type="text"></b-form-input>
        </b-form-group>
      </b-col>
      <b-col sm="12">
        <b-form-group label="Formatage de la valeur">
          <b-form-textarea
            v-model="field.preproccess_value"
            placeholder=""
            rows="10"
          ></b-form-textarea>
        </b-form-group>
      </b-col>
    </b-row>
    <ValidationFields :field="field"></ValidationFields>
  </div>
</template>

<script>
import ValidationFields from "./ValidationFields.vue";
import compositeHeaderField from "./compositeHeaderField.vue";
export default {
  name: "input Aide Financiere",
  props: {
    field: {
      type: Object,
      required: true,
    },
  },
  components: {
    compositeHeaderField,
    ValidationFields,
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
