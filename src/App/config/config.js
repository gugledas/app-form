import { AjaxToastBootStrap } from "wbuutilities";
import Utilities from "../Utilities.js";
import { BVToastPlugin } from "bootstrap-vue";
import Vue from "vue";
Vue.use(BVToastPlugin);

const vm = new Vue();
//console.log("Module Vue :  ", vm, "\n $bvToast : ", vm.$bvToast);
AjaxToastBootStrap.$bvToast = vm.$bvToast;
export default {
  baseURl: window.location.host.includes("localhost")
    ? "http://lesroisdelareno.kksa"
    : window.location.origin,
  typeSelection: ["radio", "select", "checkbox"],
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
  /**
   * Prepare les données pour la sauvagarde.
   */
  saveStepsDatas: function (id, datas, price, uid = 0, status = 0) {
    return new Promise((resolv) => {
      //console.log("fdate : ", datas);
      var forms = "";
      if (datas.forms) {
        forms = JSON.stringify(datas.forms);
      }
      var result = [];
      if (datas != "") {
        //edition de la table contents
        var table1 = {
          table: "appformmanager_datas",
          fields: {
            datas: forms,
            appformmanager_forms: datas.id,
            uid: uid,
            price: price,
            status: status,
          },
          action: "update",
        };

        if (id !== null && id != "1") {
          table1.where = [
            {
              column: "id",
              value: datas.id,
            },
          ];
        }

        result.push(table1);
      }
      resolv(result);
    });
  },
  deleteForm(id) {
    const result = [];
    var table1 = {
      table: "appformmanager_fomrs",
      fields: {},
      action: "delete",
      where: [
        {
          column: "id",
          value: id,
        },
      ],
    };
    result.push(table1);
    return AjaxToastBootStrap.post(
      this.baseURl + "/query-ajax/insert-update",
      result,
      {}
    );
  },
  deleteFormTraitement(id, status) {
    const result = [];
    console.log("ress", id, status);
    var table1 = {
      table: "appformmanager_datas",
      fields: {
        status: status,
      },
      action: "update",
      where: [
        {
          column: "id",
          value: id,
        },
      ],
    };
    result.push(table1);
    return AjaxToastBootStrap.post(
      this.baseURl + "/query-ajax/insert-update",
      result,
      {}
    );
  },
};
