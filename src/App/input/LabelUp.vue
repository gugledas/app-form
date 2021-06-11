<template>
  <div :class="!validationField && mode ? 'mb-5' : ''">
    <div class="number-markup__input choice-section min-height">
      <ValidationProvider
        v-slot="v"
        v-if="validationField"
        :rules="field.require"
        :name="field.name"
      >
        <label class="label">{{ field.label }}</label>
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
import { mapGetters, mapState } from "vuex";
import { ValidationProvider } from "vee-validate";
import { validationRessource as Validation } from "../config/validation.js";
import "../EditsFields/vee-validate-custom.js";

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
  computed: {
    ...mapGetters(["formDatas"]),
    ...mapState(["formDatasValidate", "mode"]),
    validationField() {
      if (this.field.states.length) {
        var status = Validation.computedValidation(
          this.formDatas,
          this.field,
          this.formDatasValidate
        );
        if (status !== undefined) return status;
      }
      return true;
    },
  },
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
