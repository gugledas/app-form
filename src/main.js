//import "@babel/polyfill";
//import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
//import App from "./App.vue";
import store from "./store";
import router from "./router";

Vue.config.productionTip = false;

function loadstyle(src) {
  return new Promise((resolv) => {
    var s = document.createElement("link");
    s.setAttribute("rel", "stylesheet");
    s.setAttribute("href", src);
    s.onload = function () {
      console.log("Chargement du Style ok : ", src);
      resolv(true);
    };
    document.head.appendChild(s);
  });
}
/**
 * On charge le style bootstrap si on est en local, si non, on utilise le style definit sur le site de production.
 * @returns
 */
const App = () =>
  import("./App.vue").then((component) => {
    return new Promise((resolv) => {
      const callback = () => {
        resolv(component);
      };
      if (window.location.hostname !== "localhost") {
        callback();
      } else {
        loadstyle(
          "https://lesroisdelareno.fr/themes/custom/lesroisdelareno/css/prestataires-m0-default.css"
        ).then((statusJuiCss) => {
          if (statusJuiCss) callback();
        });
      }
    });
  });

new Vue({
  store,
  router,
  render: (h) => h(App),
  mounted() {
    this.$store.dispatch("getCurrentUser");
  },
}).$mount("#app");
