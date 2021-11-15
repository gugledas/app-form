const field = {};
const formDatas = {};
// Isolation
// ||-------------------------------------------------------
// Calcul de l'aide finnacire via le champs nombre de personne.
async function aideFinnaceIsolation() {
  //Recuperation de l'etape de base.
  var choixTravaux = self.getFieldInForms(
    "identification_des_besoins",
    "choix_identification_des_besoins"
  ).value;

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

  if (choixTravaux) {
    console.log("choixTravaux : ", choixTravaux);
    var priceTotal = 0;
    //prix en function du niveau
    var priceParNiveau = {};
    // Cas de : combles_am_nag_s_par_l_int_rieur
    if (choixTravaux.includes("combles_am_nag_s_par_l_int_rieur")) {
      priceParNiveau = {
        niveau1: 47,
        niveau2: 42,
        niveau3: 26,
        niveau4: 18,
      };
      // Recuperation de la surface
      const SurfaceComble = self.getFieldInForms(
        "les_dimensions_de_vos_combles",
        "surface_de_vos_combles"
      ).value;
      priceTotal += SurfaceComble * priceParNiveau[field_niveau_revenu.value];
    } // Cas de : combles_perdus
    if (choixTravaux.includes("combles_perdus")) {
      priceParNiveau = {
        niveau1: 22,
        niveau2: 22,
        niveau3: 11,
        niveau4: 11,
      };
      // Recuperation de la surface
      const SurfaceComble = self.getFieldInForms(
        "la_surface_de_combles_perdus_isoler",
        "surface_combles_perdus_isoler"
      ).value;
      priceTotal += SurfaceComble * priceParNiveau[field_niveau_revenu.value];
    } //
    if (choixTravaux.includes("toit_terrasse")) {
      priceParNiveau = {
        niveau1: 96,
        niveau2: 71,
        niveau3: 51,
        niveau4: 26,
      };
      // Recuperation de la surface
      const SurfaceComble = self.getFieldInForms(
        "quelle_est_la_surface_de_toit_terrasse_accessible_isoler",
        "surface_au_sol_isoler"
      ).value;
      priceTotal += SurfaceComble * priceParNiveau[field_niveau_revenu.value];
    } //
    if (choixTravaux.includes("mur")) {
      // on determine mur exterieur ou pas.
      const murType = self.getFieldInForms(
        "comment_souhaitez_vous_isoler_vos_murs",
        "un_seul_choix_possible"
      ).value;
      var murInterieur = null;
      if (murType) {
        murInterieur = murType == "par_l_int_rieur" ? true : false;
      }
      if (murInterieur) {
        // Recuperation de la surface
        const SurfaceComble = self.getFieldInForms(
          "connaissez_vous_la_surface_de_mur_isoler",
          "surface_mur_isoler"
        ).value;
        priceParNiveau = {
          niveau1: 62,
          niveau2: 38,
          niveau3: 33,
          niveau4: 25,
        };
        console.log(
          "mur interieur : ",
          SurfaceComble,
          "\n Niveau : ",
          field_niveau_revenu.value
        );
        priceTotal += SurfaceComble * priceParNiveau[field_niveau_revenu.value];
      } else {
        // Recuperation de la surface
        const SurfaceComble = self.getFieldInForms(
          "surface_isoler_par_l_ext_rieur",
          "surface_mur_isoler_ext"
        ).value;
        // Si la surface à isoler est > 100 m2
        if (SurfaceComble > 100) {
          // on effectue le calcul avec les 100m2
          priceParNiveau = {
            niveau1: 112,
            niveau2: 78,
            niveau3: 58,
            niveau4: 33,
          };
          priceTotal += 100 * priceParNiveau[field_niveau_revenu.value];
          // on modifie les valeurs eton effectue le calcul avec le reste de mettre carre.
          priceParNiveau = {
            niveau1: 37,
            niveau2: 18,
            niveau3: 18,
            niveau4: 18,
          };
          priceTotal +=
            (SurfaceComble - 100) * priceParNiveau[field_niveau_revenu.value];
        }
        // Si la surface  à isoler est <= 100 m2
        else {
          priceParNiveau = {
            niveau1: 112,
            niveau2: 78,
            niveau3: 58,
            niveau4: 33,
          };
          priceTotal +=
            SurfaceComble * priceParNiveau[field_niveau_revenu.value];
        }
      }
    } //
    if (choixTravaux.includes("plancher_de_vide_sanitaire_sous_sol")) {
      priceParNiveau = {
        niveau1: 22,
        niveau2: 22,
        niveau3: 11,
        niveau4: 11,
      };
      const SurfacePlangerSousSol = self.getFieldInForms(
        "quelle_est_la_surface_de_plancher_sur_sous_sol_ou_garage_isoler",
        "surface_au_sol_isoler_sous_sol"
      ).value;
      const SurfacePlangerVide = self.getFieldInForms(
        "de_plancher_sur_vide_sanitaire_isoler",
        "surface_au_sol_isoler_planger_vide"
      ).value;
      var SurfaceComble = 0;
      SurfaceComble +=
        SurfacePlangerSousSol && SurfacePlangerSousSol > 0
          ? SurfacePlangerSousSol
          : 0;
      SurfaceComble +=
        SurfacePlangerVide && SurfacePlangerVide > 0 ? SurfacePlangerVide : 0;
      priceTotal += SurfaceComble * priceParNiveau[field_niveau_revenu.value];
    }
    return priceTotal;
  } else return 0;
}
aideFinnaceIsolation();
