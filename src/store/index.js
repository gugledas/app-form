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
    fields: {
      type: "",
      title: "",
      label: "",
      name: "",
      value: [],
      selected: "",
      imgUrl: "",
      require: true,
      options: [],
    },
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
  },
  getters: {
    /**
     * Contient le formulaire selectionné par le client.
     */
    form: (state) => {
      if (state.items.length && state.formId !== null) {
        console.log("MAJ de form");
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
        return {};
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
    DELETE_STEPS_IN_ALL_STEPS(state) {
      var all = state.allStepsDatas;
      var r = all.indexOf(state.formDatas);
      console.log("de", r);
      for (var i = all.length - 1; i >= 0; i--) {
        if (i === r) {
          all.splice(i, 1);
          console.log("iiippp");
          if (all.length > state.stepsIndex + 1) {
            state.formDatas = all[state.stepsIndex];
          } else {
            state.formDatas = all[state.stepsIndex - 1];
          }
        }
      }
    },
    RESET_FORM_DATAS(state) {
      state.formDatas = {
        info: {
          headerTitle: "",
          title: "",
          name: "",
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
    NEW_PAGE(state) {
      state.allStepsDatas.push(state.formDatas);
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
  },
  actions: {
    deleteStepsInAllSteps({ commit }) {
      commit("DELETE_STEPS_IN_ALL_STEPS");
    },
    addSetpsDatas({ commit }, payload) {
      commit("ADD_STEPS_DATAS", payload);
      commit("RESET_FORM_DATAS");
    },
    addFields({ commit }, payload) {
      console.log("objecte", payload);
      commit("ADD_FIELDS", payload);
      commit("RESET_FIELDS");
    },
    newPage({ commit }) {
      commit("NEW_PAGE");
      commit("RESET_FORM_DATAS");
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
    loadStepsDatas({ commit }) {
      //this.datasBdOrLocalStorage();
      //var self = this;
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
  },
  modules: {},
});
