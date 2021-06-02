<template>
  <div>
    <pre class="d-none">
      validationField : {{ validationField }}
    </pre>
    <transition v-if="validationField" name="fade">
      <div class="row-content">
        <b-row class="row-content__row">
          <b-col sm="6">
            <label class="label">{{ field.label }} </label>
          </b-col>
          <b-col sm="6">
            <ValidationProvider
              v-slot="v"
              :rules="field.require"
              class="d-block"
              :name="field.name"
            >
              <div sm="6" class="input-field">
                <span class="input-field__unit" v-if="field.prefixe">
                  {{ field.prefixe }}
                </span>
                <b-form-input
                  v-model="field.value"
                  :type="field.type"
                  placeholder=""
                  class="input-field__input"
                ></b-form-input>
                <span class="input-field__unit" v-if="field.suffixe">
                  {{ field.suffixe }}
                </span>
              </div>
              <div class="text-danger">
                <small
                  v-for="(error, ii) in v.errors"
                  :key="ii"
                  class="d-block"
                >
                  {{ error }}
                </small>
              </div>
            </ValidationProvider>
          </b-col>
        </b-row>
      </div>
    </transition>
    <!--
    <pre class="text-left">
      {{ formDatasValidate }}
    </pre>
  --></div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import { ValidationProvider, extend } from "vee-validate";
import { required, email } from "vee-validate/dist/rules";
import Validation from "../config/validation.js";
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
      validator: function (val) {
        return val.states !== undefined && val.states !== undefined
          ? true
          : false;
      },
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
  computed: {
    ...mapGetters(["formDatas"]),
    ...mapState(["formDatasValidate"]),
    validationField() {
      if (this.field.states.length) {
        /*
        for (const i in this.formDatas.fields) {
          const field = this.formDatas.fields[i];
          if (field.name !== this.field.name) {
            for (const j in this.field.states) {
              const state = this.field.states[j];
              if (field.name === state.name) {
                // visible
                if (state.action === "visible") {
                  if (field.value === "" && state.operator === "not_empty")
                    return false;
                  else if (field.value !== "" && state.operator === "empty")
                    return false;
                  else if (
                    state.operator === "validated" &&
                    this.formDatasValidate[field.name]
                  )
                    return this.formDatasValidate[field.name].valid;
                }
              }
            }
          }
        }
        /**/
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
        text-align: center;
      }
      &__unit {
        margin: 0 8px;
      }
    }
  }
}
</style>
