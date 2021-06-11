<template>
  <div>
    <transition v-if="validationField" name="fade">
      <div class="text-left">
        <h3 class="question-title">{{ field.label }}</h3>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
//import { ValidationProvider } from "vee-validate";
import { validationRessource as Validation } from "../config/validation.js";
import "../EditsFields/vee-validate-custom.js";
export default {
  props: {
    field: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      text: "Quelles sont les caractéristiques de votre logement ?",
    };
  },
  computed: {
    ...mapGetters(["formDatas"]),
    ...mapState(["formDatasValidate"]),
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
  methods: {
    labelUpValue(datas) {
      this.$emit("label-up-value", datas);
    },
  },
};
</script>

<style lang="scss">
.question-title {
  text-align: left;
  font-size: 1.38em;
  color: #000000;
  line-height: 1.2;
  margin: 15px 0;
}
</style>
