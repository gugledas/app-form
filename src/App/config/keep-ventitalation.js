const field = {};

// Isolation
// ||-------------------------------------------------------
// Calcul de l'aide finnacire via le champs nombre de personne.
async function aideFinnaceVentilation() {
  //Recuperation le choix de base
  var choixventilation = self.getFieldInForms(
    "type_de_ventillation_souhait",
    "un_seul_choix_possible"
  );
  // Recuperation de l'indice de tranche de revenu.
  const get_field_niveau_revenu = (niveau) => {
    return self.getFieldInForms(
      "tranche_de_revenus",
      "niveau_revenu_" + niveau
    );
  };
  var field_niveau_revenu = null;
  if (field.value >= 1 && field.value <= 5) {
    field_niveau_revenu = await get_field_niveau_revenu(field.value);
  } else {
    field_niveau_revenu = await get_field_niveau_revenu(6);
  }
  var priceTotal = 0;
  var value = "";
  if (choixventilation.value) {
    value = "simple_flux";
    // Prix en function du niveau
    var priceParNiveau = {};
    if (choixventilation.value.includes(value)) {
      priceParNiveau = {
        niveau1: 4441,
        niveau2: 3220,
        niveau3: 2220,
        niveau4: 220,
      };
      priceTotal += priceParNiveau[field_niveau_revenu.value];
    }
    //
    value = "double_flux";
    if (choixventilation.value.includes(value)) {
      priceParNiveau = {
        niveau1: 342,
        niveau2: 171,
        niveau3: 171,
        niveau4: 171,
      };
      priceTotal += priceParNiveau[field_niveau_revenu.value];
    }
    //
    return priceTotal;
  } else return 0;
}
aideFinnaceVentilation();

async function BudgetChauffage() {
  console.log("init BudgetChauffage");
  //Recuperation le choix de base
  var choixventilation = self.getFieldInForms(
    "type_de_ventillation_souhait",
    "un_seul_choix_possible"
  );
  const getLabelOption = (val) => {
    for (const i in choixventilation.options) {
      const item = choixventilation.options[i];
      if (item.value == val) {
        return "<span>" + item.text + "</span>";
      }
    }
  };
  var priceTotal = "<div><ul class='list-price'>";
  var value = "";
  console.log(choixventilation);
  if (choixventilation.value) {
    value = "simple_flux";
    if (choixventilation.value.includes(value)) {
      priceTotal += "<li class=''>";
      priceTotal += getLabelOption(value);
      priceTotal += "<span class='price'> 3000-4000 € </span>";
      priceTotal += "</li>";
    }
    value = "double_flux";
    if (choixventilation.value.includes(value)) {
      priceTotal += "<li>";
      priceTotal += getLabelOption(value);
      priceTotal += "<span class='price'> 1000-2000 € </span>";
      priceTotal += "</li>";
    }
    priceTotal += "</div></ul>";
    return priceTotal;
  } else return 0;
}
BudgetChauffage();
