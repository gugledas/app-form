<template>
  <div id="app" class="app-form">
    <div id="nav" v-if="$store.state.mode"></div>
    <b-container fluid="md" class="app-container">
      <router-view />
    </b-container>
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>
<style lang="scss">
.app-container {
  max-width: 950px;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
  padding: 2rem;
  position: relative;
}
</style>
