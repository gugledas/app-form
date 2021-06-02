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
  Action() {
    return [
      {
        text: "Ce champs est visible",
        value: "visible",
      },
      {
        text: "Ce champs est caché",
        value: "hidden",
      },
    ];
  },
};

export default validation;
