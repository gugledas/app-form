import config from "../App/config/config.js";

export default {
  forms: [],
  /**
   * Selectionne la prochaine etape valide.
   * @param forms array etape du formualire;
   * @param i indice de letape encours.
   */
  /*
  selectNextStateOld(forms, i) {
    var j = i + 1;
    this.forms = forms;
    return new Promise(resolv => {
      for (const k in this.forms) {
        let kk = parseInt(k);
        if (kk >= j) {
          const form = this.forms[k];

          this.validateState(form.states).then(rep => {
            console.log("selectNextState : ", kk, " response : ", rep);
            if (rep) resolv(kk);
          });
        }
        var ii = kk + 1;
        if (this.forms.length === ii) {
          console.log("selectNextState END : ", kk);
          resolv(null);
        }
      }
      if (!forms) {
        resolv(null);
      }
    });
  },
  /**/
  /**
   * Selectionne l'indice de la prochaine etape valide.
   * @param forms array etape du formualire;
   * @param i indice de letape encours.
   */
  selectNextState(forms, i) {
    var k = i + 1;
    this.forms = forms;
    var self = this;
    return new Promise((resolvParent) => {
      const loop = function (j) {
        return new Promise((resolv) => {
          if (!forms[j]) {
            resolv(null);
          }
          self.validateState(forms[j].states).then((rep) => {
            //console.log("selectNextState : ", j, " response : ", rep);
            if (rep) {
              resolv(j);
            } else {
              resolv(loop(j + 1));
            }
          });
        });
      };
      loop(k).then((r) => {
        resolvParent(r);
      });
    });
  },

  validateState(states) {
    return new Promise((resolv) => {
      if (!states || states.length === 0) resolv(true);
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
                      resolv(field.value.includes(state.value) ? true : false);
                    } else {
                      resolv(false);
                    }
                  }
                }
              }
            }
          } else {
            resolv(true);
          }
        }
        var ii = parseInt(k) + 1;
        if (this.forms.length === ii) {
          resolv(true);
        }
      }
    });
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
  async getPriceStape(formDatas, forms, type_cout = "prix_utilisables") {
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
          price += await this.getPriceForField(field, false, 0, type_cout);
          // si cest un champs composé.
          if (field.prix && field.prix.components.length) {
            var price2 = await this.getPriceFieldInState(
              forms,
              field,
              0,
              type_cout
            );
            if (price2) {
              price += price2 * price;
            }
          }
        } else if (
          field.prix.complex_logique &&
          field.prix.action === type_cout
        ) {
          if (self) {
            const datas_logique = await eval(field.prix.datas_logique);
            console.log(" Field.prix : ", datas_logique);
            price += parseInt(datas_logique);
          }
        }
      }
    }
    return price;
  },
  /**
   * Il faut s'assurer au prealable que field.prix.components est definit.
   */
  async getPriceFieldInState(
    forms,
    field,
    priceFinal = 0,
    type_cout = "prix_utilisables"
  ) {
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
          this.getPriceForField(fieldState, true, 0, type_cout).then(
            (priceField) => {
              priceFinal += priceField;
              resolvParent(priceFinal);
            }
          );
        else resolvParent(priceFinal);
      });
      //
    });
  },
  /**
   * Retorune toujours un entier.
   */
  getPriceForField(
    field,
    use = false,
    priceFinal = 0,
    type_cout = "prix_utilisables"
  ) {
    return new Promise((resolvParent) => {
      const execution = (price = 0) => {
        return new Promise((resolv) => {
          if (
            field.prix &&
            (field.prix.action === type_cout || use) &&
            field.status
          ) {
            var typeDatas = typeof field.value;
            //console.log("getPriceForField field : ", typeDatas);
            // Cas des champs type selection.
            if (config.typeSelection.includes(field.type)) {
              for (const fp in field.options) {
                if (typeDatas === "object") {
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
        /*
        console.log(
          field.name,
          " :: ",
          priceField,
          " :: ",
          field.value,
          "\n\n"
        );
        /**/
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

  saveDatas(state, getters, uid = 0, status = 0) {
    return new Promise((resolv) => {
      config
        .saveStepsDatas(
          state.idSoumission,
          getters.form,
          state.price,
          uid,
          status
        )
        .then((val) => {
          config.saveForm(val, state.mode).then((response) => {
            resolv(response);
          });
        });
    });
  },
  deleteForm(id) {
    config.deleteForm(id);
  },
};
