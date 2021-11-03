import config from "./config.js";
const validationRessource = {
  conditions() {
    return {
      action: "",
      name: "",
      operator: "",
      value: "",
      state_name: "",
    };
  },
  listsOperators() {
    return [
      {
        text: "Validé",
        value: "validated",
      },
      {
        text: "non vide",
        value: "not_empty",
      },
      {
        text: " vide",
        value: "empty",
      },
      {
        text: "la valeur du champs est egal à",
        value: "egal",
      },
      {
        text: "la valeur du champs est superieur à",
        value: ">",
      },
    ];
  },
  Action(val = "Ce champs") {
    return [
      {
        text: val + " est visible",
        value: "visible",
      },
      {
        text: val + " est caché",
        value: "hidden",
      },
    ];
  },
  /**
   * Validation des champs.
   * Retourne false, pour desactiver.
   * NB: formDatasValidate prend plus de temps pour ce mettre à jour.
   */
  computedValidation: function (formDatas, currentField, formDatasValidate) {
    for (const i in formDatas.fields) {
      const field = formDatas.fields[i];
      if (field.name !== currentField.name) {
        for (const j in currentField.states) {
          const state = currentField.states[j];

          // si le champs n'est pas definit on retourne false;
          if (formDatasValidate[state.name] === undefined) {
            return null;
          }
          if (field.name === state.name) {
            // visible
            if (state.action === "visible") {
              if (field.value === "" && state.operator === "not_empty")
                return false;
              else if (field.value !== "" && state.operator === "empty")
                return false;
              else if (
                state.operator === "validated" &&
                formDatasValidate[field.name]
              )
                return formDatasValidate[field.name].valid;
              else if (state.operator === "egal") {
                if (field.value) {
                  if (
                    config.typeSelection.includes(field.type) &&
                    field.value.includes
                  ) {
                    return field.value.includes(state.value) ? true : false;
                  } else {
                    const x = new String(field.value);
                    const y = new String(state.value);
                    return x.localeCompare(y) === 0 ? true : false;
                  }
                } else {
                  return false;
                }
              } else if (state.operator === ">") {
                if (field.value) {
                  const x = parseInt(field.value);
                  const y = parseInt(state.value);
                  return y < x ? true : false;
                } else {
                  return false;
                }
              }
            }
          }
        }
      }
    }
  },

  /**
   * Retourne la liste des etapes.
   */
  listesEtapes(form, formDatas, etapes = []) {
    if (form && form.forms.length > 1) {
      for (const i in form.forms) {
        const currentForm = form.forms[i];
        if (currentForm.info.name !== "") {
          etapes.push({
            text: "(" + i + ") " + currentForm.info.title,
            value: currentForm.info.name,
          });
        }
      }
    }
  },
  getFormStateByName(state_name, forms) {
    for (const i in forms) {
      const form = forms[i];
      if (form.info.name === state_name) {
        return form;
      }
    }
  },
  getFieldByName(name, fields) {
    for (const i in fields) {
      if (fields[i].name === name) {
        return fields[i];
      }
    }
  },
};

class ValidationInstance {
  constructor() {
    //
    this.StepeValidationOptions = [];
  }
  //Retourne les etapes sous forme de listes.
  listeDesChamps(condition, form, fields = []) {
    if (condition.state_name && condition.state_name !== "") {
      var currentForm = validationRessource.getFormStateByName(
        condition.state_name,
        form.forms
      );
      if (currentForm !== undefined) {
        for (const i in currentForm.fields) {
          const field = currentForm.fields[i];
          if (condition.name == field.name && field.options.length) {
            this.StepeValidationOptions = field.options;
          }
          fields.push({ text: field.label, value: field.name });
        }
      }
    }
  }
}
/**/

export { validationRessource, ValidationInstance };
