<template>
  <div>
    <div>
      <div class="row-content">
        <div class="row-content__row">
          <b-col sm="6">
            <label class="label">{{ field.label }} </label>
          </b-col>
          <ValidationProvider v-slot="v" :rules="field.require">
            <b-col sm="6" class="input-field">
              <b-form-input
                v-model="field.value"
                type="number"
                placeholder="--"
                class="input-field__input"
                min="1"
                max="100"
              ></b-form-input
              ><span class="input-field__unit">{{ field.unit }}</span>
            </b-col>
            <div class="text-danger">
              <small v-for="(error, ii) in v.errors" :key="ii" class="d-block">
                {{ error }}
              </small>
            </div>
          </ValidationProvider>
        </div>
      </div>
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
      type: Array,
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
  watch: {
    value() {
      this.$emit("label-up-value", this.value);
      this.$store.state.fields.value = this.options;
      console.log("object", this.options);
    },
  },
  methods: {},
};
</script>

<style lang="scss">
.row-content {
  margin: 1.5rem auto;
  width: 100%;
  &__row {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    .label {
      font-size: 1.2em;
      //padding: 0 80px 0 0;
    }
    .input-field {
      display: flex;
      justify-content: center;
      align-items: center;
      &__input {
        width: 131px;
        height: 50px;
        padding: 0 0 0 3.5em;
      }
      &__unit {
        margin: 0 8px;
      }
    }
  }
}
</style>
