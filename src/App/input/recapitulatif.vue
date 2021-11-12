<template lang="html">
  <div :class="!validationField && mode ? 'mb-5' : ''">
    <transition v-if="validationField" name="fade">
      <div
        class="row-content choice-section min-height"
        :displayPreproccessValue="displayPreproccessValue"
      >
        <b-row class="row-content__row">
          <b-col sm="12" class="mb-3" v-if="!field.complex_logique">
            <label class="label d-flex align-items-center">
              <span class="price-info label">{{ field.label }} :</span>
              <span class="price-info price">{{ priceEstimation }}</span>
              <span class="price-info currency">€</span>
            </label>
          </b-col>
          <b-col sm="12" v-if="field.complex_logique" class="text-description">
            <div>
              <label class="label d-flex align-items-center">
                <span class="price-info label">{{ field.label }} :</span>
              </label>
              <div class="px-2 d-block text-left" v-html="field.montant"></div>
            </div>
          </b-col>
          <b-col sm="12" v-html="field.value" class="text-description"></b-col>
        </b-row>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState } from "vuex";
import utility from "../../store/utilities.js";
import "../EditsFields/vee-validate-custom.js";
export default {
  name: "recapitulatif",
  props: {
    field: {
      type: Object,
      require: true,
    },
  },

  computed: {
    ...mapState(["price", "mode", "form"]),
    validationField() {
      this.setStatus(true);
      this.setPrice();
      return true;
    },
    priceEstimation() {
      const price = this.price;
      if (price > 0) {
        if (this.field.percent) {
          var percent = parseInt(this.field.percent);
          if (percent > 0) {
            percent = (price * percent) / 100 + price;
            return price + " - " + percent;
          }
        }
      }
      return price;
    },
    displayPreproccessValue() {
      return this.preproccess_value();
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
    getFieldInForms(state_name, field_name) {
      utility.forms = this.form.forms;
      return utility.getFieldInForms(state_name, field_name);
    },
    async preproccess_value() {
      var self = this;
      if (self && self.field.preproccess_value) {
        this.$set(
          this.field,
          "montant",
          await eval(self.field.preproccess_value)
        );
        return 1;
      } else return 0;
    },
  },
};
</script>

<style lang="scss">
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
.list-price {
  list-style: none;
  li {
    display: flex;
    margin-bottom: 1rem;
    justify-content: space-between;
  }
  .price {
    width: 150px;
    font-weight: 600;
    text-align: right;
  }
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
