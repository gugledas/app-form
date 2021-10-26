import Vue from "vue";
import Vuex from "vuex";
import utilities from "./utilities.js";
import { drupalUtilities, users } from "drupal-vuejs";
import config from "../App/config/config.js";

Vue.use(Vuex);
drupalUtilities.TestDomain = "http://lesroisdelareno.habeuk.com";
users.TestDomain = "http://lesroisdelareno.habeuk.com";
export default new Vuex.Store({
  state: {
    /* contient les information de la page d'afficha des formulaires */
    pageInfo: {
      title: "",
      video: "",
      description: "",
      showVideo: false,
    },
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
    /**
     * Contient le formulaire selectionné par le client.
     */
    form: {
      id: "",
      forms: "",
      description: "",
      name: "",
    },
    /**
     * Contient la liste des champs.
     */
    fields: [],
    /**
     * Permet de filtrer les champs reçu.
     */
    filtre: {
      formid: "",
    },
    /**
     * - permet d'afficher un loader, si necessaire.
     */
    loaders: {
      GestionField: false,
    },
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
     * Contient l'information d'une etape du formulaire selectionné.
     * par defaut, etape 0;
     */
    formDatas: (state) => {
      if (state.form.forms && state.form.forms[state.stepsIndex]) {
        return state.form.forms[state.stepsIndex];
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
    SET_PAGE_INFO(state, payload) {
      var setting = null;
      if (payload.length) setting = payload[0].value;
      var type = typeof setting;
      if (setting !== null && type === "string") {
        state.pageInfo = JSON.parse(setting);
      }
    },
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
    },

    SUIVANT(state) {
      state.stepsIndex++;
    },
    SET_ITEMS(state, payload) {
      state.items = payload;
      console.log("payload : ", payload);
    },
    SET_CURRRENT_FORM(state, payload) {
      state.form = payload;
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
    /**
     * Cette function doit etre supprimer.
     * @param {*} state
     */
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
      //console.log(" MAJ de SET_FORM_DATAS_VALIDATE ");
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
    SET_FIELDS(state, fields) {
      fields.forEach((item) => {
        state.fields.push(item);
      });
    },
  },
  actions: {
    addSetpsDatas({ commit }, payload) {
      commit("ADD_STEPS_DATAS", payload);
      commit("RESET_FORM_DATAS");
    },
    /**
     * Elle definit la logique permettant de passer à une autre etape.
     * apres, la MAJ de l'etape, les calculs de couts doivent patiente jusqu'à la MAJ de formDatasValidate et executé la suite du code.
     */
    async stepsIndex({ commit, getters, state }, i) {
      // on determine le cout de l'etape:
      const price = await utilities.getPriceStape(
        getters.formDatas,
        state.form.forms
      );
      if (price > 0) {
        commit("AJOUT_PRIX_STEPS", price);
      }
      // On determine le cout d'aide de l'etape.
      const priceAide = await utilities.getPriceStape(
        getters.formDatas,
        state.form.forms,
        "aide_financiere"
      );
      if (priceAide > 0) {
        commit("AJOUT_PRIX_AIDE_STEPS", priceAide);
      }
      //
      const new_index = await utilities.selectNextState(state.form.forms, i);
      if (new_index) {
        await commit("STEPS_INDEX", new_index);
        commit("ADD_STEPS_INDEXS", new_index);
        // On verifie si on est sur la derniere etape.
        if (state.form.forms && state.form.forms.length === new_index + 1) {
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
        state.form.forms
      );
      if (price > 0) {
        console.log("Retranche prix : ", price);
        commit("REMOVE_PRIX_STEPS", price);
      }
      //remove price states aide
      const priceAide = await utilities.getPriceStape(
        getters.formDatas,
        state.form.forms,
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
    loadFormsDatas({ commit }) {
      commit("SET_ITEMS", []);
      var datas =
        "select f.id,f.name,f.description,f.img,f.forms from `appformmanager_fomrs` as f ";
      return config.getData(datas).then((reponse) => {
        commit("SET_ITEMS", reponse.data);
      });
    },
    /**
     * Charge les etpes du formulaire selectionnée.
     * Pour reduire la charge direct de chargement on va decouper le chargement par bloc.;
     * @param {*} param0
     * @param {*} payload
     */
    loadStepsDatas({ commit, state }, payload) {
      commit("SET_CURRRENT_FORM", {});
      const loadProgressiveDate = (pagination = 0) => {
        return new Promise((resolv) => {
          config
            .getData(
              payload,
              false,
              "/appformmanager/getforms-steps/" + pagination
            )
            .then((rep) => {
              if (rep.data && rep.data[0] && rep.data[0].id) {
                //si cest le premier passage, on met en place le formulaire avec quelques champs.
                if (!pagination) {
                  var steps = [];
                  rep.data.forEach((step) => {
                    steps.push(step.step);
                  });
                  var result = {
                    id: rep.data[0].id,
                    name: rep.data[0].name,
                    description: rep.data[0].description,
                    img: rep.data[0].img,
                    forms: steps,
                  };
                  commit("SET_CURRRENT_FORM", result);
                } else {
                  rep.data.forEach((step) => {
                    state.form.forms.push(step.step);
                  });
                }
                // on incremente de +1
                pagination += 1;
                resolv(loadProgressiveDate(pagination));
              } else resolv(null);
            });
        });
      };
      return loadProgressiveDate();
    },
    loadStepsDatas00({ commit, state }, payload) {
      commit("SET_CURRRENT_FORM", {});
      const nbreItems = 10;
      const loadProgressiveDate = (pagination = 0) => {
        return new Promise((resolv) => {
          var datas =
            " select f.id,f.name,f.description,f.img,f.forms, st.step from `appformmanager_fomrs` as f ";
          datas +=
            " left join appformmanager_fomrs_steps as st ON st.formid = f.id ";
          datas += " where f.id='" + payload.formId + "'";
          datas +=
            " order by st.order ASC limit " +
            nbreItems +
            " OFFSET " +
            pagination;
          config.getData(datas).then((rep) => {
            if (rep.data[0] && rep.data[0].id) {
              // Ce bloc est à supprimer.
              rep.data[0].forms = JSON.parse(rep.data[0].forms);
              if (
                rep.data[0] &&
                rep.data[0].forms &&
                rep.data[0].forms.length > 0
              ) {
                alert("not clen");
                commit("SET_CURRRENT_FORM", rep.data[0]);
                resolv("null");
                return false;
              }
              //si cest le premier passage, on met en place le formulaire avec quelques champs.
              if (!pagination) {
                var steps = [];
                rep.data.forEach((step) => {
                  steps.push(JSON.parse(step.step));
                });
                var result = {
                  id: rep.data[0].id,
                  name: rep.data[0].name,
                  description: rep.data[0].description,
                  img: rep.data[0].img,
                  forms: steps,
                };
                commit("SET_CURRRENT_FORM", result);
              } else {
                console.log("Autre requet : ", rep.data);
                rep.data.forEach((step) => {
                  state.form.forms.push(JSON.parse(step.step));
                });
              }
              // Si le resultat est egal au nombre d'element il est possible que des données existe encore.
              if (nbreItems === rep.data.length) {
                pagination += nbreItems;
                resolv(loadProgressiveDate(pagination));
              } else resolv(null);
            } else resolv(null);
          });
        });
      };
      return loadProgressiveDate();
    },
    /**
     * Recupere les paramètres de la page d'entrée.
     */
    loadPageInfo({ commit }) {
      var datas = "select * from `appformmanager_config`";
      config.getData(datas).then((reponse) => {
        console.log("get pageInfo: ", reponse);
        commit("SET_PAGE_INFO", reponse.data);
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
        //console.log("loadTraitementDatas uid : ", uid, " id : ", id);
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
            //console.log("get traitement Items: ", reponse);
            commit("SET_TRAITEMENT_ITEMS", reponse.data);
            resolv(reponse.data);
          })
          .catch((error) => {
            //console.log("get error ", error);
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
      var self = this,
        datas = [],
        url = null,
        msg = "";
      /**
       *
       * @param {Array} text
       * @returns
       */
      var msgCreate = function (texts) {
        var h =
          self.$createElement !== undefined
            ? self.$createElement
            : self._vm.$createElement;
        const text = [];
        for (const i in texts) {
          text.push(
            h(
              "p",
              {
                domProps: {
                  innerHTML: texts[i],
                },
                style: {
                  lineHeight: "25px",
                  fontSize: "17px",
                  padding: "15px 15px 0px",
                  margin: 0,
                },
              },
              []
            )
          );
        }
        return h("div", {}, [text]);
      };
      /**
       *
       * @param { return msgCreate } msg
       * @param { string } title
       * @param { Boolean } statusMsg
       */
      var displayMsg = (msg, title = "Devis sauvegardé", statusMsg = true) => {
        config.CustomModalSuccess(msg, {
          title: title,
          footerClass: "d-none",
          headerBgVariant: statusMsg ? "success" : "danger",
          headerTextVariant: "light",
        });
        if (statusMsg)
          setTimeout(function () {
            window.location.assign("/");
          }, 7000);
      };
      //On valide les données utilisateur,
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
          statusPassword = await state.userlogin.password.ref.validate();
        }
        if (statusName.valid && (statusEmail.valid || statusPassword.valid)) {
          // Inscription d'un utilisateur.
          if (state.userlogin.tabIndex === "register") {
            datas = {
              name: [{ value: state.userlogin.name.value }],
              mail: [{ value: state.userlogin.email.value }],
              field_prenom: [{ value: state.userlogin.prenom.value }],
              field_telephone: [{ value: state.userlogin.telephone.value }],
            };

            url = "/fr/user/register?_format=json";
            msg = msgCreate([
              config.messages.devisRappel,
              config.messages.devisCreateUser,
              config.messages.devisEnd,
            ]);
          }
          // Connexion d'un utilisateur
          else {
            datas = {
              name: [{ value: state.userlogin.name.value }],
              password: [{ value: state.userlogin.password.value }],
            };
            url = "/appformmanager/user";
            msg = msgCreate([config.messages.devisRappel]);
          }

          drupalUtilities
            .dPost(url, datas)
            .then((resp) => {
              //On verifie s'il y'a eut redirection.
              if (
                resp.reponse &&
                resp.reponse.config.url !== resp.reponse.request.responseURL
              ) {
                users.getCurrentUser().then((userData) => {
                  console.log(" Utilisateur : ", userData);
                  if (userData.uid && userData.uid[0].value)
                    utilities
                      .saveDatas(state, userData.uid[0].value, status)
                      .then(() => {
                        displayMsg(msg);
                      });
                  else {
                    msg = msgCreate([" Une erreur s'est produite "]);
                    displayMsg(msg, "Erreur de connexion", false);
                  }
                });
              } else if (resp.data) {
                var uid = resp.data.uid[0].value;
                utilities.saveDatas(state, uid, status).then(() => {
                  displayMsg(msg);
                });
              }
            })
            .catch((errors) => {
              msg = msgCreate([
                errors.error && errors.error && errors.error.statusText
                  ? "<strong>" + errors.error.statusText + "</strong>"
                  : "Une erreur s'est produite",
              ]);
              if (!url.includes("register"))
                displayMsg(msg, "Erreur de connexion", false);
              console.log("errors.response ", errors, "\n", errors.error);
              //On verifie s'il y'a eut redirection.
              if (
                errors.response &&
                errors.response.config &&
                errors.response.request &&
                errors.response.config.url !==
                  errors.response.request.responseURL
              ) {
                //
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
      }
      // Si l'utilisateur est connecté.
      else {
        utilities.saveDatas(state, getters, getters.uid, status).then(() => {
          if (status) displayMsg(msgCreate([config.messages.devisSave]));
          else displayMsg(msgCreate([config.messages.devisRappel]));
        });
      }
    },
    saveDatas({ commit, state, getters }, uid = 0) {
      if (!uid) {
        uid = getters.uid;
      }
      utilities.saveDatas(state, uid).then((response) => {
        //console.log("Données stocké du store", response);
        if (state.idSoumission === null) {
          commit("SET_ID_SOUMISSION", response.data[0].result);
        }
      });
    },
    getCurrentUser({ commit }) {
      return users.getCurrentUser().then((resp) => {
        commit("SET_USER", resp);
      });
    },
    setCachesUser({ commit }, user) {
      commit("SET_CACHEUSER", user);
    },
    /**
     * Recupere les champs.
     * @param {*} param0
     */
    GetFields({ commit, state }, payload = "") {
      state.loaders.GestionField = true;
      var datas = " select * from `appformmanager_fields` as f ";
      if (payload.id) {
        datas += " where f.id='" + payload.id + "'";
      } else {
        state.fields = [];
        if (state.filtre.formid.length > 0) {
          datas += " where f.formid='" + state.filtre.formid + "'";
        }
      }
      return config.getData(datas).then((reponse) => {
        commit("SET_FIELDS", reponse.data);
        state.loaders.GestionField = false;
      });
    },
  },
  modules: {},
});
