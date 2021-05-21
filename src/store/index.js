import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    month: 8,
    day: 12,
    year: 2008,
    stepsIndex: 0,
    allStepsDatas: [],
    formDatas: {
      info: {
        headerTitle: " Tous les travaux",
        title: "Quels travaux d’isolation souhaitez-vous réaliser ?",
        name: "",
      },
      fields: [],
    },
    fields: {
      type: "checkbox",
      label: "Plusieurs choix possible.",
      name: "",
      value: [],
      selected: "",
      imgUrl: "",
      require: true,
      options: [
        {
          label: "Combles aménagés par l'intérieur",
          description:
            "Quels travaux d’isolation souhaitez-vous réaliser et aussi tout ce qu'il",
          value: "Combles aménagés par l'intérieur",
        },
        {
          label: "Combles aménagés pal l'extérieur",
          description:
            "Quels travaux d’isolation souhaitez-vous réaliser et aussi tout ce qu'il",
          value: "Combles aménagés pal l'extérieur",
        },
        {
          label: "Combles perdus",
          description:
            "Quels travaux d’isolation souhaitez-vous réaliser et aussi tout ce qu'il",
          value: "Combles perdus",
        },
        {
          label: "Toit terrasse",
          description:
            "Quels travaux d’isolation souhaitez-vous réaliser et aussi tout ce qu'il",
          value: "Toit terrasse",
        },
        {
          label: "Mur",
          description:
            "Quels travaux d’isolation souhaitez-vous réaliser et aussi tout ce qu'il",
          value: "Mur",
        },
        {
          label: "Planchés de vide sanitaire,sous-sol",
          description:
            "Quels travaux d’isolation souhaitez-vous réaliser et aussi tout ce qu'il",
          value: "Planchés de vide sanitaire,sous-sol",
        },
      ],
    },
  },
  getters: {
    alla() {
      return { val: "alla" };
    },
  },
  mutations: {
    // Ajouter une étapes dans le JSON global
    ADD_STEPS_DATAS(state, payload) {
      state.allStepsDatas.push(payload);
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
    },
    ADD_FIELDS(state) {
      class proto {
        constructor(hauteur) {
          this.hauteur = hauteur;
        }
      }
      var raq = new proto(state.fields);
      var sh = {};
      for (let i in raq.hauteur) {
        sh[i] = raq.hauteur[i];
      }

      console.log("object", sh);
      state.formDatas.fields.push(sh);
    },
    NEW_PAGE(state) {
      state.allStepsDatas.push(state.formDatas);
    },
    SUIVANT(state) {
      state.stepsIndex++;
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
    },
    newPage({ commit }) {
      commit("NEW_PAGE");
      commit("RESET_FORM_DATAS");
    },
    suivant({ commit }) {
      commit("SUIVANT");
    },
  },
  modules: {},
});
