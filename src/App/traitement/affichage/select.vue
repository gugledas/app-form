<template lang="html">
  <div
    class="d-flex flex-column justify-content-center text-center"
    data-render="select"
  >
    <div v-if="diplayLabel">
      <div class="icon"><b-icon icon="box" font-scale="1.7"></b-icon></div>
    </div>
    <div class="label-field" v-if="diplayLabel">
      {{ field.label }}
    </div>
    <ul class="m-0 p-0 pl-4 field-content">
      <li v-for="(item, i) in getValue" :key="i">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
//
//import magentoSynchroListSites from "./ListSites.vue";
export default {
  name: "select",
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
    getValue() {
      const values = [];
      if (this.field.value) {
        var type = typeof this.field.value;
        if (type === "object") {
          for (const j in this.field.value) {
            values.push(this.getTextInOptions(this.field.value[j]));
          }
        } else {
          values.push(this.getTextInOptions(this.field.value));
        }
      }
      return values;
    },
  },
  methods: {
    getTextInOptions(value) {
      for (const i in this.field.options) {
        if (this.field.options[i].value === value) {
          return this.field.options[i].text;
        }
      }
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
