<template>
  <div :class="!validationField && mode ? 'mb-5' : ''">
    <transition v-if="validationField" name="fade">
      <b-row class="choice-section min-height">
        <b-col cols="12" class="text-left" v-if="!field.label_hidden === true">
          <p class="page-label">{{ field.label }}</p>
        </b-col>
        <ValidationProvider
          v-slot="v"
          :rules="field.require"
          class="col-12 p-0"
          :name="field.name"
        >
          <b-col cols="12" v-for="(item, i) in field.options" :key="i">
            <div class="input-list">
              <b-col sm="11" class="input-list__label">
                <label
                  class="m-0 d-block w-100"
                  :for="`input-radio-a${field.name}${i}`"
                  v-html="formatTemplateString(item.text)"
                >
                </label>
              </b-col>
              <b-col class="input-list__input">
                <b-form-radio
                  :name="field.name"
                  v-model="field.value"
                  size="lg"
                  :id="`input-radio-a${field.name}${i}`"
                  :value="item.value"
                ></b-form-radio>
              </b-col>
            </div>
          </b-col>
          <div class="text-danger">
            <small v-for="(error, ii) in v.errors" :key="ii" class="d-block">
              {{ error }}
            </small>
          </div>
        </ValidationProvider>
      </b-row>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import { ValidationProvider } from "vee-validate";
import { validationRessource as Validation } from "../config/validation.js";
import "../EditsFields/vee-validate-custom.js";
import { validationRessource as validation } from "../config/validation.js";

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
      nombre_de_personne_dans_le_logeme: 7,
    };
  },
  watch: {},
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
    /**
     * -
     */
    formatTemplateString(string) {
      return this.formatString(string);
      //return string;
    },
    /**
     * -
     */
    formatString(str) {
      var regex = /\{\{(.*?)\}\}/g;
      var strFinal = str;
      var monTableau;
      while ((monTableau = regex.exec(str)) !== null) {
        var msg = monTableau[1].trim(" ");
        strFinal = strFinal.replace(monTableau[0], eval(msg));
      }
      return strFinal;
    },
    /**
     * -
     */
    getFieldValueByName(name) {
      const field = validation.getFieldByName(name, this.formDatas.fields);

      if (field && field.value) {
        return field.value;
      }
    },
  },
};
</script>

<style lang="scss">
.p-bleu {
  color: rgb(0, 153, 255);
}
.p-jaune {
  color: #e5cd00;
}
.p-bleu {
  color: rgb(148, 3, 184);
}
.p-rose {
  color: rgb(218, 3, 207);
}
</style>
