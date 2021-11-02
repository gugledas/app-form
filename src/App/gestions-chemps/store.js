// mini store, utilisable uniquement dans l'espace de gestion des champs.
import config from "../config/config.js";
export default {
  state: () => ({
    /**
     * Contient la liste des champs utilisés par le gestionnaire de champs.
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
  }),
  getters: {},
  mutations: {
    SET_FIELDS(state, fields) {
      fields.forEach((item) => {
        state.fields.push(item);
      });
    },
    SET_FILTRE(state, filtre) {
      state.filtre[filtre.key] = filtre.value;
    },
  },
  actions: {
    /**
     * Recupere les champs
     * @param {*} param0
     */
    GetFields({ commit, state }) {
      state.loaders.GestionField = true;
      var datas = " select * from `appformmanager_fields` as f ";
      state.fields = [];
      if (state.filtre.formid.length > 0) {
        datas += " where f.formid='" + state.filtre.formid + "'";
      }
      return config.getData(datas).then((reponse) => {
        commit("SET_FIELDS", reponse.data);
        state.loaders.GestionField = false;
      });
    },
    SetFiltre({ commit }, filtre) {
      commit("SET_FILTRE", filtre);
    },
  },
};
