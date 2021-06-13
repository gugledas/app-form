//import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import { BootstrapVue } from "bootstrap-vue";
import { IconsPlugin } from "bootstrap-vue";
//on importe uniquement bootstrap-vue.css;
import "bootstrap-vue/dist/bootstrap-vue.css";
import App from "./App.vue";
import VueFormulate from "@braid/vue-formulate";
import store from "./store";
import router from "./router/routeUser.js";

Vue.config.productionTip = false;
Vue.use(VueFormulate);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  store,
  router,
  render: (h) => h(App),
  mounted() {
    this.$store.state.mode = false;
  },
}).$mount("#app");
