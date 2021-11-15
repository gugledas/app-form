const field = {};
// isolation
//-------------------------------------------------------
// calcul de l'aide finnacire via le champs select.
/**
 * @deprecated
 * @returns
 */
async function calcul() {
  const L = self.getFieldInForms(
    "les_dimensions_de_vos_combles",
    "longueur"
  ).value;
  const l = self.getFieldInForms(
    "les_dimensions_de_vos_combles",
    "largeur"
  ).value;
  const h = self.getFieldInForms(
    "les_dimensions_de_vos_combles",
    "hauteur"
  ).value;
  const s = L * l;
  const PG = (L * l) / 2;
  const RP = Math.sqrt(h * h + (L / 2) * (L / 2)) * h;
  const mitoyen = self.getFieldInForms("mitoyennet", "un_seul_choix").value;
  const priceAide = await self.getPriceForField(
    field,
    false,
    0,
    "aide_financiere"
  );

  var price = 0;
  switch (mitoyen) {
    case "non_mitoyen":
      price = (PG * 2 + RP * 2 + s) * priceAide;
      break;
    case "1_cote":
      price = (PG + RP * 2 + s) * priceAide;
      break;
    case "2_cotes":
      price = (RP * 2 + s) * priceAide;
      break;

    case "3_cotes":
      price = (RP + s) * priceAide;
      break;
  }
  return price;
}
calcul();
//
//-------------------------------------------------------
//
async function calcul2() {
  var price = 0;
  const S = self.getFieldInForms(
    "la_surface_de_combles_perdus_isoler",
    "surface"
  ).value;
  const priceAide = await self.getPriceForField(
    field,
    false,
    0,
    "aide_financiere"
  );
  price = S * priceAide;
  return price;
}
calcul2();
//
//-------------------------------------------------------
//
async function ToitTerrasse() {
  var price = 0;
  const S = self.getFieldInForms(
    "quelle_est_la_surface_de_toit_terrasse_accessible_isoler",
    "surface_au_sol_isoler"
  ).value;
  const priceAide = await self.getPriceForField(
    field,
    false,
    0,
    "aide_financiere"
  );
  price = S * priceAide;
  return price;
}
ToitTerrasse();
//
//-------------------------------------------------------
//
async function MurExt() {
  var price = 0;
  const S = self.getFieldInForms(
    "connaissez_vous_la_surface_de_mur_isoler",
    "surface"
  ).value;
  //
  const priceAide = await self.getPriceForField(
    field,
    false,
    0,
    "aide_financiere"
  );
  //
  if (!S) {
    const L = self.getFieldInForms(
      "les_dimensions_du_mur_isoler",
      "longueur_totale_du_mur_isoler"
    ).value;
    const l = self.getFieldInForms(
      "les_dimensions_du_mur_isoler",
      "hauteur_du_mur_isoler"
    ).value;
    price = L * l;
  } else {
    price = S * priceAide;
  }

  return price;
}
MurExt();
//
//-------------------------------------------------------
//
async function PriElect() {
  var price = 0;
  const S = self.getFieldInForms(
    "lectricit",
    "quels_quipements_d_sirez_vous"
  ).value;
  const priceAide = await self.getPriceForField(
    field,
    false,
    0,
    "aide_financiere"
  );
  price = S * priceAide;
  return price;
}
PriElect();

//
//-------------------------------------------------------
//
async function RevetSol() {
  var price = 0;
  const R_S = self.getFieldInForms(
    "rev_tement_au_sol",
    "quel_est_le_rev_tement_au_sol_actuel"
  );
  const price_R_S = await self.getPriceForField(R_S, true, 0);
  //
  const D_S = self.getFieldInForms(
    "rev_tement_au_sol",
    "quelle_pr_paration_souhaitez_vous"
  );
  const price_D_S = await self.getPriceForField(D_S, true, 0);
  //
  const P_S = self.getFieldInForms(
    "rev_tement_au_sol",
    "quel_nouveau_rev_tement_souhaitez_vous"
  );
  const price_P_S = await self.getPriceForField(P_S, true, 0);
  //
  const S = self.getFieldInForms(
    "rev_tement_au_sol",
    "quelle_est_la_surface_en_m"
  ).value;

  price = S * price_R_S + price_D_S * S + S * price_P_S;
  return price;
}
RevetSol();

//
//-------------------------------------------------------
//
async function RevetSolSDB() {
  var price = 0;
  const R_S = self.getFieldInForms(
    "rev_tement_au_sol_salle_de_bains",
    "quel_est_le_rev_tement_au_sol_actuel"
  );
  const price_R_S = await self.getPriceForField(R_S, true, 0);
  //
  const D_S = self.getFieldInForms(
    "rev_tement_au_sol_salle_de_bains",
    "quelle_pr_paration_souhaitez_vous"
  );
  const price_D_S = await self.getPriceForField(D_S, true, 0);
  //
  const P_S = self.getFieldInForms(
    "rev_tement_au_sol_salle_de_bains",
    "quel_nouveau_rev_tement_souhaitez_vous"
  );
  const price_P_S = await self.getPriceForField(P_S, true, 0);
  //
  const S = self.getFieldInForms(
    "rev_tement_au_sol_salle_de_bains",
    "quelle_est_la_surface_en_m"
  ).value;

  price = S * price_R_S + price_D_S * S + S * price_P_S;
  return price;
}
RevetSolSDB();

