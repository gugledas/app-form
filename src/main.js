import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import VueFormulate from "@braid/vue-formulate";
import store from "./store";
import router from "./router";

Vue.config.productionTip = false;
Vue.use(VueFormulate);

new Vue({
  store,
  router,
  render: (h) => h(App),
  mounted() {
    this.$store.dispatch("getCurrentUser");
  },
}).$mount("#app");
