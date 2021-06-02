<template lang="html">
  <b-row align-h="center">
    <div class="row-input">
      <div class="row-input__row">
        <b-col sm="6">
          <label class="label"> {{ field.label }} </label>
        </b-col>
        <b-col sm="6" class="input-field">
          <ValidationProvider v-slot="v" :rules="field.require">
            <b-form-input
              v-model="field.value"
              type="text"
              placeholder=""
              class="input-field__input"
            >
            </b-form-input>
            <div class="text-danger">
              <small v-for="(error, ii) in v.errors" :key="ii" class="d-block">
                {{ error }}
              </small>
            </div>
          </ValidationProvider>
        </b-col>
      </div>
    </div>
  </b-row>
</template>

<script>
//
import { ValidationProvider, extend } from "vee-validate";
import { required, email } from "vee-validate/dist/rules";
//
// No message specified.
extend("email", email);

// Override the default message.
extend("required", {
  ...required,
  message: "Ce champs est requis",
});

export default {
  name: "InputText",
  props: {
    field: {
      type: Object,
      required: true,
    },
  },
  components: {
    ValidationProvider,
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

<style lang="scss">
.row-input {
  margin-bottom: 1rem;
  &__row {
    display: flex;
    align-items: center;
  }
}
</style>

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