//
//-------------------------------------------------------
//
async function RevetSolSALON() {
  var price = 0;
  const R_S = self.getFieldInForms(
    "rev_tement_au_sol_sallon",
    "quel_est_le_rev_tement_au_sol_actuel"
  );
  const price_R_S = await self.getPriceForField(R_S, true, 0);
  //
  const D_S = self.getFieldInForms(
    "rev_tement_au_sol_sallon",
    "quelle_pr_paration_souhaitez_vous"
  );
  const price_D_S = await self.getPriceForField(D_S, true, 0);
  //
  const P_S = self.getFieldInForms(
    "rev_tement_au_sol_sallon",
    "quel_nouveau_rev_tement_souhaitez_vous"
  );
  const price_P_S = await self.getPriceForField(P_S, true, 0);
  //
  const S = self.getFieldInForms(
    "rev_tement_au_sol_sallon",
    "quelle_est_la_surface_en_m"
  ).value;

  price = S * price_R_S + price_D_S * S + S * price_P_S;
  return price;
}
RevetSolSALON();

//
//-------------------------------------------------------
//
async function RevetSolCH() {
  var price = 0;
  const R_S = self.getFieldInForms(
    "rev_tement_au_sol_chambre",
    "quel_est_le_rev_tement_au_sol_actuel"
  );
  const price_R_S = await self.getPriceForField(R_S, true, 0);
  //
  const D_S = self.getFieldInForms(
    "rev_tement_au_sol_chambre",
    "quelle_pr_paration_souhaitez_vous"
  );
  const price_D_S = await self.getPriceForField(D_S, true, 0);
  //
  const P_S = self.getFieldInForms(
    "rev_tement_au_sol_chambre",
    "quel_nouveau_rev_tement_souhaitez_vous"
  );
  const price_P_S = await self.getPriceForField(P_S, true, 0);
  //
  const S = self.getFieldInForms(
    "rev_tement_au_sol_chambre",
    "quelle_est_la_surface_en_m"
  ).value;

  price = S * price_R_S + price_D_S * S + S * price_P_S;
  return price;
}
RevetSolCH();

//
//-------------------------------------------------------
//
async function RevetSolSalManger() {
  var price = 0;
  const R_S = self.getFieldInForms(
    "rev_tement_au_sol_salle_manger",
    "quel_est_le_rev_tement_au_sol_actuel"
  );
  const price_R_S = await self.getPriceForField(R_S, true, 0);
  //
  const D_S = self.getFieldInForms(
    "rev_tement_au_sol_salle_manger",
    "quelle_pr_paration_souhaitez_vous"
  );
  const price_D_S = await self.getPriceForField(D_S, true, 0);
  //
  const P_S = self.getFieldInForms(
    "rev_tement_au_sol_salle_manger",
    "quel_nouveau_rev_tement_souhaitez_vous"
  );
  const price_P_S = await self.getPriceForField(P_S, true, 0);
  //
  const S = self.getFieldInForms(
    "rev_tement_au_sol_salle_manger",
    "quelle_est_la_surface_en_m"
  ).value;

  price = S * price_R_S + price_D_S * S + S * price_P_S;
  return price;
}
RevetSolSalManger();

//
//-------------------------------------------------------
//
async function RevetSolCouloir() {
  var price = 0;
  const R_S = self.getFieldInForms(
    "rev_tement_au_sol_couloir",
    "quel_est_le_rev_tement_au_sol_actuel"
  );
  const price_R_S = await self.getPriceForField(R_S, true, 0);
  //
  const D_S = self.getFieldInForms(
    "rev_tement_au_sol_couloir",
    "quelle_pr_paration_souhaitez_vous"
  );
  const price_D_S = await self.getPriceForField(D_S, true, 0);
  //
  const P_S = self.getFieldInForms(
    "rev_tement_au_sol_couloir",
    "quel_nouveau_rev_tement_souhaitez_vous"
  );
  const price_P_S = await self.getPriceForField(P_S, true, 0);
  //
  const S = self.getFieldInForms(
    "rev_tement_au_sol_couloir",
    "quelle_est_la_surface_en_m"
  ).value;

  price = S * price_R_S + price_D_S * S + S * price_P_S;
  return price;
}
RevetSolCouloir();

