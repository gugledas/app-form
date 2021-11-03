<template>
  <div>
    <title-bar :conf="{ col: true, text: 'Gestion des champs' }"></title-bar>
    <Filtre :listForms="listForms"></Filtre>
    <tableauChamps :listForms="listForms"></tableauChamps>
  </div>
</template>

<script>
import TitleBar from "./components/TitleBar.vue";
//import Filtre from "./gestions-chemps/filtres.vue";
//import tableauChamps from "./gestions-chemps/tableauChamps.vue";
import MiniStore from "./gestions-chemps/store.js";
export default {
  name: "GestionFields",
  components: {
    TitleBar,
    // on doit charge le sous module vuex avant l'execution de ce dernier.
    Filtre: () => {
      return new Promise((resolv) => {
        resolv(import("./gestions-chemps/filtres.vue"));
      });
    },
    // on doit charge le sous module vuex avant l'execution de ce dernier.
    tableauChamps: () => {
      return new Promise((resolv) => {
        resolv(import("./gestions-chemps/tableauChamps.vue"));
      });
    },
  },
  data() {
    return {
      listForms: [],
    };
  },
  mounted() {
    this.$store.registerModule("StoreGestionChamps", MiniStore);
    this.$store.dispatch("loadFormsDatas").then(() => {
      this.$store.state.items.forEach((item) => {
        this.listForms.push({ value: item.id, text: item.name });
      });
    });
  },
};
</script>
