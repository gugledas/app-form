import config from "../App/config/config.js";

export default {
  forms: [],
  /**
   * Selectionne la prochaine etape valide.
   * @param forms array etape du formualire;
   * @param i indice de letape encours.
   */
  selectNextState(forms, i) {
    var j = i + 1;
    this.forms = forms;
    for (const k in this.forms) {
      let kk = parseInt(k);
      if (kk >= j) {
        j = null;
        const form = this.forms[k];
        if (this.validateState(form.states)) {
          //console.log("etape valide : ", k);
          return kk;
        } else {
          //console.log("etape non valide : ", k);
        }
      }
    }
    return j;
  },

  validateState(states) {
    if (!states || states.length === 0) return true;
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
                  //console.log("state :: ", state.value, "\n", field.value);
                  if (field.value) {
                    return field.value.includes(state.value) ? true : false;
                  } else {
                    return false;
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  getFieldInForms(state_name, field_name) {
    for (const i in this.forms) {
      const form = this.forms[i];
      if (form.info.name === state_name) {
        for (const f in form.fields) {
          const field = form.fields[f];
          if (field.name === field_name) {
            return field;
          }
        }
      }
    }
  },
  /**
   * Permet de recuperer le prix pour une etape.
   * deux methode de calcul sont definit, une methode UI et une methode code.
   */
  async getPriceStape(formDatas, forms) {
    var self = this;
    var price = 0;
    this.forms = forms;
    //on parcout les champs de l'etape, afin de determiner le cout associé à chaque champs.
    for (const i in formDatas.fields) {
      const field = formDatas.fields[i];
      if (field.prix) {
        if (
          field.prix.complex_logique === undefined ||
          !field.prix.complex_logique
        ) {
          price += await this.getPriceForField(field);
          // si cest un champs composé.
          if (field.prix && field.prix.components.length) {
            var price2 = await this.getPriceFieldInState(forms, field);
            if (price2) {
              price += price2 * price;
            }
          }
        } else if (field.prix.complex_logique) {
          if (field.none__) {
            self;
          }
          const datas_logique = await eval(field.prix.datas_logique);
          console.log(" Field.prix : ", datas_logique);
          price += parseInt(datas_logique);
        }
      }
    }
    return price;
  },
  /**
   * Il faut s'assurer au prealable que field.prix.components est definit.
   */
  async getPriceFieldInState(forms, field, priceFinal = 0) {
    return new Promise((resolvParent) => {
      //on parcout les options de prix.
      const getFieldInState = () => {
        return new Promise((resolv) => {
          for (const c in field.prix.components) {
            const component = field.prix.components[c];
            for (const s in forms) {
              const form = forms[s];
              // on verifie que cest la bonne etape.
              if (form.info.name == component.state_name) {
                // On parcourt les champs;
                for (const f in form.fields) {
                  const fieldState = form.fields[f];
                  // On s'assure que c'est le champs qui a ete selectionné par l'utilisateur.
                  if (fieldState.name == component.name) {
                    resolv(fieldState);
                    break;
                  }
                }
                break;
              }
            }
            var j = parseInt(c) + 1;
            if (j === field.prix.components.length) {
              resolv(false);
            }
          }
        });
      };
      getFieldInState().then((fieldState) => {
        if (fieldState)
          this.getPriceForField(fieldState, true).then((priceField) => {
            priceFinal += priceField;
            resolvParent(priceFinal);
          });
        else resolvParent(priceFinal);
      });
      //
    });
  },
  /**
   * Retorune toujours un entier.
   */
  getPriceForField(field, use = false, priceFinal = 0) {
    return new Promise((resolvParent) => {
      const execution = (price = 0) => {
        return new Promise((resolv) => {
          if (field.prix && (field.prix.action === "prix_utilisables" || use)) {
            var typeDatas = typeof field.value;
            // Cas des champs type selection.
            if (config.typeSelection.includes(field.type)) {
              for (const fp in field.options) {
                if (typeDatas === Object) {
                  if (
                    field.value.includes(field.options[fp].value) &&
                    field.options[fp].cout
                  ) {
                    price += parseInt(field.options[fp].cout);
                  }
                } else if (field.options[fp].value === field.value) {
                  price += parseInt(field.options[fp].cout);
                  break;
                }
              }
            } // Cas des champs text et number.
            else if (
              field.prix.cout &&
              field.value !== null &&
              field.value !== ""
            ) {
              if (!isNaN(field.value)) {
                price += parseInt(field.prix.cout) * parseInt(field.value);
              } else {
                price += parseInt(field.prix.cout);
              }
            }
            resolv(price);
          } else {
            resolv(price);
          }
        });
      };
      execution().then((priceField) => {
        console.log(
          field.name,
          " :: ",
          priceField,
          " :: ",
          field.value,
          "\n\n"
        );
        if (!isNaN(priceField)) {
          priceFinal += priceField;
        } else {
          console.log(
            "%c error du processus de calcul : " + field.name,
            "background: #222; color: #F00; font-size:15px;"
          );
        }
        resolvParent(priceFinal);
      });
    });
  },

  saveDatas(state, getters, uid = 0) {
    return new Promise((resolv) => {
      config
        .saveStepsDatas(state.idSoumission, getters.form, state.price, uid)
        .then((val) => {
          config.saveForm(val).then((response) => {
            resolv(response);
          });
        });
    });
  },
  deleteForm(id) {
    config.deleteForm(id);
  },
};
