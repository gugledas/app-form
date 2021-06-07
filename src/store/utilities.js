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
  getPriceStape(getters) {
    for (const i in getters.formDatas.fields) {
      const currentfield = getters.formDatas.fields[i];
      //On parcourt les champs afin de determiner s'ils ont un cout.
      if (
        currentfield.prix &&
        currentfield.prix.action === "prix_utilisables"
      ) {
        const coutDeBase = currentfield.prix.cout;
        if (!currentfield.prix.components.length) {
          return coutDeBase;
        }
        // On determine le cout final en fonction des relations definits;
        var price = 0;
        for (const c in currentfield.prix.components) {
          const component = currentfield.prix.components[c];
          for (const s in getters.form.forms) {
            const form = getters.form.forms[s];
            //on determine le formulaire utilisé.
            if (form.info.name == component.state_name) {
              for (const f in form.fields) {
                const field = form.fields[f];
                //on determine le champs utilisé
                if (field.name == component.name) {
                  // On verifie si cest le meme champs.
                  if (component.name == currentfield.name) {
                    price += coutDeBase * currentfield.value;
                  }
                  // On verifie si les options sont definits.
                  else if (component.value) {
                    for (const o in field.options) {
                      const option = field.options[o];
                      if (option.value === component.value) {
                        if (option.cout) {
                          price += currentfield.value * option.cout;
                        }
                      }
                    }
                  } else {
                    price += currentfield.value * field.prix.cout;
                  }
                }
              }
            }
          }
        }
        return price;
      }
    }
  },
};
