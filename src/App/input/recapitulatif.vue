<template lang="html">
  <div :class="!validationField && mode ? 'mb-5' : ''">
    <transition v-if="validationField" name="fade">
      <div class="row-content choice-section min-height">
        <b-row class="row-content__row">
          <b-col sm="12" class="mb-3">
            <label class="label d-flex align-items-center">
              <span class="price-info label">{{ field.label }} :</span>
              <span class="price-info price">{{ price }}</span>
              <span class="price-info currency">€</span>
            </label>
          </b-col>
          <b-col sm="12" v-html="field.value" class="text-description"> </b-col>
        </b-row>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState } from "vuex";
//import { ValidationProvider } from "vee-validate";
//import { validationRessource as Validation } from "../config/validation.js";
import "../EditsFields/vee-validate-custom.js";
export default {
  name: "recapitulatif",
  props: {
    field: {
      type: Object,
      require: true,
    },
  },
  components: {
    //
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
    ...mapState(["price", "mode"]),
    validationField() {
      this.setStatus(true);
      this.setPrice();
      return true;
    },
  },
  methods: {
    setStatus(status) {
      this.$set(this.field, "status", status);
    },
    setPrice() {
      this.field.prix = {
        cout: this.price,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.price-info {
  margin-right: 1rem;
  &.price {
    margin-right: 0.5rem;
    font-weight: 600;
  }
}
.text-description {
  font-size: 80%;
}
</style>

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
