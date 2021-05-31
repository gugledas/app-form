import Vue from "vue";
import VueRouter from "vue-router";
import Listesfomes from "../App/Listesfomes.vue";

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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
