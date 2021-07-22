<template lang="html">
  <div class="d-flex flex-column justify-content-center text-center">
    <div v-if="diplayLabel">
      <div class="icon"><b-icon icon="shield" font-scale="1.7"></b-icon></div>
    </div>
    <div class="label-field" v-if="diplayLabel">Ville</div>
    <div class="field-content">{{ value }}</div>
  </div>
</template>

<script>
//
//import magentoSynchroListSites from "./ListSites.vue";
export default {
  name: "codePostal",
  props: {
    field: {
      type: Object,
      required: true,
    },
    diplayLabel: {
      type: Boolean,
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
    value() {
      if (this.field.value && this.field.value.text) {
        return this.field.value.text;
      }
      return "";
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
