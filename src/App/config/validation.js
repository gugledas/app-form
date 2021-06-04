const validation = {
  conditions() {
    return {
      action: "",
      name: "",
      operator: "",
      value: "",
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
            }
          }
        }
      }
    }
  },
};

export default validation;
