//import "@babel/polyfill";
//import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";

import store from "./store";
import router from "./router";

Vue.config.productionTip = false;

//const App = "div";
new Vue({
  store,
  router,
  render: (h) => h(App),
  mounted() {
    this.$store.dispatch("getCurrentUser");
  },
}).$mount("#app");
