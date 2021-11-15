<template lang="html">
  <div
    class="d-flex justify-content-center text-center"
    data-render="recapitulatif"
  >
    <div class="label-field" v-if="diplayLabel">{{ field.label }}</div>
    <strong class="field-content" v-if="!field.complex_logique">
      {{ priceEstimation }} €
    </strong>
    <div v-if="field.complex_logique" v-html="field.montant"></div>
  </div>
</template>

<script>
//
//import magentoSynchroListSites from "./ListSites.vue";
export default {
  name: "recapitulatif",
  props: {
    field: {
      type: Object,
      required: true,
    },
    diplayLabel: {
      type: Boolean,
      default: false,
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
    priceEstimation() {
      const price = this.field.prix.cout;
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
  },
  methods: {
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
