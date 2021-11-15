const field = {};
const formDatas = {};
// Isolation
// ||-------------------------------------------------------
// Calcul de l'aide finnacire via le champs nombre de personne.
async function aideFinnaceChauffage() {
  //Recuperation le choix de base
  var choixChauffage = self.getFieldInForms(
    "quels_travaux_souhaitez_vous_r_aliser",
    "plusieurs_choix_possibles"
  );
  // Recuperation de l'indice de tranche de revenu.
  const get_field_niveau_revenu = (niveau) => {
    return self.getFieldInForms(formDatas.info.name, "niveau_revenu_" + niveau);
  };
  var field_niveau_revenu = null;
  if (field.value >= 1 && field.value <= 5) {
    field_niveau_revenu = await get_field_niveau_revenu(field.value);
  } else {
    field_niveau_revenu = await get_field_niveau_revenu(6);
  }
  var priceTotal = 0;
  var value = "";
  if (choixChauffage.value) {
    value = "chaudi_res_granul_s";
    // Prix en function du niveau
    var priceParNiveau = {};
    if (choixChauffage.value.includes(value)) {
      priceParNiveau = {
        niveau1: 14364,
        niveau2: 12364,
        niveau3: 6727,
        niveau4: 2727,
      };
      priceTotal += priceParNiveau[field_niveau_revenu.value];
    }
    //
    value = "pompes_chaleur_g_othermiques_ou_solarothermiques";
    if (choixChauffage.value.includes(value)) {
      priceParNiveau = {
        niveau1: 14364,
        niveau2: 12364,
        niveau3: 6727,
        niveau4: 2727,
      };
      priceTotal += priceParNiveau[field_niveau_revenu.value];
    }
    //
    value = "chauffage_solaire";
    if (choixChauffage.value.includes(value)) {
      priceParNiveau = {
        niveau1: 12364,
        niveau2: 10864,
        niveau3: 6727,
        niveau4: 2727,
      };
      priceTotal += priceParNiveau[field_niveau_revenu.value];
    }
    //
    value = "chaudi_res_b_ches";
    if (choixChauffage.value.includes(value)) {
      priceParNiveau = {
        niveau1: 12364,
        niveau2: 10864,
        niveau3: 5727,
        niveau4: 2727,
      };
      priceTotal += priceParNiveau[field_niveau_revenu.value];
    }
    //
    value = "pompes_chaleur_air_eau";
    if (choixChauffage.value.includes(value)) {
      priceParNiveau = {
        niveau1: 8364,
        niveau2: 7364,
        niveau3: 4727,
        niveau4: 2727,
      };
      priceTotal += priceParNiveau[field_niveau_revenu.value];
    }
    //
    value = "chauffe_eau_solaire";
    if (choixChauffage.value.includes(value)) {
      priceParNiveau = {
        niveau1: 4275,
        niveau2: 3173,
        niveau3: 2137,
        niveau4: 137,
      };
      priceTotal += priceParNiveau[field_niveau_revenu.value];
    }
    //
    value = "po_les_granul_s";
    if (choixChauffage.value.includes(value)) {
      priceParNiveau = {
        niveau1: 3873,
        niveau2: 3173,
        niveau3: 2045,
        niveau4: 545,
      };
      priceTotal += priceParNiveau[field_niveau_revenu.value];
    }
    //
    value = "po_les_b_ches";
    if (choixChauffage.value.includes(value)) {
      priceParNiveau = {
        niveau1: 3373,
        niveau2: 2873,
        niveau3: 1545,
        niveau4: 545,
      };
      priceTotal += priceParNiveau[field_niveau_revenu.value];
    }
    //
    value = "foyers_ferm_s_inserts";
    if (choixChauffage.value.includes(value)) {
      priceParNiveau = {
        niveau1: 2873,
        niveau2: 2073,
        niveau3: 1145,
        niveau4: 545,
      };
      priceTotal += priceParNiveau[field_niveau_revenu.value];
    }
    //
    value = "quipements_solaires_hybrides";
    if (choixChauffage.value.includes(value)) {
      priceParNiveau = {
        niveau1: 2751,
        niveau2: 2125,
        niveau3: 1125,
        niveau4: 125,
      };
      priceTotal += priceParNiveau[field_niveau_revenu.value];
    }
    //
    value = "chaudi_res_gaz_tr_s_haute_performance";
    if (choixChauffage.value.includes(value)) {
      priceParNiveau = {
        niveau1: 2509,
        niveau2: 2109,
        niveau3: 655,
        niveau4: 655,
      };
      priceTotal += priceParNiveau[field_niveau_revenu.value];
    }
    //
    value = "r_seaux_de_chaleur_ou_de_froid";
    if (choixChauffage.value.includes(value)) {
      priceParNiveau = {
        niveau1: 1964,
        niveau2: 1564,
        niveau3: 891,
        niveau4: 491,
      };
      priceTotal += priceParNiveau[field_niveau_revenu.value];
    }
    //
    value = "chauffe_eau_thermodynamique";
    if (choixChauffage.value.includes(value)) {
      priceParNiveau = {
        niveau1: 1368,
        niveau2: 884,
        niveau3: 484,
        niveau4: 84,
      };
      priceTotal += priceParNiveau[field_niveau_revenu.value];
    }
    //
    value = "d_pose_d_une_cuve_fioul";
    if (choixChauffage.value.includes(value)) {
      priceParNiveau = {
        niveau1: 1200,
        niveau2: 800,
        niveau3: 400,
        niveau4: 0,
      };
      priceTotal += priceParNiveau[field_niveau_revenu.value];
    }
    //
    value = "pompes_chaleur_air_air";
    if (choixChauffage.value.includes(value)) {
      priceParNiveau = {
        niveau1: 900,
        niveau2: 450,
        niveau3: 450,
        niveau4: 450,
      };
      priceTotal += priceParNiveau[field_niveau_revenu.value];
    }
    //
    value = "installation_d_un_thermostat_avec_r_g";
    if (choixChauffage.value.includes(value)) {
      priceParNiveau = {
        niveau1: 165,
        niveau2: 165,
        niveau3: 165,
        niveau4: 165,
      };
      priceTotal += priceParNiveau[field_niveau_revenu.value];
    }
    //
    value = "radiateurs_lectriques_performants_en";
    if (choixChauffage.value.includes(value)) {
      priceParNiveau = {
        niveau1: 14364,
        niveau2: 12364,
        niveau3: 6727,
        niveau4: 2727,
      };
      priceTotal += priceParNiveau[field_niveau_revenu.value];
    }
    //
    return priceTotal;
  } else return 0;
}
aideFinnaceChauffage();

