<template lang="html">
  <div class="row-input" :class="!validationField && mode ? 'mb-5' : ''">
    <div class="row-input__row" :class="validationField ? '' : 'mb-5'">
      <transition v-if="validationField" name="fade">
        <div class="choice-section min-height">
          <b-row align-v="center">
            <b-col sm="6">
              <label class="label"> {{ field.label }} </label>
            </b-col>
            <b-col sm="6" class="input-field">
              <ValidationProvider
                v-slot="v"
                :rules="field.require"
                :name="field.name"
              >
                <b-form-select
                  v-model="field.value"
                  type="text"
                  placeholder=""
                  :options="field.options"
                  class="input-field__input form-control"
                  :name="field.name"
                >
                </b-form-select>
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
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import { ValidationProvider } from "vee-validate";
import { validationRessource as Validation } from "../config/validation.js";
import "../EditsFields/vee-validate-custom.js";

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
        if (status === undefined) status = false;
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
