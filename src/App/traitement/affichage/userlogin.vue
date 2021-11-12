<template lang="html">
  <div>
    <ul class="m-0 p-0 pl-4">
      <li v-for="(value, i) in currentDevisDisplay" :key="i" class="d-flex">
        <strong class="value"> {{ value }} </strong>
      </li>
    </ul>
  </div>
</template>

<script>
//
//import magentoSynchroListSites from "./ListSites.vue";
export default {
  name: "userlogin",
  props: {
    field: {
      type: Object,
      required: true,
    },
    currentDevis: {
      type: Object,
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
    currentDevisDisplay() {
      if (this.currentDevis && this.currentDevis.user) {
        const fields = [];
        for (const i in this.currentDevis.user) {
          const field = this.currentDevis.user[i];
          if (i == "name") {
            fields.push("Nom d'utilisateur : " + field[0].value);
          }
          if (i == "mail") {
            fields.push("e-mail : " + field[0].value);
          }
          if (i == "field_prenom" && field[0]) {
            fields.push("Nom & prenom : " + field[0].value);
          }
          if (i == "field_telephone" && field[0]) {
            fields.push("Telephone : " + field[0].value);
          }
        }
        return fields;
      } else {
        return [];
      }
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
