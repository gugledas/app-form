import config from "../App/config/config.js";

export default {
  forms: [],

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
          console.log("etape en cours : ", j, " : ", forms[j].info);
          if (!forms[j]) {
            resolv(null);
          }
          if (forms[j].states && forms[j].states.length > 0)
            self.validateState(forms[j].states).then((rep) => {
              console.log(" Status final de validation : ", rep);
              if (rep) {
                resolv(j);
              } else {
                let ii = j + 1;
                console.log(" Passage à letape suivante ", ii);
                resolv(loop(ii));
              }
            });
          else resolv(j);
        });
      };
      loop(k).then((r) => {
        resolvParent(r);
      });
    });
  },
  /**
   * Validation des conditions.
   * @param {*} states
   * @returns
   */
  validateStateNone(states) {
    return new Promise((resolv) => {
      if (!states || states.length === 0) resolv(true);
      // On parcourt toutes les etapes.
      for (const k in this.forms) {
        // On recupere la premiere etape et on verifie si on doit l'afficher ou pas.
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
                  // Action à verifier
                  if (state.operator === "egal") {
                    if (field.value) {
                      console.log(
                        field.name + " : valeur : " + field.value,
                        " \n condition à valider : ",
                        state.value
                      );
                      let staValidation = field.value.includes(state.value);
                      console.log(
                        " Condition de validation : ",
                        staValidation,
                        "\n "
                      );
                      resolv(staValidation);
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
  /**
   * Validation des conditions.
   * @param {*} states
   * @returns
   */
  validateState(states) {
    return new Promise((resolvPrent) => {
      if (!states || states.length === 0) resolvPrent(true);
      const loopSteps = (key) => {
        return new Promise((resolv) => {
          console.log("loopSteps : ", key, " : ", states[key]);
          const state = states[key];
          if (!state) resolv(false);
          if (state.action === "visible") {
            //on parcourt chaque etape dans le but de recherche si ce cette etape corrospont à celui definit dans states.
            const loopFomrs = (k) => {
              return new Promise((resolvForms) => {
                const form = this.forms[k];
                if (form.info.name === state.state_name) {
                  //console.log("check 1");
                  // si dans l'etape, il nya pas de champs, on renvoit false;
                  if (!form.fields || form.fields.length === 0)
                    resolvForms(true);
                  // Recherche du champs.
                  for (const f in form.fields) {
                    const field = form.fields[f];
                    // Identification du champs.
                    if (field.name === state.name) {
                      //console.log("check 2");
                      // Action à verifier
                      if (state.operator === "egal") {
                        if (field.value) {
                          let staValidation = field.value.includes(state.value);
                          // on renvoit le status.
                          resolvForms(staValidation);
                        } else {
                          resolvForms(false);
                        }
                      } //superieur à;
                      else if (state.operator === ">") {
                        if (field.value) {
                          let staValidation =
                            field.value > state.value ? true : false;
                          // on renvoit le status.
                          resolvForms(staValidation);
                        } else {
                          resolvForms(false);
                        }
                      } else if (state.operator === "<") {
                        if (field.value) {
                          let staValidation =
                            field.value < state.value ? true : false;
                          // on renvoit le status.
                          resolvForms(staValidation);
                        } else {
                          resolvForms(false);
                        }
                      }
                      //
                      else {
                        resolvForms(false);
                        break;
                      }
                      // si on a un champs qui correspond, on ne verifie plus les autres champs.
                      break;
                    } else {
                      // si on a parcourut tous les champs sans trouvé d'elment correspondant, on renvoit false.
                      var ff = parseInt(f) + 1;
                      if (ff >= form.fields.length) {
                        resolvForms(false);
                      }
                    }
                  }
                }
                // si ces pas le bonne on passe à l'etape suivnte
                else {
                  if (this.forms.length > k + 1) {
                    resolvForms(loopFomrs(k + 1));
                  }
                  // si cest la derniere on renvoit null
                  else {
                    resolvForms(false);
                  }
                }
              });
            };
            loopFomrs(0).then((StatusForm) => {
              // si cette condition est validé, on passe à la condition suivante.(sauf s'il nya pas d'etape suivante.)
              if (StatusForm) {
                if (states[key + 1]) {
                  resolv(loopSteps(key + 1));
                } else resolv(StatusForm);
              }
              // Si l'etape n'est pas validé, pas besoin de regarder la suite.
              else resolv(StatusForm);
            });
          } else resolv(false);
        });
      };
      loopSteps(0).then((status) => {
        resolvPrent(status);
      });
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
          (field.prix.complex_logique === undefined ||
            !field.prix.complex_logique) &&
          type_cout == field.prix.action
        ) {
          var priceCurrentField = await this.getPriceForField(
            field,
            false,
            0,
            type_cout
          );
          // si cest un champs composé.
          if (field.prix && field.prix.components.length) {
            var price2 = await this.getPriceFieldInState(
              forms,
              field,
              0,
              type_cout
            );
            if (price2) {
              price += price2 * priceCurrentField;
            }
          }
        } else if (
          field.prix.complex_logique &&
          field.prix.action === type_cout
        ) {
          if (self) {
            const datas_logique = await eval(field.prix.datas_logique);
            price += parseInt(datas_logique);
          }
        }
      }
    }
    return price;
  },
  /**
   * Permet de recuperer les prix associer à un champs, parcourt les differents champs definit dans field.prix.components
   */
  async getPriceFieldInState(
    forms,
    field,
    priceFinal = 0,
    type_cout = "prix_utilisables"
  ) {
    return new Promise((resolvParent) => {
      const AllPromise = [];
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
                AllPromise.push(
                  this.getPriceForField(fieldState, true, 0, type_cout)
                );
                break;
              }
            }
            break;
          }
        }
      }
      Promise.all(AllPromise).then((values) => {
        let price = 1;
        values.forEach((p) => {
          price = price * p;
        });
        priceFinal += price;
        resolvParent(priceFinal);
      });
    });
  },
  /**
   * Retorune toujours un entier.
   * on doit s'assurer en amont que le type de champs soit valide.( i.e type_cout == field.prix.action )
   */
  getPriceForField(
    field,
    use = false,
    priceFinal = 0,
    type_cout = "prix_utilisables"
  ) {
    return new Promise((resolvParent) => {
      const execution = (price = 0) => {
        return new Promise((resolv, reject) => {
          if (
            field.prix &&
            (field.prix.action === type_cout || use) &&
            field.status
          ) {
            var typeDatas = typeof field.value;
            // Cas des champs type selection.
            if (config.typeSelection.includes(field.type)) {
              for (const fp in field.options) {
                if (typeDatas === "object") {
                  if (
                    field.value.includes(field.options[fp].value) &&
                    field.options[fp].cout
                  ) {
                    price += parseFloat(field.options[fp].cout).toFixed(2);
                  }
                } else if (field.options[fp].value === field.value) {
                  price += parseFloat(field.options[fp].cout).toFixed(2);
                  break;
                }
              }
              resolv(price);
            } // Cas des champs text et number.
            else if (
              field.prix.cout &&
              field.value !== null &&
              field.value !== ""
            ) {
              if (!isNaN(field.value)) {
                price +=
                  parseFloat(field.prix.cout).toFixed(2) *
                  parseFloat(field.value).toFixed(2);
              } else {
                price += parseFloat(field.prix.cout).toFixed(2);
              }
              resolv(price);
            } else {
              reject(
                "Erreur dans le champs : " +
                  field.name +
                  " Cas de figure non pris en compte, (type : " +
                  field.type +
                  ")"
              );
            }
          }
          // Si le champs ne respecte pas les regles. on emet une erreur.
          else {
            reject(
              "Erreur dans le champs : " +
                field.name +
                " (" +
                type_cout +
                " est different de " +
                field.prix.action +
                ")"
            );
          }
        });
      };
      execution().then((priceField) => {
        if (!isNaN(priceField)) {
          priceFinal += priceField;
        }
        resolvParent(priceFinal);
      });
    });
  },

  saveDatas(state, uid = 0, status = 2) {
    return new Promise((resolv) => {
      config.saveStepsDatas(state, uid, status).then((val) => {
        config
          .saveForm(val, state.mode, "/appformmanager/save-soumissions")
          .then((response) => {
            resolv(response);
          });
      });
    });
  },
  deleteForm(id) {
    config.deleteForm(id);
  },
};
