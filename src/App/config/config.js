import { AjaxToastBootStrap } from "wbuutilities";
import Utilities from "../Utilities.js";
import { BVToastPlugin } from "bootstrap-vue";
import Vue from "vue";
Vue.use(BVToastPlugin);

const vm = new Vue();
//console.log("Module Vue :  ", vm, "\n $bvToast : ", vm.$bvToast);
AjaxToastBootStrap.$bvToast = vm.$bvToast;
export default {
  baseURl: "http://lesroisdelareno.kksa",

  /**
   * Permet d'ajouter et d'editer un formulaire.
   */
  saveForm(datas) {
    return AjaxToastBootStrap.post(
      this.baseURl + "/query-ajax/insert-update",
      datas,
      {}
    );
  },
  prepareDatasToSave(datas) {
    return Utilities.saveSteps(datas);
  },
};
