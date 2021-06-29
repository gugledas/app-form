import Vue from "vue";
import VueRouter from "vue-router";
import Listesfomes from "../App/Listesfomes.vue";
import "../App/scss/style.scss";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Listes de formulaire",
    component: Listesfomes,
  },
  {
    path: "/estimation-devis/:id",
    name: "Edition du formulaire",
    props: true,
    component: () => import("../App/userpage.vue"),
  },
  {
    path: "/traitement-my-own/:id",
    name: "Traitement du résultat",
    props: true,
    component: () => import("../App/traitement/TraitementMyOwn.vue"),
  },
  {
    path: "/*",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "hash",
  routes,
});

export default router;
