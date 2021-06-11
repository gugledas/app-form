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
   * Retourne false, pour desactiver.
   */
  computedValidation: function (formDatas, currentField, formDatasValidate) {
    for (const i in formDatas.fields) {
      const field = formDatas.fields[i];
      if (field.name !== currentField.name) {
        for (const j in currentField.states) {
          const state = currentField.states[j];
          // si le champs n'est pas definit on retourne false;
          if (formDatasValidate[state.name] === undefined) return false;
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
                /*
                console.log(
                  "Valeur requise : ",
                  state.value,
                  " :: Valeur du parent",
                  field.value
                );
                /**/
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
  },

  /**
   * Retourne la liste des etapes.
   */
  listesEtapes(form, formDatas, etapes = []) {
    if (form && form.forms.length > 1) {
      //console.log("listesEtapes ");
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
        //console.log("listeDesChamps ", currentForm);
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
