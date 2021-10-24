<template>
  <div>
    <title-bar :conf="{ col: true, text: 'Gestion des champs' }"></title-bar>
    <Filtre :listForms="listForms"></Filtre>
    <tableauChamps :listForms="listForms"></tableauChamps>
  </div>
</template>

<script>
import TitleBar from "./components/TitleBar.vue";
import Filtre from "./gestions-chemps/filtres.vue";
import tableauChamps from "./gestions-chemps/tableauChamps.vue";
export default {
  name: "GestionFields",
  components: {
    TitleBar,
    Filtre,
    tableauChamps,
  },
  data() {
    return {
      listForms: [],
    };
  },
  mounted() {
    this.$store.dispatch("loadFormsDatas").then(() => {
      this.$store.state.items.forEach((item) => {
        this.listForms.push({ value: item.id, text: item.name });
      });
    });
  },
};
</script>
