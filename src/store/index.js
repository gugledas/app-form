import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    month: 8,
    day: 12,
    year: 2008,
    allStepsDatas: [],
    formDatas: {
      info: {
        headerTitle: "Tous les travaux",
        title:
          "Quels travaux d’isolation souhaitez-vous réaliser et aussi tout ce qu'il faut pour que sa 0?",
        name: "level1",
      },
      fields: [],
    },
    fields: { type: null, label: "", name: "", require: true, options: [] },
  },
  mutations: {
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
      state.formDatas.fields.push(state.fields);
    },
    NEW_PAGE(state) {
      state.allStepsDatas.push(state.formDatas);
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
  },
  modules: {},
});