//
//-------------------------------------------------------
//
async function RevetSolBuan() {
  var price = 0;
  const R_S = self.getFieldInForms(
    "rev_tement_au_sol_buanderie",
    "quel_est_le_rev_tement_au_sol_actuel"
  );
  const price_R_S = await self.getPriceForField(R_S, true, 0);
  //
  const D_S = self.getFieldInForms(
    "rev_tement_au_sol_buanderie",
    "quelle_pr_paration_souhaitez_vous"
  );
  const price_D_S = await self.getPriceForField(D_S, true, 0);
  //
  const P_S = self.getFieldInForms(
    "rev_tement_au_sol_buanderie",
    "quel_nouveau_rev_tement_souhaitez_vous"
  );
  const price_P_S = await self.getPriceForField(P_S, true, 0);
  //
  const S = self.getFieldInForms(
    "rev_tement_au_sol_buanderie",
    "quelle_est_la_surface_en_m"
  ).value;

  price = S * price_R_S + price_D_S * S + S * price_P_S;
  return price;
}
RevetSolBuan();

//
//-------------------------------------------------------
//
async function RevetSolToilette() {
  var price = 0;
  const R_S = self.getFieldInForms(
    "rev_tement_au_sol_toilette",
    "quel_est_le_rev_tement_au_sol_actuel"
  );
  const price_R_S = await self.getPriceForField(R_S, true, 0);
  //
  const D_S = self.getFieldInForms(
    "rev_tement_au_sol_toilette",
    "quelle_pr_paration_souhaitez_vous"
  );
  const price_D_S = await self.getPriceForField(D_S, true, 0);
  //
  const P_S = self.getFieldInForms(
    "rev_tement_au_sol_toilette",
    "quel_nouveau_rev_tement_souhaitez_vous"
  );
  const price_P_S = await self.getPriceForField(P_S, true, 0);
  //
  const S = self.getFieldInForms(
    "rev_tement_au_sol_toilette",
    "quelle_est_la_surface_en_m"
  ).value;

  price = S * price_R_S + price_D_S * S + S * price_P_S;
  return price;
}
RevetSolToilette();

//
//-------------------------------------------------------
//
async function RevetSolDressing() {
  var price = 0;
  const R_S = self.getFieldInForms(
    "rev_tement_au_sol_dressing",
    "quel_est_le_rev_tement_au_sol_actuel"
  );
  const price_R_S = await self.getPriceForField(R_S, true, 0);
  //
  const D_S = self.getFieldInForms(
    "rev_tement_au_sol_dressing",
    "quelle_pr_paration_souhaitez_vous"
  );
  const price_D_S = await self.getPriceForField(D_S, true, 0);
  //
  const P_S = self.getFieldInForms(
    "rev_tement_au_sol_dressing",
    "quel_nouveau_rev_tement_souhaitez_vous"
  );
  const price_P_S = await self.getPriceForField(P_S, true, 0);
  //
  const S = self.getFieldInForms(
    "rev_tement_au_sol_dressing",
    "quelle_est_la_surface_en_m"
  ).value;

  price = S * price_R_S + price_D_S * S + S * price_P_S;
  return price;
}
RevetSolDressing();

//
//-------------------------------------------------------
//
async function RevetSolbureau() {
  var price = 0;
  const R_S = self.getFieldInForms(
    "rev_tement_au_sol_bureau",
    "quel_est_le_rev_tement_au_sol_actuel"
  );
  const price_R_S = await self.getPriceForField(R_S, true, 0);
  //
  const D_S = self.getFieldInForms(
    "rev_tement_au_sol_bureau",
    "quelle_pr_paration_souhaitez_vous"
  );
  const price_D_S = await self.getPriceForField(D_S, true, 0);
  //
  const P_S = self.getFieldInForms(
    "rev_tement_au_sol_bureau",
    "quel_nouveau_rev_tement_souhaitez_vous"
  );
  const price_P_S = await self.getPriceForField(P_S, true, 0);
  //
  const S = self.getFieldInForms(
    "rev_tement_au_sol_bureau",
    "quelle_est_la_surface_en_m"
  ).value;

  price = S * price_R_S + price_D_S * S + S * price_P_S;
  return price;
}
RevetSolbureau();

//
//-------------------------------------------------------
//
async function RevetMur() {
  var price = 0;
  const T_C = self.getFieldInForms(
    "rev_tements_muraux_cloisons",
    "quel_type_de_cloisonnement_souhaitez_vous"
  );
  const price_T_C = await self.getPriceForField(T_C, true, 0);
  //
  const S = self.getFieldInForms(
    "rev_tements_muraux_cloisons",
    "quelle_est_la_surface_approxiuses"
  ).value;

  price = S * price_T_C;
  return price;
}
RevetMur();

//
//-------------------------------------------------------
//
async function RevetMurSDB() {
  var price = 0;
  const T_C = self.getFieldInForms(
    "rev_tements_muraux_cloisons_salle",
    "quel_type_de_cloisonnement_souhaitez_vous"
  );
  const price_T_C = await self.getPriceForField(T_C, true, 0);
  //
  const S = self.getFieldInForms(
    "rev_tements_muraux_cloisons_salle",
    "quelle_est_la_surface_approxiuses"
  ).value;

  price = S * price_T_C;
  return price;
}
RevetMurSDB();

