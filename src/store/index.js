import Vue from "vue";
import Vuex from "vuex";

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
     * Contient le formulaire selectionné par le client.
     */
    /*
    form: {
      id: "",
      forms: "",
      description: "",
      name: "",
    },
    /**/
    /**
     * Contient la liste des formulaire recupere de la BD.
     */
    items: [],
    /**
     * Contient l'id du formulaire selectionné.
     */
    formId: null,
    /**
     * permet de determiner le status des champs sur une etape
     */
    formDatasValidate: {},
  },
  getters: {
    /**
     * Contient le formulaire selectionné par le client.
     */
    form: (state) => {
      if (state.items.length && state.formId !== null) {
        const form = state.items[state.formId];
        form.forms = JSON.parse(form.forms);
        return form;
      }
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
    SET_FORM_ID(state, payload) {
      state.formId = payload;
    },
    SET_FORM(state) {
      const form = state.items[state.formId];
      form.forms = JSON.parse(form.forms);
      state.form = form;
    },
    STEPS_INDEX(state, i) {
      state.stepsIndex = i;
    },
    SET_FORM_DATAS_VALIDATE(state, value) {
      console.log(" MAJ de SET_FORM_DATAS_VALIDATE ");
      state.formDatasValidate = value;
    },
  },
  actions: {
    addSetpsDatas({ commit }, payload) {
      commit("ADD_STEPS_DATAS", payload);
      commit("RESET_FORM_DATAS");
    },
    addFields({ commit }, payload) {
      console.log("objecte", payload);
      commit("ADD_FIELDS", payload);
      commit("RESET_FIELDS");
    },

    stepsIndex({ commit }, i) {
      commit("STEPS_INDEX", i);
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
    /**
     * Recupere les formulaires en BD.
     */
    loadStepsDatas({ commit }) {
      var datas = "select * from `appformmanager_fomrs`";
      axios
        .post("http://lesroisdelareno.kksa" + "/query-ajax/select", datas)
        .then((reponse) => {
          console.log("get loadStepsDatas: ", reponse);
          commit("SET_ITEMS", reponse.data);
        })
        .catch((error) => {
          console.log("get error ", error);
        });
    },
    /**
     * Permet de modifier la structure du formulaire.
     */
    setItems({ commit }, payload) {
      commit("SET_ITEMS", payload);
    },

    setFormDatasValidate({ commit }, payload) {
      commit("SET_FORM_DATAS_VALIDATE", payload);
    },
  },
  modules: {},
});
