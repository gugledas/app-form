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
        state.fields.push({
          ...item.jsonfield,
          id: item.id,
          stepes: item.stepes,
        });
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
      // var datas =
      //   " select f.id, f.machine_name, f.formid, f.jsonfield, f.uid, aps.info  from `appformmanager_fields` as f ";
      // datas +=
      //   " left join `appformmanager_steps_fields` as apsf ON apsf.formid = f.formid and apsf.machine_name = f.machine_name ";
      // datas +=
      //   " left join `appformmanager_steps` as aps ON aps.stepid = apsf.stepid ";
      if (state.filtre.formid) {
        // datas +=
        //   " where f.formid='" + state.filtre.formid + "' order by f.id DESC ";
        var payload = {
          filters: {
            AND: [],
          },
        };
        payload.filters.AND.push({
          column: "formid",
          value: state.filtre.formid,
          preffix: "f",
        });
        return config
          .bPost("/appformmanager/load-fields", payload)
          .then((r) => {
            commit("SET_FIELDS", r.data);
            state.loaders.GestionField = false;
            dispatch("GetFieldsDefault");
          })
          .catch(() => {
            state.loaders.GestionField = false;
            state.loaders.GestionFieldFiltre = false;
          });
      }
    },
    GetFieldsDefault({ state }) {
      // var datas =
      //   " select f.defaultjson from `appformmanager_steps_fields` as f ";
      if (state.filtre.formid !== "") {
        // datas +=
        //   " where f.defaultjson is not null and f.formid=" +
        //   state.filtre.formid +
        //   "  order by f.stepid ASC  ";
        var payload = {
          filters: {
            AND: [],
          },
        };
        payload.filters.AND.push({
          column: "formid",
          value: state.filtre.formid,
          preffix: "f",
        });
        return config
          .bPost("/appformmanager/load-fields-default", payload)
          .then((r) => {
            r.data.forEach((item) => {
              state.fields.push({
                ...item.defaultjson,
                formid: state.filtre.formid,
                stepes: item.stepes,
              });
            });
            state.loaders.GestionFieldFiltre = false;
          })
          .catch(() => {
            state.loaders.GestionFieldFiltre = false;
          });
      }
    },
    SetFiltre({ commit }, filtre) {
      commit("SET_FILTRE", filtre);
    },
  },
};
