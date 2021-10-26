<template>
  <div id="app" class="app-form">
    <div id="nav" v-if="$store.state.mode"></div>
    <b-container fluid="md" class="app-container">
      <router-view />
    </b-container>
  </div>
</template>
<script>
import Vue from "vue";
import loaderIcon from "./App/components/loaderIcon.vue";
import AddFormField from "./App/AddFormField.vue";
Vue.component("loaderIcon", loaderIcon);
Vue.component("AddFormField", AddFormField);
alert("App.vue22");
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
  min-height: 100vh;
}
</style>
