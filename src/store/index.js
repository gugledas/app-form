import Vue from "vue";
import Vuex from "vuex";
import utilities from "./utilities.js";
import { drupalUtilities, users } from "drupal-vuejs";
import config from "../App/config/config.js";

Vue.use(Vuex);
import axios from "axios";
export default new Vuex.Store({
  state: {
    stepsIndex: 0,
    /**
     * true, si on est administrateur.
     */
    mode: true,
    /**
     * Contient l'id de la donnée a mettre à jour dans la table "appformmanager_datas". Elle est rempli
     * au premier clic  de l'utilisateur sur le bouton suivant
     */
    idSoumission: null,
    /**
     * contient les etapes d'un formulaire
     */
    allStepsDatas: [],
    /**
     * Contient l'information d'une etape du formulaire selectionné.
     */
    //formDatas: {},
    fields: {},
    field: {},
    /**
     * Contient la liste des formulaire soumis recuperer de la BD.
     */
    traitementItems: [],
    /**
     * Contient la liste des formulaire recupere de la BD.
     */
    items: [],
    /**
     * Contient l'id du formulaire selectionné.
     */
    formId: null,
    /**
     * Contient l'id du formulaire selectionné.
     */
    traitementId: null,
    /**
     * Permet de determiner le status des champs sur une etape
     */
    formDatasValidate: {},
    /**
     * Contient les index pacourut par un utilisateur,
     * permet de faire le retour arriere.
     */
    stepsIndexs: [],
    /**
     * Contient le prix calculer progressivement en function de l'action utilisateur(suivant,back).
     */
    price: 0,
    priceAide: 0,
    /**
     * Contient le status du formulaire suivant.
     true: form activé.
     */
    StatusStepsIndexs: true,
    /**
     * Stockque les infos liée à l'utilisateur.
     */
    userlogin: {
      name: {
        value: "dfr",
        ref: "",
      },
      prenom: {
        value: "",
        ref: "",
      },
      telephone: {
        value: "",
        ref: "",
      },
      email: {
        value: "",
        ref: "",
      },
      password: {
        value: "",
        ref: "",
      },
      tabIndex: "register",
    },
    /**
     * Contient les informations sur l'utilisateur s'il est connecté.
     */
    user: {},
    /**
     * Contient.
     */
    CachesUser: {},
  },
  getters: {
    /**
     * Contient la liste des différents formulaire soumis d'un type de formulaire.
     */
    traitementFormItems: (state) => {
      const items = [];
      var allitems = state.traitementItems;
      if (allitems.length && state.traitementId !== null) {
        for (let i = 0; i < allitems.length; i++) {
          if (allitems[i].appformmanager_forms == state.traitementId) {
            const form = allitems[i];
            var TypeDonnee = typeof form.datas;
            if (form.datas && form.datas !== "" && TypeDonnee === "string") {
              form.datas = JSON.parse(form.datas);
            } else if (form.datas === "") {
              form.datas = [];
            }
            items.push(form);
          }
        }
      }
      return items;
    },
    /**
     * Contient le formulaire selectionné par le client.
     */
    form: (state) => {
      if (state.items.length && state.formId !== null) {
        for (const i in state.items) {
          if (state.items[i].id === state.formId) {
            const form = state.items[i];
            var TypeDonnee = typeof form.forms;
            if (form.forms && form.forms !== "" && TypeDonnee === "string") {
              form.forms = JSON.parse(form.forms);
            } else if (form.forms === "") {
              form.forms = [];
            }
            return form;
          }
        }
      } else
        return {
          id: "",
          forms: "",
          description: "",
          name: "",
        };
    },

    /**
     * Contient l'information d'une etape du formulaire selectionné.
     * par defaut, etape 0;
     */
    formDatas: (state, getters) => {
      if (getters.form.forms) {
        return getters.form.forms[state.stepsIndex];
      } else {
        return {
          info: {
            headerTitle: "",
            title: "",
            name: "",
            states: [],
          },
          fields: [],
        };
      }
    },
    /**
     * uid de l'utilisateur qui est connecté.
     */
    uid: (state) => {
      if (state.user && state.user.uid) {
        return state.user.uid[0].value;
      } else return 0;
    },
  },
  mutations: {
    // Ajouter une étapes dans le JSON global
    ADD_STEPS_DATAS(state, payload) {
      state.allStepsDatas.push(payload);
    },
    CHANGE_MODE(state) {
      state.mode = !state.mode;
    },
    RESET_FORM_DATAS(state) {
      state.formDatas = {
        info: {
          headerTitle: "",
          title: "",
          name: "",
          states: [],
        },
        fields: [],
      };
      state.fields = {
        type: "checkbox",
        title: "",
        label: "Plusieurs choix possible.",
        name: "",
        value: [],
        selected: "",
        imgUrl: "",
        require: true,
        options: [],
      };
    },
    RESET_FIELDS(state) {
      state.fields = {
        type: "checkbox",
        title: "",
        label: "",
        name: "",
        value: [],
        selected: "",
        imgUrl: "",
        require: true,
        options: [],
      };
    },
    ADD_FIELDS(getters, payload) {
      class proto {
        constructor(hauteur) {
          this.hauteur = hauteur;
        }
      }
      var raq = new proto(payload);
      var sh = {};
      for (let i in raq.hauteur) {
        sh[i] = raq.hauteur[i];
      }
      console.log("ADD_FIELDS : ", getters);
      //state.formDatas.fields.push(sh);
    },

    SUIVANT(state) {
      state.stepsIndex++;
    },
    SET_ITEMS(state, payload) {
      state.items = payload;
    },
    SET_TRAITEMENT_ITEMS(state, payload) {
      state.traitementItems = payload;
    },
    SET_FORM_ID(state, payload) {
      state.formId = payload;
      state.idSoumission = null;
    },
    SET_TRAIT_ID(state, payload) {
      state.traitementId = payload;
    },
    SET_FORM(state) {
      for (const i in state.items) {
        if (state.items[i].id === state.formId) {
          const form = state.items[i];
          form.forms = JSON.parse(form.forms);
          state.form = form;
          break;
        }
      }
    },
    STEPS_INDEX(state, i) {
      state.stepsIndex = i;
    },
    SET_FORM_DATAS_VALIDATE(state, value) {
      console.log(" MAJ de SET_FORM_DATAS_VALIDATE ");
      state.formDatasValidate = value;
    },
    SET_STEPS_INDEXS(state, value) {
      state.stepsIndexs = value;
    },
    ADD_STEPS_INDEXS(state, value) {
      console.log("state.stepsIndexs : ", state.stepsIndexs, "\n :: ", value);
      state.stepsIndexs.push(value);
    },
    REMOVE_STEPS_INDEXS(state) {
      console.log("remove stepIndex in array ");
      if (state.stepsIndexs.length) state.stepsIndexs.splice(-1, 1);
    },
    /**
     * Ajout du prix de l'etape.
     */
    AJOUT_PRIX_STEPS(state, prix) {
      state.price += prix;
    },
    AJOUT_PRIX_AIDE_STEPS(state, prix) {
      state.priceAide += prix;
    },
    /**
     * Retire le prix de l'etape.
     */
    REMOVE_PRIX_STEPS(state, prix) {
      state.price -= prix;
    },
    REMOVE_PRIX_AIDE_STEPS(state, prix) {
      state.priceAide -= prix;
    },
    SET_STATUS_STEPS_INDEX(state, val) {
      state.StatusStepsIndexs = val;
    },
    SET_ID_SOUMISSION(state, val) {
      state.idSoumission = val;
    },
    SET_USER(state, user) {
      state.user = user;
    },
    SET_CACHEUSER(state, user) {
      state.CachesUser["uid" + user.uid] = user.user;
    },
  },
  actions: {
    addSetpsDatas({ commit }, payload) {
      commit("ADD_STEPS_DATAS", payload);
      commit("RESET_FORM_DATAS");
    },
    addFields({ commit }, payload) {
      //console.log("objecte", payload);
      commit("ADD_FIELDS", payload);
      commit("RESET_FIELDS");
    },
    /**
     * Elle definit la logique permettant de passer à une autre etape.
     * apres, la MAJ de l'etape, les calculs de couts doivent patiente jusqu'à la MAJ de formDatasValidate et executé la suite du code.
     */
    async stepsIndex({ commit, getters }, i) {
      // on determine le cout de l'etape:
      const price = await utilities.getPriceStape(
        getters.formDatas,
        getters.form.forms
      );
      if (price > 0) {
        commit("AJOUT_PRIX_STEPS", price);
      }
      // On determine le cout d'aide de l'etape.
      const priceAide = await utilities.getPriceStape(
        getters.formDatas,
        getters.form.forms,
        "aide_financiere"
      );
      if (priceAide > 0) {
        commit("AJOUT_PRIX_AIDE_STEPS", priceAide);
      }
      //
      const new_index = await utilities.selectNextState(getters.form.forms, i);
      if (new_index) {
        await commit("STEPS_INDEX", new_index);
        commit("ADD_STEPS_INDEXS", new_index);
        // On verifie si on est sur la derniere etape.
        if (getters.form.forms.length === new_index + 1) {
          commit("SET_STATUS_STEPS_INDEX", false);
        }
      } else {
        commit("SET_STATUS_STEPS_INDEX", false);
      }
    },

    // Apres, la MAJ de l'etape, les calculs de couts doivent patiente jusqu'à la MAJ de formDatasValidate et executé la suite du code.
    async stepsBack({ commit, state, getters }) {
      await commit("REMOVE_STEPS_INDEXS");
      let new_index = state.stepsIndexs[state.stepsIndexs.length - 1];
      if (!new_index) new_index = 0;
      await commit("STEPS_INDEX", new_index);

      //activation du bouton submit
      if (!state.StatusStepsIndexs) {
        commit("SET_STATUS_STEPS_INDEX", true);
      }
      //remove price states
      const price = await utilities.getPriceStape(
        getters.formDatas,
        getters.form.forms
      );
      if (price > 0) {
        console.log("Retranche prix : ", price);
        commit("REMOVE_PRIX_STEPS", price);
      }
      //remove price states aide
      const priceAide = await utilities.getPriceStape(
        getters.formDatas,
        getters.form.forms,
        "aide_financiere"
      );
      console.log(
        "back stape ",
        getters.formDatas.info.name,
        "\n priceAide - ",
        priceAide
      );
      if (priceAide > 0) {
        console.log("Retranche l'aide financiere : ", priceAide);
        commit("REMOVE_PRIX_AIDE_STEPS", priceAide);
      }
    },
    resetFormDatas({ commit }) {
      //commit("NEW_PAGE");
      commit("RESET_FORM_DATAS");
    },
    suivant({ commit }) {
      commit("SUIVANT");
    },
    changeMode({ commit }) {
      commit("CHANGE_MODE");
    },
    setForm({ commit }) {
      commit("SET_FORM");
    },
    setFormId({ commit }, payload) {
      commit("SET_FORM_ID", payload);
    },
    setTraitId({ commit }, payload) {
      commit("SET_TRAIT_ID", payload);
    },
    /**
     * Recupere les formulaires en BD.
     */
    loadStepsDatas({ commit }) {
      var datas = "select * from `appformmanager_fomrs`";
      axios
        .post(config.baseURl + "/query-ajax/select", datas)
        .then((reponse) => {
          console.log("get loadStepsDatas: ", reponse);
          commit("SET_ITEMS", reponse.data);
        })
        .catch((error) => {
          console.log("get error ", error);
        });
    },
    /**
     * Recupere les formulaires soumis en BD.
     */
    loadTraitementDatas({ commit }, payload) {
      commit("SET_TRAITEMENT_ITEMS", []);
      return new Promise((resolv, reject) => {
        var uid = payload.uid ? payload.uid : null;
        var id = payload.id ? payload.id : null;
        var pagination = payload.pagination ? payload.pagination : 0;
        console.log("loadTraitementDatas uid : ", uid, " id : ", id);
        var datas =
          " select * from `appformmanager_datas` where `appformmanager_forms` = " +
          id;
        if (uid) {
          datas += " AND `uid` = " + uid;
        }
        if (pagination)
          datas += " order by id DESC limit 20 OFFSET " + pagination;
        else datas += " order by id DESC limit 20";
        config
          .getData(datas)
          .then((reponse) => {
            console.log("get traitement Items: ", reponse);
            commit("SET_TRAITEMENT_ITEMS", reponse.data);
            resolv(reponse.data);
          })
          .catch((error) => {
            console.log("get error ", error);
            reject(error);
          });
      });
    },
    /**
     * Permet de modifier la structure du formulaire.
     */
    setItems({ commit }, payload) {
      commit("SET_ITEMS", payload);
    },
    /**
     *  --
     */
    setFormDatasValidate({ commit }, payload) {
      commit("SET_FORM_DATAS_VALIDATE", payload);
    },
    /**
     *  --
     */
    setStepsIndexs({ commit }, payload) {
      commit("SET_STEPS_INDEXS", payload);
    },
    /**
     *  --
     */
    setStatusStepsIndex({ commit }, payload) {
      commit("SET_STATUS_STEPS_INDEX", payload);
    },
    /**
     * Enregistre les données et cree le compte utilisateur.
     */
    async saveDatasUser({ commit, state, getters }, status = 0) {
      //on valide les données utilisateur,
      console.log("saveDatasUser : ", commit, state);
      if (!getters.uid) {
        var statusName = {},
          statusEmail = {},
          statusPassword = {};
        statusName = await state.userlogin.name.ref.validate();
        if (state.userlogin.tabIndex === "register") {
          //var statusTelephone = await state.userlogin.telephone.ref.validate();
          statusEmail = await state.userlogin.email.ref.validate();
        } else {
          console.log(
            "state.userlogin.password.ref : ",
            state.userlogin.password.ref
          );
          statusPassword = await state.userlogin.password.ref.validate();
        }
        if (statusName.valid && (statusEmail.valid || statusPassword.valid)) {
          var datas = [],
            url = null,
            msg = "";
          if (state.userlogin.tabIndex === "register") {
            datas = {
              name: [{ value: state.userlogin.name.value }],
              mail: [{ value: state.userlogin.email.value }],
            };
            url = "/fr/user/register?_format=json";
            msg =
              "Votre devis a été sauvegardé et votre compte a été  crée. Un mail a été envoyé dans votre boite email afin de valider votre compte.";
          } else {
            datas = {
              name: [{ value: state.userlogin.name.value }],
              password: [{ value: state.userlogin.password.value }],
            };
            url = "/appformmanager/user";
            msg = "Votre devis a été sauvegardé";
          }
          const displayMsg = () => {
            config.modalSuccess(msg, {
              title: "Devis sauvegardé",
              footerClass: "d-none",
            });
            setTimeout(function () {
              window.location.assign("/node/52");
            }, 3000);
          };
          drupalUtilities
            .post(url, datas)
            .then((resp) => {
              //console.log("drupalUtilities : ", resp);
              //On verifie s'il y'a eut redirection.
              if (
                resp.reponse &&
                resp.reponse.config.url !== resp.reponse.request.responseURL
              ) {
                displayMsg();
              } else if (resp.data) {
                var uid = resp.data.uid[0].value;
                utilities.saveDatas(state, getters, uid, status).then(() => {
                  displayMsg();
                });
              }
            })
            .catch((errors) => {
              /*
              console.log(
                "Error GET drupalUtilities : ",
                errors,
                "\n error.response :",
                errors.response,
                "\n error.request ",
                errors.request
              );
              /**/
              //On verifie s'il y'a eut redirection.
              if (
                errors.response.config.url !==
                errors.response.request.responseURL
              ) {
                displayMsg();
              } else if (
                errors.error &&
                errors.error.data &&
                errors.error.data.errors
              ) {
                for (const i in errors.error.data.errors) {
                  const error = errors.error.data.errors[i].split(":");
                  if (error[0] == "mail") {
                    error[0] = "email";
                  }
                  if (state.userlogin[error[0]]) {
                    state.userlogin[error[0]].ref.setErrors([error[1]]);
                  }
                }
              } else
                state.userlogin.email.ref.setErrors([
                  "Une erreur s'est produite.",
                ]);
            });
        }
      } else
        utilities.saveDatas(state, getters, getters.uid, status).then(() => {
          config.modalSuccess("Votre devis a été sauvegardé, ", {
            title: "Devis",
            footerClass: "d-none",
          });
          setTimeout(function () {
            window.location.reload();
          }, 3000);
        });
    },
    saveDatas({ commit, state, getters }, uid = 0) {
      if (!uid) {
        uid = getters.uid;
      }
      utilities.saveDatas(state, getters, uid).then((response) => {
        console.log("Données stocké du store", response);
        if (state.idSoumission === null) {
          commit("SET_ID_SOUMISSION", response.data[0].result);
        }
      });
    },
    getCurrentUser({ commit }) {
      users.getCurrentUser().then((resp) => {
        commit("SET_USER", resp);
      });
    },
    setCachesUser({ commit }, user) {
      commit("SET_CACHEUSER", user);
    },
  },
  modules: {},
});
