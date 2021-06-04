export default {
  /**
   * Selectionne la prochaine etape valide.
   */
  selectNextState(state, getters, i) {
    const j = i + 1;
    console.log("selectNextState : ", state, "\n", getters, "\n", i);
    const forms = getters.form.forms;
    for (const k in forms) {
      let kk = parseInt(k);
      if (kk >= j) {
        const form = forms[k];
        if (this.validateState(form.states)) {
          return kk;
        }
      }
    }
    return j;
  },
  validateState(states) {
    if (!states) return true;
  },
};