async function BudgetChauffage() {
  console.log("init BudgetChauffage");
  //Recuperation le choix de base
  var choixChauffage = self.getFieldInForms(
    "quels_travaux_souhaitez_vous_r_aliser",
    "plusieurs_choix_possibles"
  );
  const getLabelOption = (val) => {
    for (const i in choixChauffage.options) {
      const item = choixChauffage.options[i];
      if (item.value == val) {
        return "<span>" + item.text + "</span>";
      }
    }
  };
  var priceTotal = "<div><ul class='list-price'>";
  var value = "";
  console.log(choixChauffage);
  if (choixChauffage.value) {
    value = "chaudi_res_granul_s";
    if (choixChauffage.value.includes(value)) {
      priceTotal += "<li class=''>";
      priceTotal += getLabelOption(value);
      priceTotal += "<span class='price'> 12 000-25 000 € </span>";
      priceTotal += "</li>";
    }
    value = "pompes_chaleur_g_othermiques_ou_solarothermiques";
    if (choixChauffage.value.includes(value)) {
      priceTotal += "<li>";
      priceTotal += getLabelOption(value);
      priceTotal += "<span class='price'> 15000-25000 € </span>";
      priceTotal += "</li>";
    }
    value = "chauffage_solaire";
    if (choixChauffage.value.includes(value)) {
      priceTotal += "<li>";
      priceTotal += getLabelOption(value);
      priceTotal += "<span class='price'> 15000-20000 € </span>";
      priceTotal += "</li>";
    }
    value = "chaudi_res_b_ches";
    if (choixChauffage.value.includes(value)) {
      priceTotal += "<li>";
      priceTotal += getLabelOption(value);
      priceTotal += "<span class='price'> 8000-15000 € </span>";
      priceTotal += "</li>";
    }
    value = "pompes_chaleur_air_eau";
    if (choixChauffage.value.includes(value)) {
      priceTotal += "<li>";
      priceTotal += getLabelOption(value);
      priceTotal += "<span class='price'> 8000-15000 € </span>";
      priceTotal += "</li>";
    }
    value = "chauffe_eau_solaire";
    if (choixChauffage.value.includes(value)) {
      priceTotal += "<li>";
      priceTotal += getLabelOption(value);
      priceTotal += "<span class='price'> 5000-9000 € </span>";
      priceTotal += "</li>";
    }
    value = "po_les_granul_s";
    if (choixChauffage.value.includes(value)) {
      priceTotal += "<li>";
      priceTotal += getLabelOption(value);
      priceTotal += "<span class='price'> 3000-9000 € </span>";
      priceTotal += "</li>";
    }
    value = "po_les_b_ches";
    if (choixChauffage.value.includes(value)) {
      priceTotal += "<li>";
      priceTotal += getLabelOption(value);
      priceTotal += "<span class='price'> 3000-9000 € </span>";
      priceTotal += "</li>";
    }
    value = "foyers_ferm_s_inserts";
    if (choixChauffage.value.includes(value)) {
      priceTotal += "<li>";
      priceTotal += getLabelOption(value);
      priceTotal += "<span class='price'> 2000-7000 € </span>";
      priceTotal += "</li>";
    }
    value = "quipements_solaires_hybrides";
    if (choixChauffage.value.includes(value)) {
      priceTotal += "<li>";
      priceTotal += getLabelOption(value);
      priceTotal += "<span class='price'> 13000-15000 € </span>";
      priceTotal += "</li>";
    }
    value = "chaudi_res_gaz_tr_s_haute_performance";
    if (choixChauffage.value.includes(value)) {
      priceTotal += "<li>";
      priceTotal += getLabelOption(value);
      priceTotal += "<span class='price'> 3000-12000 € </span>";
      priceTotal += "</li>";
    }
    value = "r_seaux_de_chaleur_ou_de_froid";
    if (choixChauffage.value.includes(value)) {
      priceTotal += "<li>";
      priceTotal += getLabelOption(value);
      priceTotal += "<span class='price'> 3000-12000 € </span>";
      priceTotal += "</li>";
    }
    value = "chauffe_eau_thermodynamique";
    if (choixChauffage.value.includes(value)) {
      priceTotal += "<li>";
      priceTotal += getLabelOption(value);
      priceTotal += "<span class='price'> 2000-5000 € </span>";
      priceTotal += "</li>";
    }
    value = "d_pose_d_une_cuve_fioul";
    if (choixChauffage.value.includes(value)) {
      priceTotal += "<li>";
      priceTotal += getLabelOption(value);
      priceTotal += "<span class='price'> 12000 € </span>";
      priceTotal += "</li>";
    }
    value = "pompes_chaleur_air_air";
    if (choixChauffage.value.includes(value)) {
      priceTotal += "<li>";
      priceTotal += getLabelOption(value);
      priceTotal += "<span class='price'> 3000-12000 € </span>";
      priceTotal += "</li>";
    }
    value = "installation_d_un_thermostat_avec_r_g";
    if (choixChauffage.value.includes(value)) {
      priceTotal += "<li>";
      priceTotal += getLabelOption(value);
      priceTotal += "<span class='price'> 3000-12000 € </span>";
      priceTotal += "</li>";
    }
    priceTotal += "</div></ul>";
    return priceTotal;
  } else return 0;
}
BudgetChauffage();
