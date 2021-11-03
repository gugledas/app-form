<template>
  <div :class="!validationField && mode ? 'mb-5' : ''">
    <transition v-if="validationField" name="fade">
      <div class="row-content choice-section min-height">
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
                  :name="field.name"
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
    },
  },
  computed: {
    ...mapGetters(["formDatas"]),
    ...mapState(["formDatasValidate", "mode"]),
    validationField() {
      var status = true;
      if (this.field.states.length) {
        status = Validation.computedValidation(
          this.formDatas,
          this.field,
          this.formDatasValidate
        );
        if (status === undefined || status === null)
          status = this.field.status !== undefined ? this.field.status : false;
        this.setStatus(status);
        return status;
      } else {
        this.setStatus(status);
        return status;
      }
    },
  },
  methods: {
    setStatus(status) {
      this.$set(this.field, "status", status);
    },
  },
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

    .input-field {
      display: flex;
      justify-content: center;
      align-items: center;
      &__input {
        width: 100%;
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
