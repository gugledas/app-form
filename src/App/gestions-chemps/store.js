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
      GestionFieldFiltre: false,
    },
  }),
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
    GetFields({ commit, state, dispatch }) {
      state.loaders.GestionField = true;
      state.loaders.GestionFieldFiltre = true;
      state.fields = [];
      var datas = " select * from `appformmanager_fields` as f ";
      if (state.filtre.formid) {
        datas += " where f.formid='" + state.filtre.formid + "'";
        return config.getData(datas).then((r) => {
          console.log("GetFields : ", r);
          commit("SET_FIELDS", r.data);
          state.loaders.GestionField = false;
          dispatch("GetFieldsDefault");
        });
      }
    },
    GetFieldsDefault({ state }) {
      var datas =
        " select f.defaultjson from `appformmanager_steps_fields` as f ";

      if (state.filtre.formid !== "") {
        datas +=
          " where f.defaultjson is not null and f.formid=" +
          state.filtre.formid;
        return config.getData(datas).then((r) => {
          r.data.forEach((item) => {
            state.fields.push({
              jsonfield: item.defaultjson,
            });
          });

          state.loaders.GestionFieldFiltre = false;
        });
      }
    },
    SetFiltre({ commit }, filtre) {
      commit("SET_FILTRE", filtre);
    },
  },
};