//
//-------------------------------------------------------
//
async function RevetMurSalon() {
  var price = 0;
  const T_C = self.getFieldInForms(
    "rev_tements_muraux_cloisons_sallon",
    "quel_type_de_cloisonnement_souhaitez_vous"
  );
  const price_T_C = await self.getPriceForField(T_C, true, 0);
  //
  const S = self.getFieldInForms(
    "rev_tements_muraux_cloisons_sallon",
    "quelle_est_la_surface_approxiuses"
  ).value;

  price = S * price_T_C;
  return price;
}
RevetMurSalon();

//
//-------------------------------------------------------
//
async function RevetMurChambre() {
  var price = 0;
  const T_C = self.getFieldInForms(
    "rev_tements_muraux_cloisons_chambre",
    "quel_type_de_cloisonnement_souhaitez_vous"
  );
  const price_T_C = await self.getPriceForField(T_C, true, 0);
  //
  const S = self.getFieldInForms(
    "rev_tements_muraux_cloisons_chambre",
    "quelle_est_la_surface_approxiuses"
  ).value;

  price = S * price_T_C;
  return price;
}
RevetMurChambre();

//
//-------------------------------------------------------
//
async function RevetMurSalleM() {
  var price = 0;
  const T_C = self.getFieldInForms(
    "rev_tements_muraux_cloisons_salle_manger",
    "quel_type_de_cloisonnement_souhaitez_vous"
  );
  const price_T_C = await self.getPriceForField(T_C, true, 0);
  //
  const S = self.getFieldInForms(
    "rev_tements_muraux_cloisons_salle_manger",
    "quelle_est_la_surface_approxiuses"
  ).value;

  price = S * price_T_C;
  return price;
}
RevetMurSalleM();

//
//-------------------------------------------------------
//
async function RevetMurCouloir() {
  var price = 0;
  const T_C = self.getFieldInForms(
    "rev_tements_muraux_cloisons_couloir",
    "quel_type_de_cloisonnement_souhaitez_vous"
  );
  const price_T_C = await self.getPriceForField(T_C, true, 0);
  //
  const S = self.getFieldInForms(
    "rev_tements_muraux_cloisons_couloir",
    "quelle_est_la_surface_approxiuses"
  ).value;

  price = S * price_T_C;
  return price;
}
RevetMurCouloir();

//
//-------------------------------------------------------
//
async function RevetMurBuan() {
  var price = 0;
  const T_C = self.getFieldInForms(
    "rev_tements_muraux_cloisons_buanderie",
    "quel_type_de_cloisonnement_souhaitez_vous"
  );
  const price_T_C = await self.getPriceForField(T_C, true, 0);
  //
  const S = self.getFieldInForms(
    "rev_tements_muraux_cloisons_buanderie",
    "quelle_est_la_surface_approxiuses"
  ).value;

  price = S * price_T_C;
  return price;
}
RevetMurBuan();

//
//-------------------------------------------------------
//
async function RevetMurToilette() {
  var price = 0;
  const T_C = self.getFieldInForms(
    "rev_tements_muraux_cloisons_toilette",
    "quel_type_de_cloisonnement_souhaitez_vous"
  );
  const price_T_C = await self.getPriceForField(T_C, true, 0);
  //
  const S = self.getFieldInForms(
    "rev_tements_muraux_cloisons_toilette",
    "quelle_est_la_surface_approxiuses"
  ).value;

  price = S * price_T_C;
  return price;
}
RevetMurToilette();

//
//-------------------------------------------------------
//
async function RevetMurDressing() {
  var price = 0;
  const T_C = self.getFieldInForms(
    "rev_tements_muraux_cloisons_dressing",
    "quel_type_de_cloisonnement_souhaitez_vous"
  );
  const price_T_C = await self.getPriceForField(T_C, true, 0);
  //
  const S = self.getFieldInForms(
    "rev_tements_muraux_cloisons_dressing",
    "quelle_est_la_surface_approxiuses"
  ).value;

  price = S * price_T_C;
  return price;
}
RevetMurDressing();

//
//-------------------------------------------------------
//
async function RevetMurBureau() {
  var price = 0;
  const T_C = self.getFieldInForms(
    "rev_tements_muraux_cloisons_bureau",
    "quel_type_de_cloisonnement_souhaitez_vous"
  );
  const price_T_C = await self.getPriceForField(T_C, true, 0);
  //
  const S = self.getFieldInForms(
    "rev_tements_muraux_cloisons_bureau",
    "quelle_est_la_surface_approxiuses"
  ).value;

  price = S * price_T_C;
  return price;
}
RevetMurBureau();

