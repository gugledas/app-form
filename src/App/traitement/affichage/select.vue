<template lang="html">
  <div>
    <ul class="m-0 p-0 pl-4">
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
