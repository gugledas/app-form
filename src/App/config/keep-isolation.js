// Pour plus d'info voir le fichier src/store/utilities.js
const field = {};
// Isolation
// ||-------------------------------------------------------
// Calcul de l'aide finnacire via le champs nombre de personne.
async function aideFinnaceIsolationMurExt() {
  const SurfaceComble = self.getFieldInForms(
    "surface_isoler_par_l_ext_rieur",
    "surface_mur_isoler_ext"
  ).value;
  console.log(" SurfaceComble : ", SurfaceComble, "\n Field : ", field);
  // recupere le choix de la tranche des revenus.
  const get_field_niveau_revenu = (niveau) => {
    return self.getFieldInForms(
      "tranche_de_revenus_mur_exterieur",
      "niveau_revenu_" + niveau
    );
  };
  // calcul pour les valeurs statiques.
  var field_niveau_revenu = null;
  if (field.value >= 1 && field.value <= 5) {
    field_niveau_revenu = await get_field_niveau_revenu(field.value);
  } else {
    field_niveau_revenu = await get_field_niveau_revenu(6);
  }

  let Revenu_1pers = await self.getPriceForField(
    field_niveau_revenu,
    true,
    0,
    "prix_referentiels"
  );
  return Revenu_1pers * parseFloat(SurfaceComble);
}
aideFinnaceIsolationMurExt();
// Isolation
// ||-------------------------------------------------------
// Calcul de l'aide finnacire via le champs nombre de personne.
async function aideFinnaceIsolationMurInt() {
  const SurfaceComble = self.getFieldInForms(
    "connaissez_vous_la_surface_de_mur_isoler",
    "surface_mur_isoler"
  ).value;
  console.log(" SurfaceComble : ", SurfaceComble, "\n Field : ", field);
  // recupere le choix de la tranche des revenus.
  const get_field_niveau_revenu = (niveau) => {
    return self.getFieldInForms(
      "tranche_de_revenus_mur_interieur",
      "niveau_revenu_" + niveau
    );
  };
  // calcul pour les valeurs statiques.
  var field_niveau_revenu = null;
  if (field.value >= 1 && field.value <= 5) {
    field_niveau_revenu = await get_field_niveau_revenu(field.value);
  } else {
    field_niveau_revenu = await get_field_niveau_revenu(6);
  }

  let Revenu_1pers = await self.getPriceForField(
    field_niveau_revenu,
    true,
    0,
    "prix_referentiels"
  );
  return Revenu_1pers * parseFloat(SurfaceComble);
}
aideFinnaceIsolationMurInt();
// Isolation
// ||-------------------------------------------------------
// Calcul de l'aide finnacire via le champs nombre de personne.
async function aideFinnaceIsolationToiTerrase() {
  const SurfaceComble = self.getFieldInForms(
    "quelle_est_la_surface_de_toit_terrasse_accessible_isoler",
    "surface_au_sol_isoler"
  ).value;
  console.log(" SurfaceComble : ", SurfaceComble, "\n Field : ", field);
  // recupere le choix de la tranche des revenus.
  const get_field_niveau_revenu = (niveau) => {
    return self.getFieldInForms(
      "tranche_de_revenus_toi_terrase",
      "niveau_revenu_" + niveau
    );
  };
  // calcul pour les valeurs statiques.
  var field_niveau_revenu = null;
  if (field.value >= 1 && field.value <= 5) {
    field_niveau_revenu = await get_field_niveau_revenu(field.value);
  } else {
    field_niveau_revenu = await get_field_niveau_revenu(6);
  }

  let Revenu_1pers = await self.getPriceForField(
    field_niveau_revenu,
    true,
    0,
    "prix_referentiels"
  );
  return Revenu_1pers * parseFloat(SurfaceComble);
}
aideFinnaceIsolationToiTerrase();
// Isolation
// ||-------------------------------------------------------
// Calcul de l'aide finnacire via le champs nombre de personne.
async function aideFinnaceIsolationComPerdu() {
  const SurfaceComble = self.getFieldInForms(
    "la_surface_de_combles_perdus_isoler",
    "surface_combles_perdus_isoler"
  ).value;
  console.log(" SurfaceComble : ", SurfaceComble, "\n Field : ", field);
  // recupere le choix de la tranche des revenus.
  const get_field_niveau_revenu = (niveau) => {
    return self.getFieldInForms(
      "tranche_de_revenus_comble_perdu",
      "niveau_revenu_" + niveau
    );
  };
  // calcul pour les valeurs statiques.
  var field_niveau_revenu = null;
  if (field.value >= 1 && field.value <= 5) {
    field_niveau_revenu = await get_field_niveau_revenu(field.value);
  } else {
    field_niveau_revenu = await get_field_niveau_revenu(6);
  }

  let Revenu_1pers = await self.getPriceForField(
    field_niveau_revenu,
    true,
    0,
    "prix_referentiels"
  );
  return Revenu_1pers * parseFloat(SurfaceComble);
}
aideFinnaceIsolationComPerdu();

// Isolation
// ||-------------------------------------------------------
// Calcul de l'aide finnacire via le champs nombre de personne.
async function aideFinnaceIsolationCombAPI() {
  const SurfaceComble = self.getFieldInForms(
    "les_dimensions_de_vos_combles",
    "surface_de_vos_combles"
  ).value;
  console.log(" SurfaceComble : ", SurfaceComble, "\n Field : ", field);
  // recupere le choix de la tranche des revenus.
  const get_field_niveau_revenu = (niveau) => {
    return self.getFieldInForms(
      "tranche_de_revenus_comble_amg_int",
      "niveau_revenu_" + niveau
    );
  };
  // calcul pour les valeurs statiques.
  var field_niveau_revenu = null;
  if (field.value >= 1 && field.value <= 5) {
    field_niveau_revenu = await get_field_niveau_revenu(field.value);
  } else {
    field_niveau_revenu = await get_field_niveau_revenu(6);
  }

  let Revenu_1pers = await self.getPriceForField(
    field_niveau_revenu,
    true,
    0,
    "prix_referentiels"
  );
  return Revenu_1pers * parseFloat(SurfaceComble);
}
aideFinnaceIsolationCombAPI();
