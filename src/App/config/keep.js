const field = {};
//
//-------------------------------------------------------
//
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
  console.log("priceAide : ", priceAide);

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
