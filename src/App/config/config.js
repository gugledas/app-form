import { AjaxToastBootStrap } from "wbuutilities";
import Utilities from "../Utilities.js";
import { BVToastPlugin } from "bootstrap-vue";
import Vue from "vue";
Vue.use(BVToastPlugin);

export default {
  ...AjaxToastBootStrap,
  TestDomain: "http://v2lesroisdelareno.kksa", //"http://lesroisdelareno.habeuk.com",

  typeSelection: ["radio", "select", "checkbox"],
  /**
   * Permet de recuperer les données en BD.
   * @param {*} datas
   * @param {*} mode
   * @returns
   */
  getData(datas, mode = false, url = "/query-ajax/select") {
    return this.bPost(url, datas, {}, mode);
  },
  /**
   * Permet d'ajouter et d'editer un formulaire.
   */
  saveForm(datas, mode = false, url = "/query-ajax/insert-update") {
    return this.bPost(url, datas, {}, mode);
  },
  /**
   * Preparation de la sauvagarde du formulaire d'edition.
   * Cela se fait en 3 etapes:
   * - on sauvegarde les données de bases
   * - on supprime toutes les etapes concernant ce dernier
   * - on ajoute les nouvelles etapes.
   *
   * @param {*} datas
   * @returns
   */
  prepareDatasToSave(datas) {
    return new Promise((resolv) => {
      var forms = "";
      forms = JSON.stringify([]);
      var result = [];
      /**
       * On prepare la suppression des anciennes etapes.
       */
      if (datas.id) {
        result.push({
          table: "appformmanager_steps",
          action: "delete",
          fields: {},
          where: [
            {
              column: "formid",
              value: datas.id,
            },
          ],
        });
        result.push({
          table: "appformmanager_steps_fields",
          action: "delete",
          fields: {},
          where: [
            {
              column: "formid",
              value: datas.id,
            },
          ],
        });
      }
      /**
       * On prepare la sauvegarde pour la table : appformmanager_fomrs
       */
      if (datas != "") {
        //edition de la table contents
        var table1 = {
          table: "appformmanager_fomrs",
          fields: {
            forms: forms,
            description: datas.description,
            name: datas.name,
            img: datas.img,
          },
          action: "update",
        };
        if (datas.id) {
          table1.where = [
            {
              column: "id",
              value: datas.id,
            },
          ];
        }
        result.push(table1);
        /**
         * Sauvegarde des etapes.
         */
        if (datas.forms && datas.id) {
          datas.forms.forEach((step, id) => {
            result.push({
              table: "appformmanager_steps",
              fields: {
                formid: datas.id,
                stepid: id,
                info: JSON.stringify(step.info),
                states: JSON.stringify(step.states),
              },
            });
            step.fields.forEach((field) => {
              const f = {
                table: "appformmanager_steps_fields",
                fields: {
                  formid: datas.id,
                  stepid: id,
                  machine_name: field.name,
                },
              };
              if (field.override) {
                if (field.override.label !== field.label) {
                  f.fields.label = field.label;
                }
              } else {
                f.fields.defaultjson = JSON.stringify(field);
              }
              result.push(f);
            });
          });
        }
      }
      resolv(result);
    });
  },
  /**
   * Prepare data to save.
   *
   * @param {*} field
   * @param {*} uid
   * @returns
   */
  prepareFieldToSave(field, uid) {
    return new Promise((resolv) => {
      var table1 = {
        table: "appformmanager_fields",
        fields: {
          machine_name: field.name,
          formid: field.formid,
          jsonfield: JSON.stringify(field),
          uid: uid,
        },
        action: "update",
      };
      if (field.id) {
        table1.where = [
          {
            column: "id",
            value: field.id,
          },
        ];
      }
      resolv([table1]);
    });
  },
  /**
   *
   * @param {*} field
   * @returns
   */
  deleteField(field) {
    var deleteData = {
      table: "appformmanager_fields",
      action: "delete",
      fields: {},
      where: [
        {
          column: "machine_name",
          value: field.name,
        },
      ],
    };
    return this.saveForm([deleteData]);
  },
  prepareSettingForm(datas) {
    return Utilities.settingForm(datas);
  },
  /**
   * Prepare les données de soumissions pour la sauvagarde.
   *
   * @param {*} id
   * @param {*} datas
   * @param {*} price
   * @param {*} uid
   * @param {*} status
   * @returns
   */
  saveStepsDatas(state, uid = 0, status = 2) {
    return new Promise((resolv) => {
      const datas = state.form;
      const id = state.idSoumission;
      const price = state.price;
      // console.log("saveStepsDatas : ", datas);
      var result = [];
      if (datas != "") {
        // Edition de la table contents.
        var table1 = {
          table: "appformmanager_datas",
          fields: {
            datas: JSON.stringify([]),
            appformmanager_forms: datas.id,
            uid: uid,
            price: price,
            status: status,
          },
          action: "update",
        };
        // si l'identifiant du devis de soumissions existe deja.
        if (id !== null) {
          table1.where = [
            {
              column: "id",
              value: id,
            },
          ];
          result.push({
            table: "appformmanager_datas_steps",
            action: "delete",
            fields: {},
            where: [
              {
                column: "datasid",
                value: id,
              },
            ],
          });
          // stepsIndexs ne contient pas le premier indice, on l'ajoute en dur.
          result.push({
            table: "appformmanager_datas_steps",
            fields: {
              order: 0,
              step: JSON.stringify(datas.forms[0]),
              datasid: id,
            },
            action: "update",
          });
          state.stepsIndexs.forEach((i) => {
            result.push({
              table: "appformmanager_datas_steps",
              fields: {
                order: i,
                step: JSON.stringify(datas.forms[i]),
                datasid: id,
              },
              action: "update",
            });
          });
        } else {
          // Dans ce cas, il faut ajouter les données dans la table appformmanager_datas et recuperer son indice afin d'ajouter les données de l'etape.
          table1.childstable = {
            colum_id_name: "datasid",
            tables: [
              {
                table: "appformmanager_datas_steps",
                fields: {
                  order: 0,
                  step: JSON.stringify(datas.forms[0]),
                },
              },
            ],
          };
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
    return this.bPost("/query-ajax/insert-update", result, {}, mode);
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
    return this.bPost("/query-ajax/insert-update", result, {}, mode);
  },
  CustomModalSuccess(body, conf) {
    return this.modalSuccess(body, conf);
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
