<template lang="html">
  <div
    class="d-flex flex-column justify-content-center text-center"
    data-render="default-render"
  >
    <div v-if="diplayLabel">
      <div class="icon">
        <b-icon icon="cloud-download" font-scale="1.7"></b-icon>
      </div>
    </div>
    <div class="label-field" v-if="diplayLabel">
      {{ field.label }}
    </div>
    <div class="field-content">{{ field.value }} €</div>
  </div>
</template>

<script>
//
//import magentoSynchroListSites from "./ListSites.vue";
export default {
  name: "defaultRender.vue",
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
    //
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
