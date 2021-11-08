// Pour plus d'info voir le fichier src/store/utilities.js
const field = {};

async function budgetIsolationPlangeVide() {
  const SurfacePlangerSousSol = self.getFieldInForms(
    "quelle_est_la_surface_de_plancher_sur_sous_sol_ou_garage_isoler",
    "surface_au_sol_isoler_sous_sol"
  );
  var PriseSurfaceSousSol = 0;
  if (SurfacePlangerSousSol.value > 0)
    PriseSurfaceSousSol = await self.getPriceForField(
      SurfacePlangerSousSol,
      true,
      0,
      "prix_referentiels"
    );

  const SurfacePlangerVide = self.getFieldInForms(
    "de_plancher_sur_vide_sanitaire_isoler",
    "surface_au_sol_isoler_planger_vide"
  );
  var PriseSurfacePlangerVide = 0;
  if (SurfacePlangerVide.value > 0)
    PriseSurfacePlangerVide = await self.getPriceForField(
      SurfacePlangerVide,
      true,
      0,
      "prix_referentiels"
    );

  const CoutCoef_finition = await self.getPriceForField(
    field,
    true,
    0,
    "prix_referentiels"
  );

  const coef_isolant_biosource = self.getFieldInForms(
    "isolant_biosourc_vide_sanitaire",
    "isolant_biossourc_planger_vid"
  );
  const CoutCoef_isolant_biosource = await self.getPriceForField(
    coef_isolant_biosource,
    true,
    0,
    "prix_referentiels"
  );
  return (
    PriseSurfaceSousSol * CoutCoef_finition +
    PriseSurfacePlangerVide * CoutCoef_finition * CoutCoef_isolant_biosource
  );
}
budgetIsolationPlangeVide();
// Isolation
// ||-------------------------------------------------------
// Calcul de l'aide finnacire via le champs nombre de personne.
async function aideFinnaceIsolationPlangevide() {
  var SurfacePlangerSousSol = self.getFieldInForms(
    "quelle_est_la_surface_de_plancher_sur_sous_sol_ou_garage_isoler",
    "surface_au_sol_isoler_sous_sol"
  );
  SurfacePlangerSousSol =
    SurfacePlangerSousSol.value > 0 ? SurfacePlangerSousSol.value : 0;
  var SurfacePlangerVide = self.getFieldInForms(
    "de_plancher_sur_vide_sanitaire_isoler",
    "surface_au_sol_isoler_planger_vide"
  );
  SurfacePlangerVide =
    SurfacePlangerVide.value > 0 ? SurfacePlangerVide.value : 0;
  // recupere le choix de la tranche des revenus.
  const get_field_niveau_revenu = (niveau) => {
    return self.getFieldInForms(
      "tranche_de_revenus_plange_de_vide",
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
  return (
    Revenu_1pers *
    (parseFloat(SurfacePlangerSousSol) + parseFloat(SurfacePlangerVide))
  );
}
aideFinnaceIsolationPlangevide();

// Isolation
// ||-------------------------------------------------------
// Calcul de l'aide finnacire via le champs nombre de personne.
async function aideFinnaceIsolationMurExt() {
  const SurfaceComble = self.getFieldInForms(
    "surface_isoler_par_l_ext_rieur",
    "surface_mur_isoler_ext"
  ).value;
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