//
//-------------------------------------------------------
//
async function RevetMuraux() {
  var price = 0;
  const T_C = self.getFieldInForms(
    "rev_tements_muraux_cuisine",
    "quel_est_l_tat_global_des_murs"
  );
  const price_T_C = await self.getPriceForField(T_C, true, 0);
  //
  const M_A = self.getFieldInForms(
    "rev_tements_muraux_cuisine",
    "quel_est_le_rev_tement_mural_actuel"
  );
  const price_M_A = await self.getPriceForField(M_A, true, 0);
  //
  const M_S = self.getFieldInForms(
    "rev_tements_muraux_cuisine",
    "quel_nouveau_rev_tement_souhaitez_vous"
  );
  const price_M_S = await self.getPriceForField(M_S, true, 0);
  //
  const S = self.getFieldInForms(
    "rev_tements_muraux_cuisine",
    "quelle_est_la_surface_approximative_des_murs_en_m"
  ).value;

  price = S * price_T_C + S * price_M_A + S * price_M_S;
  return price;
}
RevetMuraux();

//
//-------------------------------------------------------
//
async function RevetMurauxSDB() {
  var price = 0;
  const T_C = self.getFieldInForms(
    "rev_tements_muraux_salle_de_bain",
    "quel_est_l_tat_global_des_murs"
  );
  const price_T_C = await self.getPriceForField(T_C, true, 0);
  //
  const M_A = self.getFieldInForms(
    "rev_tements_muraux_salle_de_bain",
    "quel_est_le_rev_tement_mural_actuel"
  );
  const price_M_A = await self.getPriceForField(M_A, true, 0);
  //
  const M_S = self.getFieldInForms(
    "rev_tements_muraux_salle_de_bain",
    "quel_nouveau_rev_tement_souhaitez_vous"
  );
  const price_M_S = await self.getPriceForField(M_S, true, 0);
  //
  const S = self.getFieldInForms(
    "rev_tements_muraux_salle_de_bain",
    "quelle_est_la_surface_approximative_des_murs_en_m"
  ).value;

  price = S * price_T_C + S * price_M_A + S * price_M_S;
  return price;
}
RevetMurauxSDB();

//
//-------------------------------------------------------
//
async function RevetMurauxSalon() {
  var price = 0;
  const T_C = self.getFieldInForms(
    "rev_tements_muraux_sallon",
    "quel_est_l_tat_global_des_murs"
  );
  const price_T_C = await self.getPriceForField(T_C, true, 0);
  //
  const M_A = self.getFieldInForms(
    "rev_tements_muraux_sallon",
    "quel_est_le_rev_tement_mural_actuel"
  );
  const price_M_A = await self.getPriceForField(M_A, true, 0);
  //
  const M_S = self.getFieldInForms(
    "rev_tements_muraux_sallon",
    "quel_nouveau_rev_tement_souhaitez_vous"
  );
  const price_M_S = await self.getPriceForField(M_S, true, 0);
  //
  const S = self.getFieldInForms(
    "rev_tements_muraux_sallon",
    "quelle_est_la_surface_approximative_des_murs_en_m"
  ).value;

  price = S * price_T_C + S * price_M_A + S * price_M_S;
  return price;
}
RevetMurauxSalon();

//
//-------------------------------------------------------
//
async function RevetMurauxChambre() {
  var price = 0;
  const T_C = self.getFieldInForms(
    "rev_tements_muraux_chambre",
    "quel_est_l_tat_global_des_murs"
  );
  const price_T_C = await self.getPriceForField(T_C, true, 0);
  //
  const M_A = self.getFieldInForms(
    "rev_tements_muraux_chambre",
    "quel_est_le_rev_tement_mural_actuel"
  );
  const price_M_A = await self.getPriceForField(M_A, true, 0);
  //
  const M_S = self.getFieldInForms(
    "rev_tements_muraux_chambre",
    "quel_nouveau_rev_tement_souhaitez_vous"
  );
  const price_M_S = await self.getPriceForField(M_S, true, 0);
  //
  const S = self.getFieldInForms(
    "rev_tements_muraux_chambre",
    "quelle_est_la_surface_approximative_des_murs_en_m"
  ).value;

  price = S * price_T_C + S * price_M_A + S * price_M_S;
  return price;
}
RevetMurauxChambre();

//
//-------------------------------------------------------
//
async function RevetMurauxSalle() {
  var price = 0;
  const T_C = self.getFieldInForms(
    "rev_tements_muraux_salle_manger",
    "quel_est_l_tat_global_des_murs"
  );
  const price_T_C = await self.getPriceForField(T_C, true, 0);
  //
  const M_A = self.getFieldInForms(
    "rev_tements_muraux_salle_manger",
    "quel_est_le_rev_tement_mural_actuel"
  );
  const price_M_A = await self.getPriceForField(M_A, true, 0);
  //
  const M_S = self.getFieldInForms(
    "rev_tements_muraux_salle_manger",
    "quel_nouveau_rev_tement_souhaitez_vous"
  );
  const price_M_S = await self.getPriceForField(M_S, true, 0);
  //
  const S = self.getFieldInForms(
    "rev_tements_muraux_salle_manger",
    "quelle_est_la_surface_approximative_des_murs_en_m"
  ).value;

  price = S * price_T_C + S * price_M_A + S * price_M_S;
  return price;
}
RevetMurauxSalle();

