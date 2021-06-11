<template>
  <div>
    <div class="number-markup__input">
      <label class="label">{{ field.label }}</label>

      <ValidationProvider v-slot="v" :rules="field.require">
        <div class="input-field">
          <b-form-input
            v-model="field.value"
            type="number"
            placeholder=""
            class="input-field__input"
            min="1"
            max="100"
          ></b-form-input
          ><span class="input-field__unit" v-if="field.suffixe">{{
            field.suffixe
          }}</span>
        </div>
        <div class="text-danger">
          <small v-for="(error, ii) in v.errors" :key="ii" class="d-block">
            {{ error }}
          </small>
        </div>
      </ValidationProvider>
    </div>
  </div>
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
  props: {
    field: {
      type: Object,
      require: true,
    },
  },
  components: {
    ValidationProvider,
  },
  data() {
    return {
      value: 1,
    };
  },
  watch: {},
  methods: {},
};
</script>

<style lang="scss">
.number-markup__input {
  display: flex;
  justify-content: center;
  flex-flow: wrap row;
  align-items: center;
  .label {
    font-size: inherit;
  }
  .input-field {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding-left: 42px;
    &__input {
      width: 131px;
      height: 50px;
      text-align: center;
    }
    &__unit {
      margin: 0 8px;
    }
  }
}
</style>
