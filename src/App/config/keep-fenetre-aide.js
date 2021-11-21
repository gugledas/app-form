const field = {};
const formDatas = {};
// chauffage
async function aideFinnaceFenetre() {
  //Recuperation le choix de base
  var choixFenetre = self.getFieldInForms(
    "type_de_menuiserie_souhait",
    "plusieurs_choix_possibles"
  );

  const NombreDefenetreAutotal = (step, fileName) => {
    var etape = self.getFieldInForms(step, fileName);
    var qty = 0;
    if (etape.value) {
      for (const i in etape.value) {
        const subFieldName = "quantit_" + etape.value[i];
        const f = self.getFieldInForms(step, subFieldName);
        if (f && f.value) qty += parseInt(f.value);
        else {
          console.log("erreur dans step : ", step, "\n fileName : ", fileName);
        }
      }
    }
    return qty;
  };

  if (choixFenetre.value) {
    console.log(" ChoixFenetre : ", choixFenetre.value);
    var priceTotal = 0;
    var val = "";
    var nombreFenetre = 0;
    // fenetre
    val = "fen_tre";
    if (choixFenetre.value.includes(val)) {
      var type_travaux_sur_fen_tre = self.getFieldInForms(
        "type_travaux_sur_fen_tre",
        "plusieurs_choix_possible"
      ).value;
      if (type_travaux_sur_fen_tre.includes("remplacement_d_une_fen_tre")) {
        nombreFenetre += NombreDefenetreAutotal(
          "nombre_fen_tre_remplacer",
          "plusieurs_choix_possible"
        );
        console.log(
          " nombreFenetre remplacement_d_une_fen_tre : ",
          nombreFenetre
        );
      }
      if (type_travaux_sur_fen_tre.includes("cr_ation_d_une_fen_tre")) {
        nombreFenetre += NombreDefenetreAutotal(
          "nombre_fen_tre_cr_er",
          "plusieurs_choix_possible"
        );
        console.log(" nombreFenetre cr_ation_d_une_fen_tre : ", nombreFenetre);
      }
    }
    // Porte fenetre
    val = "porte_fen_tre";
    if (choixFenetre.value.includes(val)) {
      var type_travaux_sur_porte_fen_tre = self.getFieldInForms(
        "type_travaux_sur_porte_fen_tre",
        "plusieurs_choix_possibles"
      ).value;
      if (
        type_travaux_sur_porte_fen_tre.includes(
          "remplacement_d_une_porte_fen_tre"
        )
      ) {
        nombreFenetre += NombreDefenetreAutotal(
          "quel_type_de_chaudi_re_souhaitez_vous",
          "plusieurs_choix_possible"
        );
        console.log(
          " nombreFenetre remplacement_d_une_porte_fen_tre : ",
          nombreFenetre
        );
      }
      if (
        type_travaux_sur_porte_fen_tre.includes("cr_ation_d_une_porte_fen_tre")
      ) {
        nombreFenetre += NombreDefenetreAutotal(
          "nombre_porte_fen_tre_cr_er",
          "plusieurs_choix_possible"
        );
        console.log(
          " nombreFenetre cr_ation_d_une_porte_fen_tre : ",
          nombreFenetre
        );
      }
    }
    // baie_coulissante
    val = "baie_coulissante";
    if (choixFenetre.value.includes(val)) {
      var type_travaux_sur_baie_coulissante = self.getFieldInForms(
        "type_travaux_sur_baie_coulissante",
        "plusieurs_choix_possibles"
      ).value;
      if (
        type_travaux_sur_baie_coulissante.includes(
          "remplacement_d_une_baie_coulissante"
        )
      ) {
        nombreFenetre += NombreDefenetreAutotal(
          "nombre_baie_coulissante_a_remplace",
          "plusieurs_choix_possibles"
        );
        console.log(
          " nombreFenetre remplacement_d_une_baie_coulissante : ",
          nombreFenetre
        );
      }
      if (
        type_travaux_sur_baie_coulissante.includes(
          "cr_ation_d_une_baie_coulissante"
        )
      ) {
        nombreFenetre += NombreDefenetreAutotal(
          "nombre_baie_coulissante_a_cr_er",
          "plusieurs_choix_possibles"
        );
        console.log(
          " nombreFenetre nombre_baie_coulissante_a_cr_er : ",
          nombreFenetre
        );
      }
    }
    // fen_tre_de_toit
    val = "fen_tre_de_toit";
    if (choixFenetre.value.includes(val)) {
      var type_travaux_sur_fen_tre_et_toit = self.getFieldInForms(
        "type_travaux_sur_fen_tre_et_toit",
        "plusieurs_choix_possible"
      ).value;
      if (
        type_travaux_sur_fen_tre_et_toit.includes(
          "remplacement_d_une_fen_tre_de_toit"
        )
      ) {
        nombreFenetre += NombreDefenetreAutotal(
          "nombre_fen_tre_toit_remplacer",
          "plusieurs_choix_possible"
        );
        console.log(
          " nombreFenetre nombre_fen_tre_toit_remplacer : ",
          nombreFenetre
        );
      }
      if (
        type_travaux_sur_fen_tre_et_toit.includes(
          "	cr_ation_d_une_fen_tre_de_toit"
        )
      ) {
        nombreFenetre += NombreDefenetreAutotal(
          "nombre_fen_tre_toit_cr_er",
          "plusieurs_choix_possible"
        );
        console.log(
          " nombreFenetre nombre_nombre_fen_tre_toit_cr_er : ",
          nombreFenetre
        );
      }
    }

    // tranche de revenus;
    // Recuperation de l'indice de tranche de revenu.
    const get_field_niveau_revenu = (niveau) => {
      return self.getFieldInForms(
        formDatas.info.name,
        "niveau_revenu_" + niveau
      );
    };
    var field_niveau_revenu = null;
    if (field.value >= 1 && field.value <= 5) {
      field_niveau_revenu = await get_field_niveau_revenu(field.value);
    } else {
      field_niveau_revenu = await get_field_niveau_revenu(6);
    }
    var priceParNiveau = {
      niveau1: 210,
      niveau2: 130,
      niveau3: 90,
      niveau4: 50,
    };
    priceTotal += priceParNiveau[field_niveau_revenu.value] * nombreFenetre;
    console.log(" priceTotal : ", priceTotal);
    return priceTotal;
  }
}
aideFinnaceFenetre();
