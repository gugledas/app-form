<template lang="html">
  <div :class="!validationField && mode ? 'mb-5' : ''">
    <transition v-if="validationField" name="fade">
      <div class="choice-section min-heigh">
        <ValidationProvider
          v-slot="v"
          :rules="field.require"
          class="d-block"
          :name="field.name"
        >
          <input type="hidden" v-model="field.value" />
          <div
            class="border py-3 px-4"
            :checkFormDatasValidate="checkFormDatasValidate"
          >
            <div>
              {{ field.label }}
            </div>
            <div class="py-2">
              <strong> {{ field.value }} € </strong>
            </div>
            <div>
              <small> {{ field.description }} </small>
            </div>
          </div>
          <div class="text-danger">
            <small v-for="(error, ii) in v.errors" :key="ii" class="d-block">
              {{ error }}
            </small>
          </div>
        </ValidationProvider>
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
  name: "inputAideFinanciere",
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
    ...mapState(["formDatasValidate", "mode", "priceAide"]),
    validationField() {
      if (this.field.states.length) {
        var status = Validation.computedValidation(
          this.formDatas,
          this.field,
          this.formDatasValidate
        );
        if (status) {
          this.preproccess_value();
        }
        if (status !== undefined) return status;
      }
      return true;
    },
    checkFormDatasValidate() {
      if (this.formDatasValidate) {
        this.preproccess_value();
      }
      return true;
    },
  },

  methods: {
    async preproccess_value() {
      var self = this;
      if (self) {
        this.field.value = await eval(self.field.preproccess_value);
      }
      console.log(" Evaluation aide : ", this.field.value);
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
