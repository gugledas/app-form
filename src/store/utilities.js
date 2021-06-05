export default {
  forms: [],
  /**
   * Selectionne la prochaine etape valide.
   */
  selectNextState(state, getters, i) {
    const j = i + 1;
    console.log("selectNextState : ", state, "\n", getters, "\n", i);
    this.forms = getters.form.forms;
    for (const k in this.forms) {
      let kk = parseInt(k);
      if (kk >= j) {
        const form = this.forms[k];
        if (this.validateState(form.states)) {
          console.log("etape valide : ", k);
          return kk;
        } else {
          console.log("etape non valide : ", k);
        }
      }
    }
    return j;
  },
  validateState(states) {
    if (!states) return true;
    for (const k in this.forms) {
      const form = this.forms[k];
      for (const s in states) {
        const state = states[s];
        if (state.action === "visible") {
          // Identification de l'etape;
          if (form.info.name === state.state_name) {
            // Recherche du champs.
            for (const f in form.fields) {
              const field = form.fields[f];
              // Identification du champs.
              if (field.name === state.name) {
                // action à verifier
                if (state.operator === "egal") {
                  console.log("state :: ", state.value, "\n", field.value);
                  return field.value.includes(state.value) ? true : false;
                }
              }
            }
          }
        }
      }
    }
  },
};