//
//-------------------------------------------------------
//
async function RevetMurauxCouloir() {
  var price = 0;
  const T_C = self.getFieldInForms(
    "rev_tements_muraux_couloir",
    "quel_est_l_tat_global_des_murs"
  );
  const price_T_C = await self.getPriceForField(T_C, true, 0);
  //
  const M_A = self.getFieldInForms(
    "rev_tements_muraux_couloir",
    "quel_est_le_rev_tement_mural_actuel"
  );
  const price_M_A = await self.getPriceForField(M_A, true, 0);
  //
  const M_S = self.getFieldInForms(
    "rev_tements_muraux_couloir",
    "quel_nouveau_rev_tement_souhaitez_vous"
  );
  const price_M_S = await self.getPriceForField(M_S, true, 0);
  //
  const S = self.getFieldInForms(
    "rev_tements_muraux_couloir",
    "quelle_est_la_surface_approximative_des_murs_en_m"
  ).value;

  price = S * price_T_C + S * price_M_A + S * price_M_S;
  return price;
}
RevetMurauxCouloir();

//
//-------------------------------------------------------
//
async function RevetMurauxBuan() {
  var price = 0;
  const T_C = self.getFieldInForms(
    "rev_tements_muraux_buanderie",
    "quel_est_l_tat_global_des_murs"
  );
  const price_T_C = await self.getPriceForField(T_C, true, 0);
  //
  const M_A = self.getFieldInForms(
    "rev_tements_muraux_buanderie",
    "quel_est_le_rev_tement_mural_actuel"
  );
  const price_M_A = await self.getPriceForField(M_A, true, 0);
  //
  const M_S = self.getFieldInForms(
    "rev_tements_muraux_buanderie",
    "quel_nouveau_rev_tement_souhaitez_vous"
  );
  const price_M_S = await self.getPriceForField(M_S, true, 0);
  //
  const S = self.getFieldInForms(
    "rev_tements_muraux_buanderie",
    "quelle_est_la_surface_approximative_des_murs_en_m"
  ).value;

  price = S * price_T_C + S * price_M_A + S * price_M_S;
  return price;
}
RevetMurauxBuan();

//
//-------------------------------------------------------
//
async function RevetMurauxToilette() {
  var price = 0;
  const T_C = self.getFieldInForms(
    "rev_tements_muraux_toilette",
    "quel_est_l_tat_global_des_murs"
  );
  const price_T_C = await self.getPriceForField(T_C, true, 0);
  //
  const M_A = self.getFieldInForms(
    "rev_tements_muraux_toilette",
    "quel_est_le_rev_tement_mural_actuel"
  );
  const price_M_A = await self.getPriceForField(M_A, true, 0);
  //
  const M_S = self.getFieldInForms(
    "rev_tements_muraux_toilette",
    "quel_nouveau_rev_tement_souhaitez_vous"
  );
  const price_M_S = await self.getPriceForField(M_S, true, 0);
  //
  const S = self.getFieldInForms(
    "rev_tements_muraux_toilette",
    "quelle_est_la_surface_approximative_des_murs_en_m"
  ).value;

  price = S * price_T_C + S * price_M_A + S * price_M_S;
  return price;
}
RevetMurauxToilette();

//
//-------------------------------------------------------
//
async function RevetMurauxDressing() {
  var price = 0;
  const T_C = self.getFieldInForms(
    "rev_tements_muraux_dressing",
    "quel_est_l_tat_global_des_murs"
  );
  const price_T_C = await self.getPriceForField(T_C, true, 0);
  //
  const M_A = self.getFieldInForms(
    "rev_tements_muraux_dressing",
    "quel_est_le_rev_tement_mural_actuel"
  );
  const price_M_A = await self.getPriceForField(M_A, true, 0);
  //
  const M_S = self.getFieldInForms(
    "rev_tements_muraux_dressing",
    "quel_nouveau_rev_tement_souhaitez_vous"
  );
  const price_M_S = await self.getPriceForField(M_S, true, 0);
  //
  const S = self.getFieldInForms(
    "rev_tements_muraux_dressing",
    "quelle_est_la_surface_approximative_des_murs_en_m"
  ).value;

  price = S * price_T_C + S * price_M_A + S * price_M_S;
  return price;
}
RevetMurauxDressing();

//
//-------------------------------------------------------
//
async function RevetMurauxBureau() {
  var price = 0;
  const T_C = self.getFieldInForms(
    "rev_tements_muraux_bureau",
    "quel_est_l_tat_global_des_murs"
  );
  const price_T_C = await self.getPriceForField(T_C, true, 0);
  //
  const M_A = self.getFieldInForms(
    "rev_tements_muraux_bureau",
    "quel_est_le_rev_tement_mural_actuel"
  );
  const price_M_A = await self.getPriceForField(M_A, true, 0);
  //
  const M_S = self.getFieldInForms(
    "rev_tements_muraux_bureau",
    "quel_nouveau_rev_tement_souhaitez_vous"
  );
  const price_M_S = await self.getPriceForField(M_S, true, 0);
  //
  const S = self.getFieldInForms(
    "rev_tements_muraux_bureau",
    "quelle_est_la_surface_approximative_des_murs_en_m"
  ).value;

  price = S * price_T_C + S * price_M_A + S * price_M_S;
  return price;
}
RevetMurauxBureau();

