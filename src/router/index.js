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
    path: "/edit-form/:id",
    name: "Edition du formulaire",
    props: true,
    component: () => import("../App/StepsPage.vue"),
  },
  {
    path: "/estimation-devis/:id",
    name: "Estimation du devis",
    props: true,
    component: () => import("../App/userpage.vue"),
  },
  {
    path: "/traitement/:id",
    name: "Traitement du résultat",
    props: true,
    component: () => import("../App/traitement/Traitement.vue"),
  },
  {
    path: "/*",
    redirect: "/",
  },
];

const router = new VueRouter({
  //mode: "history",
  //base: process.env.BASE_URL,
  mode: "hash",
  routes,
});

export default router;
