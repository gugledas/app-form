<template>
  <div :class="!validationField && mode ? 'mb-5' : ''">
    <transition v-if="validationField" name="fade">
      <div class="number-markup__img choice-section min-height">
        <img :src="img_url_format" />
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
//import { ValidationProvider } from "vee-validate";
import { validationRessource as Validation } from "../config/validation.js";
import "../EditsFields/vee-validate-custom.js";
import config from "../config/config.js";
export default {
  props: {
    field: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      text: 1,
    };
  },
  computed: {
    ...mapGetters(["formDatas"]),
    ...mapState(["formDatasValidate", "mode"]),
    img_url_format() {
      if (this.field.imgUrl && this.field.imgUrl !== undefined)
        return config.baseURl + this.field.imgUrl;
      return null;
    },
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
    labelUpValue(datas) {
      this.$emit("label-up-value", datas);
    },
  },
};
</script>

<style lang="scss">
.number-markup {
  &__img {
    width: 100%;
    text-align: center;
    img {
      width: 170px;
      height: 140px;
    }
  }
}
</style>
