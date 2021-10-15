<template lang="html">
  <div>
    <ul class="m-0 p-0 pl-4">
      <li v-for="(item, i) in value" :key="i">
        <a :href="item.url" :download="item.filename">{{ item.filename }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
//
//import magentoSynchroListSites from "./ListSites.vue";
export default {
  name: "file",
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
    value() {
      if (this.field.value.length) {
        return this.field.value;
      }
      return [];
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
