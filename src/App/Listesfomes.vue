<template lang="html">
  <div class="home-form_block">
    <!-- Entete -->
    <ListesfomesHeader></ListesfomesHeader>
    <!-- liste formulaire -->
    <ListesfomesItems></ListesfomesItems>
  </div>
</template>

<script>
import ListesfomesHeader from "./Listesfomes--header.vue";
import ListesfomesItems from "./Listesfomes--items.vue";
export default {
  name: "Listesfomes",
  props: {},
  components: {
    ListesfomesHeader,
    ListesfomesItems,
  },
};
</script>