//
//-------------------------------------------------------
//
async function RevetPlf() {
  var price = 0;
  const T_C = self.getFieldInForms(
    "plafonds",
    "quel_est_l_tat_global_du_plafond"
  );
  const price_T_C = await self.getPriceForField(T_C, true, 0);
  //
  const S = self.getFieldInForms(
    "plafonds",
    "quelle_est_la_surface_approximative_du_plafonds"
  ).value;

  price = S * price_T_C;
  return price;
}
RevetPlf();

//
//-------------------------------------------------------
//
async function RevetPlfSDB() {
  var price = 0;
  const T_C = self.getFieldInForms(
    "plafonds_salle_de_bain",
    "quel_est_l_tat_global_du_plafond"
  );
  const price_T_C = await self.getPriceForField(T_C, true, 0);
  //
  const S = self.getFieldInForms(
    "plafonds_salle_de_bain",
    "quelle_est_la_surface_approximative_du_plafonds"
  ).value;

  price = S * price_T_C;
  return price;
}
RevetPlfSDB();

//
//-------------------------------------------------------
//
async function RevetPlfsallon() {
  var price = 0;
  const T_C = self.getFieldInForms(
    "plafonds_sallon",
    "quel_est_l_tat_global_du_plafond"
  );
  const price_T_C = await self.getPriceForField(T_C, true, 0);
  //
  const S = self.getFieldInForms(
    "plafonds_sallon",
    "quelle_est_la_surface_approximative_du_plafonds"
  ).value;

  price = S * price_T_C;
  return price;
}
RevetPlfsallon();

//
//-------------------------------------------------------
//
async function RevetPlfchambre() {
  var price = 0;
  const T_C = self.getFieldInForms(
    "plafonds_chambre",
    "quel_est_l_tat_global_du_plafond"
  );
  const price_T_C = await self.getPriceForField(T_C, true, 0);
  //
  const S = self.getFieldInForms(
    "plafonds_chambre",
    "quelle_est_la_surface_approximative_du_plafonds"
  ).value;

  price = S * price_T_C;
  return price;
}
RevetPlfchambre();

//
//-------------------------------------------------------
//
async function RevetPlfsalle_manger() {
  var price = 0;
  const T_C = self.getFieldInForms(
    "plafonds_salle_manger",
    "quel_est_l_tat_global_du_plafond"
  );
  const price_T_C = await self.getPriceForField(T_C, true, 0);
  //
  const S = self.getFieldInForms(
    "plafonds_salle_manger",
    "quelle_est_la_surface_approximative_du_plafonds"
  ).value;

  price = S * price_T_C;
  return price;
}
RevetPlfsalle_manger();

//
//-------------------------------------------------------
//
async function RevetPlfcouloir() {
  var price = 0;
  const T_C = self.getFieldInForms(
    "plafonds_couloir",
    "quel_est_l_tat_global_du_plafond"
  );
  const price_T_C = await self.getPriceForField(T_C, true, 0);
  //
  const S = self.getFieldInForms(
    "plafonds_couloir",
    "quelle_est_la_surface_approximative_du_plafonds"
  ).value;

  price = S * price_T_C;
  return price;
}
RevetPlfcouloir();

//
//-------------------------------------------------------
//
async function RevetPlfBuan() {
  var price = 0;
  const T_C = self.getFieldInForms(
    "plafonds_buanderie",
    "quel_est_l_tat_global_du_plafond"
  );
  const price_T_C = await self.getPriceForField(T_C, true, 0);
  //
  const S = self.getFieldInForms(
    "plafonds_buanderie",
    "quelle_est_la_surface_approximative_du_plafonds"
  ).value;

  price = S * price_T_C;
  return price;
}
RevetPlfBuan();

//
//-------------------------------------------------------
//
async function RevetPlfToilette() {
  var price = 0;
  const T_C = self.getFieldInForms(
    "plafonds_toilette",
    "quel_est_l_tat_global_du_plafond"
  );
  const price_T_C = await self.getPriceForField(T_C, true, 0);
  //
  const S = self.getFieldInForms(
    "plafonds_toilette",
    "quelle_est_la_surface_approximative_du_plafonds"
  ).value;

  price = S * price_T_C;
  return price;
}
RevetPlfToilette();

//
//-------------------------------------------------------
//
async function RevetPlfDress() {
  var price = 0;
  const T_C = self.getFieldInForms(
    "plafonds_dressing",
    "quel_est_l_tat_global_du_plafond"
  );
  const price_T_C = await self.getPriceForField(T_C, true, 0);
  //
  const S = self.getFieldInForms(
    "plafonds_dressing",
    "quelle_est_la_surface_approximative_du_plafonds"
  ).value;

  price = S * price_T_C;
  return price;
}
RevetPlfDress();

