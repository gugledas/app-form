<template>
  <div id="app" class="app-form">
    <div id="nav" v-if="$store.state.mode">
      <router-link to="/"> Gestion des formlaires </router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  mounted() {
    this.$store.dispatch("loadStepsDatas");
  },
};
</script>
<style lang="scss">
#nav {
  padding: 30px;
  text-align: center;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
