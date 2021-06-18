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
  /**
   * Permet de recuperer le prix pour une etape.
   */
  async getPriceStape(formDatas, forms) {
    var price = 0;
    //on parcout les champs de l'etape, afin de determiner le cout associé à chaque champs.
    for (const i in formDatas.fields) {
      price += await this.getPriceForField(formDatas.fields[i]);
      // si cest un champs composé.
      if (
        formDatas.fields[i].prix &&
        formDatas.fields[i].prix.components.length
      ) {
        var price2 = await this.getPriceFieldInState(
          forms,
          formDatas.fields[i]
        );
        if (price2) {
          price += price2 * price;
        }
      }
    }
    return price;
  },
  /**
   * il faut s'assurer au prealable que field.prix.components est definit
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
              alert(field.type);
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
  getPriceStape__(getters) {
    for (const i in getters.formDatas.fields) {
      const currentfield = getters.formDatas.fields[i];
      //On parcourt les champs afin de determiner s'ils ont un cout.
      if (
        currentfield.prix &&
        currentfield.prix.action === "prix_utilisables"
      ) {
        const coutDeBase = parseInt(currentfield.prix.cout);
        if (!currentfield.prix.components.length) {
          return coutDeBase;
        }

        // On determine le cout final en fonction des relations definits;
        var price = 0;
        for (const c in currentfield.prix.components) {
          const component = currentfield.prix.components[c];
          //on parcourt les etapes.
          for (const s in getters.form.forms) {
            const form = getters.form.forms[s];
            // on verifie que cest la bonne etape.
            if (form.info.name == component.state_name) {
              // on parcourt les champs;
              for (const f in form.fields) {
                const field = form.fields[f];
                //on s'assure que c'est le champs qui a ete selectionné par l'utilisateur.
                if (field.name == component.name) {
                  // On verifie si le champs est le meme et different d'un champs de type selection.
                  // voir l'example 1;
                  if (config.typeSelection.includes(field.type)) {
                    if (component.value) {
                      for (const ot in field.options) {
                        const optionOt = field.options[ot];
                        /*
                        alert(
                          optionOt.value +
                            " :: " +
                            component.value +
                            " ==> cout : " +
                            optionOt.cout
                        );
                        /**/
                        if (
                          optionOt.value === component.value &&
                          optionOt.cout &&
                          optionOt.cout !== ""
                        ) {
                          price += parseInt(optionOt.cout);
                          break;
                        }
                      }
                    }
                  } else if (component.name == currentfield.name) {
                    price += coutDeBase * currentfield.value;
                  }
                  // On verifie si les options sont definits.
                  else if (component.value) {
                    for (const o in field.options) {
                      const option = field.options[o];
                      if (option.value === component.value) {
                        if (option.cout) {
                          price += currentfield.value * option.cout;
                          alert(price);
                        }
                      }
                    }
                  } else {
                    price += currentfield.value * field.prix.cout;
                  }
                }
              }
              break;
            }
          }
        }
        return price;
      }
    }
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