//
//-------------------------------------------------------
//
async function RevetPlfbureau() {
  var price = 0;
  const T_C = self.getFieldInForms(
    "plafonds_bureau",
    "quel_est_l_tat_global_du_plafond"
  );
  const price_T_C = await self.getPriceForField(T_C, true, 0);
  //
  const S = self.getFieldInForms(
    "plafonds_bureau",
    "quelle_est_la_surface_approximative_du_plafonds"
  ).value;

  price = S * price_T_C;
  return price;
}
RevetPlfbureau();
//
//-------------------------------------------------------
//
async function PriseElectCuisine() {
  var price = 0;
  const T_I = self.getFieldInForms(
    "lectricit",
    "quelle_type_d_installation_d_sirez_vous"
  );
  const price_T_I = await self.getPriceForField(T_I, true, 0);
  //
  const price_N = await self.getPriceForField(field, true, 0);

  price = price_N + price_T_I * field.value;
  return price;
}
PriseElectCuisine();
//
//-------------------------------------------------------
//
async function PriseElectSDB() {
  var price = 0;
  const T_I = self.getFieldInForms(
    "lectricit_salle_de_bain",
    "quelle_type_d_installation_d_sirez_vous"
  );
  const price_T_I = await self.getPriceForField(T_I, true, 0);
  //
  const price_N = await self.getPriceForField(field, true, 0);

  price = price_N + price_T_I * field.value;
  return price;
}
PriseElectSDB();
//
//-------------------------------------------------------
//
async function PriseElectSalon() {
  var price = 0;
  const T_I = self.getFieldInForms(
    "lectricit_sallon",
    "quelle_type_d_installation_d_sirez_vous"
  );
  const price_T_I = await self.getPriceForField(T_I, true, 0);

  const price_N = await self.getPriceForField(field, true, 0);

  price = price_N + price_T_I * field.value;
  return price;
}
PriseElectSalon();
//
//-------------------------------------------------------
//
async function PriseElectChambre() {
  var price = 0;
  const T_I = self.getFieldInForms(
    "lectricit_chambre",
    "quelle_type_d_installation_d_sirez_vous"
  );
  const price_T_I = await self.getPriceForField(T_I, true, 0);
  //
  const price_N = await self.getPriceForField(field, true, 0);

  price = price_N + price_T_I * field.value;
  return price;
}
PriseElectChambre();
//
//-------------------------------------------------------
//
async function PriseElectSM() {
  var price = 0;
  const T_I = self.getFieldInForms(
    "lectricit_salle_manger",
    "quelle_type_d_installation_d_sirez_vous"
  );
  const price_T_I = await self.getPriceForField(T_I, true, 0);
  //
  const price_N = await self.getPriceForField(field, true, 0);

  price = price_N + price_T_I * field.value;
  return price;
}
PriseElectSM();
//
//-------------------------------------------------------
//
async function PriseElectCouloir() {
  var price = 0;
  const T_I = self.getFieldInForms(
    "lectricit_couloir",
    "quelle_type_d_installation_d_sirez_vous"
  );
  const price_T_I = await self.getPriceForField(T_I, true, 0);
  //
  const price_N = await self.getPriceForField(field, true, 0);

  price = price_N + price_T_I * field.value;
  return price;
}
PriseElectCouloir();
//
//-------------------------------------------------------
//
async function PriseElectBuanderie() {
  var price = 0;
  const T_I = self.getFieldInForms(
    "lectricit_buanderie",
    "quelle_type_d_installation_d_sirez_vous"
  );
  const price_T_I = await self.getPriceForField(T_I, true, 0);
  //
  const price_N = await self.getPriceForField(field, true, 0);

  price = price_N + price_T_I * field.value;
  return price;
}
PriseElectBuanderie();
//
//-------------------------------------------------------
//
async function PriseElectToilette() {
  var price = 0;
  const T_I = self.getFieldInForms(
    "lectricit_toilette",
    "quelle_type_d_installation_d_sirez_vous"
  );
  const price_T_I = await self.getPriceForField(T_I, true, 0);
  //
  const price_N = await self.getPriceForField(field, true, 0);

  price = price_N + price_T_I * field.value;
  return price;
}
PriseElectToilette();
//
//-------------------------------------------------------
//
async function PriseElectDressing() {
  var price = 0;
  const T_I = self.getFieldInForms(
    "lectricit_dressing",
    "quelle_type_d_installation_d_sirez_vous"
  );
  const price_T_I = await self.getPriceForField(T_I, true, 0);
  //
  const price_N = await self.getPriceForField(field, true, 0);

  price = price_N + price_T_I * field.value;
  return price;
}
PriseElectDressing();
//
//-------------------------------------------------------
//
async function PriseElectBureau() {
  var price = 0;
  const T_I = self.getFieldInForms(
    "lectricit_bureau",
    "quelle_type_d_installation_d_sirez_vous"
  );
  const price_T_I = await self.getPriceForField(T_I, true, 0);
  //
  const price_N = await self.getPriceForField(field, true, 0);

  price = price_N + price_T_I * field.value;
  return price;
}
PriseElectBureau();
