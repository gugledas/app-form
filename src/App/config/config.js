import { AjaxToastBootStrap } from "wbuutilities";
import Utilities from "../Utilities.js";
import { BVToastPlugin } from "bootstrap-vue";
import Vue from "vue";
Vue.use(BVToastPlugin);

const vm = new Vue();
//console.log("Module Vue :  ", vm, "\n $bvToast : ", vm.$bvToast);
AjaxToastBootStrap.$bvToast = vm.$bvToast;
AjaxToastBootStrap.$bvModal = vm.$bvModal;
export default {
  baseURl: window.location.host.includes("localhost")
    ? "http://lesroisdelareno.kksa"
    : window.location.origin,
  typeSelection: ["radio", "select", "checkbox"],
  getData(datas, mode = false) {
    //var datas = "select * from `appformmanager_fomrs`";
    return AjaxToastBootStrap.post(
      this.baseURl + "/query-ajax/select",
      datas,
      {},
      mode
    );
  },
  /**
   * Permet d'ajouter et d'editer un formulaire.
   */
  saveForm(datas, mode = false) {
    return AjaxToastBootStrap.post(
      this.baseURl + "/query-ajax/insert-update",
      datas,
      {},
      mode
    );
  },
  prepareDatasToSave(datas) {
    return Utilities.saveSteps(datas);
  },
  /**
   * Prepare les données pour la sauvagarde.
   *
   * @param {*} id
   * @param {*} datas
   * @param {*} price
   * @param {*} uid
   * @param {*} status
   * @returns
   */
  saveStepsDatas(id, datas, price, uid = 0, status = 2) {
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

        if (id !== null) {
          table1.where = [
            {
              column: "id",
              value: id,
            },
          ];
        }

        result.push(table1);
      }
      resolv(result);
    });
  },
  deleteForm(id, mode = false) {
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
      {},
      mode
    );
  },
  /**
   *
   * @param {*} id
   * @param {*} status 0=>devis en attente, 1 devis sauvegarder, 2 devis abondonnée.
   * @param {*} mode
   * @returns
   */
  deleteFormTraitement(id, status, mode = false) {
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
      {},
      mode
    );
  },
  modalSuccess(body, conf) {
    return AjaxToastBootStrap.modalSuccess(body, conf);
  },
  getMysqlDateToFrench(data) {
    if (data && data != "") {
      var _date = new Date(data.replace(/-/g, "/"));
      var french_date =
        _date.getDate().toString().padStart(2, "0") +
        "/" +
        (_date.getMonth() + 1).toString().padStart(2, "0") +
        "/" +
        _date.getFullYear() +
        " à " +
        _date.getHours().toString().padStart(2, "0") +
        ":" +
        _date.getMinutes().toString().padStart(2, "0");
      return french_date;
    }
    return "";
  },
  /**
   * Pour le rendu JSX on utilisara domProps;
   */
  messages: {
    devisRappel:
      "Votre devis a été pris en compte,<br> Nous vous contacterons dans les 24 heures !",
    devisCreateUser:
      "Vous pouvez ajuster ou suivre le traitement de votre devis, en vous connectant sur <a href='/'> lesroisdelareno.fr </a>. <br> <strong> Bien vouloir verifier votre boite mail pour plus d'information </strong>",
    devisEnd:
      "<br> Toute l'équipe de <a href='/'>lesroisdelareno.fr</a> vous remercie de votre confiance",
    devisSave: "Votre devis a été sauvegardé",
    statusDevis0: "Devis en attente de rappel",
    statusDevis1: "Sauvegardé",
    statusDevis2: "Abandonné",
  },
};
