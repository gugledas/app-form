export default {
  price() {
    return {
      action: "", //prix_utilisables| prix_referentiels
      cout: 0, // valeur decimal;
      // Contient les champs permettant de faire la multiplication des couts
      // self, represente le champs lui meme.
      // le type de champs, doit etre de type 'prix_referentiels'
      components: [],
    };
  },
  optionsAction() {
    return [
      {
        text: "prix_utilisables",
        value: "prix_utilisables",
      },
      {
        text: "prix_referentiels",
        value: "prix_referentiels",
      },
    ];
  },
};
