<template>
  <div id="app" class="app-form">
    <div id="nav" v-if="$store.state.mode"></div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  // mounted() {
  //   //this.$store.dispatch("loadStepsDatas");
  // },
};
</script>
