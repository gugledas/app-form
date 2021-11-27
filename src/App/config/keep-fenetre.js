// const field = {};
// const formDatas = {};
// chauffage
async function BudgetFenetre() {
  //Recuperation le choix de base
  var choixFenetre = self.getFieldInForms(
    "type_de_menuiserie_souhait",
    "plusieurs_choix_possibles"
  );

  /**
   * Permet de determiner le nombre de fenetre regrouper par niveau (petite,moyenne,grande)
   * @param {*} step
   * @param {*} fileName
   * @param {*} budgetParFenetre
   * @returns
   */
  const NombreDefenetreAutotal = (stepes, budgetParFenetre) => {
    const step = stepes.nombre.step;
    const fileName = stepes.nombre.field;
    var prices = {};
    var etape = self.getFieldInForms(step, fileName);
    const TypeFenetre = self.getFieldInForms(
      stepes.type.step,
      stepes.type.field
    ).value;
    const VoletFenetre = self.getFieldInForms(
      stepes.volet.step,
      stepes.volet.field
    ).value;
    //
    if ((etape.value, TypeFenetre, VoletFenetre)) {
      console.log(
        "TypeFenetre : ",
        TypeFenetre,
        " VoletFenetre : ",
        VoletFenetre
      );
      for (const i in etape.value) {
        const taille = etape.value[i];
        const subFieldName = "quantit_" + taille;
        const f = self.getFieldInForms(step, subFieldName);
        if (f && f.value && budgetParFenetre[taille]) {
          if (
            budgetParFenetre[taille][TypeFenetre] &&
            budgetParFenetre[taille][TypeFenetre][VoletFenetre]
          ) {
            const qty = parseInt(f.value);
            const tranchePrice =
              budgetParFenetre[taille][TypeFenetre][VoletFenetre];
            prices[taille] =
              tranchePrice.min * qty + " - " + tranchePrice.max * qty;
          } else if (budgetParFenetre[taille][VoletFenetre]) {
            const qty = parseInt(f.value);
            const tranchePrice = budgetParFenetre[taille][VoletFenetre];
            prices[taille] =
              tranchePrice.min * qty + " - " + tranchePrice.max * qty;
          } else {
            console.log(
              " erreur dans step 2 : ",
              step,
              "\n fileName : ",
              fileName,
              "\n budgetParFenetre : ",
              budgetParFenetre
            );
          }
        } else {
          console.log(
            " erreur dans step : ",
            step,
            "\n fileName : ",
            fileName,
            "\n budgetParFenetre : ",
            budgetParFenetre
          );
        }
      }
    }
    return prices;
  };

  if (choixFenetre.value) {
    var val = "";
    var nombreFenetre = {};
    var budgetParFenetre = {};
    // fenetre
    val = "fen_tre";
    if (choixFenetre.value.includes(val)) {
      var type_travaux_sur_fen_tre = self.getFieldInForms(
        "type_travaux_sur_fen_tre",
        "plusieurs_choix_possible"
      ).value;
      if (type_travaux_sur_fen_tre.includes("remplacement_d_une_fen_tre")) {
        budgetParFenetre = {
          petite: {
            pvc: { oui: { min: 1140, max: 1490 }, non: { min: 620, max: 810 } },
            bois: {
              oui: { min: 1300, max: 1690 },
              non: { min: 780, max: 1010 },
            },
            aluminium: {
              oui: { min: 1400, max: 1820 },
              non: { min: 880, max: 1150 },
            },
          },
          moyenne: {
            pvc: { oui: { min: 1300, max: 1690 }, non: { min: 730, max: 940 } },
            bois: {
              oui: { min: 1460, max: 1890 },
              non: { min: 890, max: 1150 },
            },
            aluminium: {
              oui: { min: 1560, max: 2030 },
              non: { min: 990, max: 1290 },
            },
          },
          grande: {
            pvc: {
              oui: { min: 1460, max: 1890 },
              non: { min: 830, max: 1080 },
            },
            bois: {
              oui: { min: 1600, max: 2100 },
              non: { min: 990, max: 1280 },
            },
            aluminium: {
              oui: { min: 1700, max: 2700 },
              non: { min: 1090, max: 1420 },
            },
          },
        };
        nombreFenetre["remplacement_d_une_fen_tre"] = {
          label: "Remplacement fenêtre",
          prices: NombreDefenetreAutotal(
            {
              nombre: {
                step: "nombre_fen_tre_remplacer",
                field: "plusieurs_choix_possible",
              },
              type: {
                step: "type_mat_riau_pour_les_fen_tres",
                field: "un_seul_choix_possible",
              },
              volet: {
                step: "volet_roulant_int_gr_fen_tre",
                field: "ce_choix_sera_appliqu_l_ensemble_des_fen_tres",
              },
            },
            budgetParFenetre
          ),
        };
        console.log(
          " nombreFenetre remplacement_d_une_fen_tre : ",
          nombreFenetre
        );
      }
      if (type_travaux_sur_fen_tre.includes("cr_ation_d_une_fen_tre")) {
        budgetParFenetre = {
          petite: {
            pvc: {
              oui: { min: 2200, max: 2500 },
              non: { min: 1700, max: 1800 },
            },
            bois: {
              oui: { min: 2300, max: 2700 },
              non: { min: 1800, max: 2100 },
            },
            aluminium: {
              oui: { min: 2400, max: 2900 },
              non: { min: 1900, max: 2200 },
            },
          },
          moyenne: {
            pvc: {
              oui: { min: 2700, max: 3000 },
              non: { min: 2100, max: 2300 },
            },
            bois: {
              oui: { min: 2800, max: 3200 },
              non: { min: 2200, max: 2500 },
            },
            aluminium: {
              oui: { min: 2300, max: 3400 },
              non: { min: 2300, max: 2600 },
            },
          },
          grande: {
            pvc: {
              oui: { min: 3000, max: 3500 },
              non: { min: 2400, max: 2600 },
            },
            bois: {
              oui: { min: 3200, max: 3700 },
              non: { min: 2500, max: 2800 },
            },
            aluminium: {
              oui: { min: 3300, max: 3800 },
              non: { min: 2700, max: 3000 },
            },
          },
        };
        nombreFenetre["cr_ation_d_une_fen_tre"] = {
          label: "Création de fenêtre",
          prices: NombreDefenetreAutotal(
            {
              nombre: {
                step: "nombre_fen_tre_cr_er",
                field: "plusieurs_choix_possible",
              },
              type: {
                step: "type_mat_riau_pour_les_fen_tres",
                field: "un_seul_choix_possible",
              },
              volet: {
                step: "volet_roulant_int_gr_fen_tre",
                field: "ce_choix_sera_appliqu_l_ensemble_des_fen_tres",
              },
            },
            budgetParFenetre
          ),
        };
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
        budgetParFenetre = {
          petite: {
            pvc: {
              oui: { min: 1390, max: 1810 },
              non: { min: 840, max: 1090 },
            },
            bois: {
              oui: { min: 1600, max: 2100 },
              non: { min: 1020, max: 1330 },
            },
            aluminium: {
              oui: { min: 1700, max: 2200 },
              non: { min: 1160, max: 1510 },
            },
          },
          moyenne: {
            pvc: {
              oui: { min: 1600, max: 2100 },
              non: { min: 1020, max: 1330 },
            },
            bois: {
              oui: { min: 1900, max: 2400 },
              non: { min: 1300, max: 1690 },
            },
            aluminium: {
              oui: { min: 2000, max: 2600 },
              non: { min: 1440, max: 1870 },
            },
          },
          grande: {
            pvc: {
              oui: { min: 1800, max: 2300 },
              non: { min: 1210, max: 1570 },
            },
            bois: {
              oui: { min: 2000, max: 2700 },
              non: { min: 1490, max: 1930 },
            },
            aluminium: {
              oui: { min: 2200, max: 2900 },
              non: { min: 1700, max: 2200 },
            },
          },
        };
        nombreFenetre["remplacement_d_une_porte_fen_tre"] = {
          label: "Remplacement porte-fenêtre",
          prices: NombreDefenetreAutotal(
            {
              nombre: {
                step: "quel_type_de_chaudi_re_souhaitez_vous",
                field: "plusieurs_choix_possible",
              },
              type: {
                step: "type_mat_riau_pour_les_portes_fen_tre",
                field: "un_seul_choix_possible",
              },
              volet: {
                step: "volet_roulant_portes_fen_tres",
                field: "ce_choix_sera_appliqu_l_ensemble_des_portes_fen_tres",
              },
            },
            budgetParFenetre
          ),
        };
        console.log(
          " nombreFenetre remplacement_d_une_porte_fen_tre : ",
          nombreFenetre
        );
      }
      if (
        type_travaux_sur_porte_fen_tre.includes("cr_ation_d_une_porte_fen_tre")
      ) {
        budgetParFenetre = {
          petite: {
            pvc: {
              oui: { min: 3100, max: 3600 },
              non: { min: 2500, max: 2800 },
            },
            bois: {
              oui: { min: 3300, max: 3900 },
              non: { min: 2700, max: 3000 },
            },
            aluminium: {
              oui: { min: 3500, max: 4100 },
              non: { min: 2900, max: 3200 },
            },
          },
          moyenne: {
            pvc: {
              oui: { min: 3800, max: 4400 },
              non: { min: 3200, max: 3600 },
            },
            bois: {
              oui: { min: 4200, max: 4800 },
              non: { min: 3500, max: 4000 },
            },
            aluminium: {
              oui: { min: 4300, max: 5000 },
              non: { min: 3700, max: 4200 },
            },
          },
          grande: {
            pvc: {
              oui: { min: 4600, max: 5200 },
              non: { min: 4000, max: 4400 },
            },
            bois: {
              oui: { min: 4900, max: 5600 },
              non: { min: 4300, max: 4800 },
            },
            aluminium: {
              oui: { min: 5100, max: 5800 },
              non: { min: 4500, max: 5000 },
            },
          },
        };

        nombreFenetre["cr_ation_d_une_porte_fen_tre"] = {
          label: "Creation porte-fenêtre",
          prices: NombreDefenetreAutotal(
            {
              nombre: {
                step: "nombre_porte_fen_tre_cr_er",
                field: "plusieurs_choix_possible",
              },
              type: {
                step: "type_mat_riau_pour_les_portes_fen_tre",
                field: "un_seul_choix_possible",
              },
              volet: {
                step: "volet_roulant_portes_fen_tres",
                field: "ce_choix_sera_appliqu_l_ensemble_des_portes_fen_tres",
              },
            },
            budgetParFenetre
          ),
        };
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
        budgetParFenetre = {
          petite: {
            pvc: {
              oui: { min: 2100, max: 2700 },
              non: { min: 1250, max: 1620 },
            },
            bois: {
              oui: { min: 2400, max: 3100 },
              non: { min: 1650, max: 2030 },
            },
            aluminium: {
              oui: { min: 2700, max: 3500 },
              non: { min: 1900, max: 2400 },
            },
          },
          moyenne: {
            pvc: {
              oui: { min: 2500, max: 3200 },
              non: { min: 1460, max: 1890 },
            },
            bois: {
              oui: { min: 2800, max: 3600 },
              non: { min: 1800, max: 2300 },
            },
            aluminium: {
              oui: { min: 3100, max: 4100 },
              non: { min: 2100, max: 2700 },
            },
          },
          grande: {
            pvc: {
              oui: { min: 2900, max: 3800 },
              non: { min: 1700, max: 2200 },
            },
            bois: {
              oui: { min: 3200, max: 4200 },
              non: { min: 2000, max: 2600 },
            },
            aluminium: {
              oui: { min: 3600, max: 4700 },
              non: { min: 2300, max: 3000 },
            },
          },
        };
        nombreFenetre["remplacement_d_une_baie_coulissante"] = {
          label: "Remplacement baie coulissante",
          prices: NombreDefenetreAutotal(
            {
              nombre: {
                step: "nombre_baie_coulissante_a_remplace",
                field: "plusieurs_choix_possibles",
              },
              type: {
                step: "type_mat_riau_pour_les_baie_coulissante",
                field: "plusieur_choix_possible",
              },
              volet: {
                step: "volet_roulant_int_gr_baies_coulissantes",
                field:
                  "ce_choix_sera_appliqu_l_ensemble_des_baies_coulissantes",
              },
            },
            budgetParFenetre
          ),
        };
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
        budgetParFenetre = {
          petite: {
            pvc: {
              oui: { min: 4200, max: 4800 },
              non: { min: 3300, max: 3700 },
            },
            bois: {
              oui: { min: 4500, max: 5200 },
              non: { min: 3600, max: 4100 },
            },
            aluminium: {
              oui: { min: 4800, max: 5600 },
              non: { min: 4000, max: 4500 },
            },
          },
          moyenne: {
            pvc: {
              oui: { min: 5600, max: 6400 },
              non: { min: 4600, max: 5000 },
            },
            bois: {
              oui: { min: 5900, max: 6800 },
              non: { min: 4900, max: 5400 },
            },
            aluminium: {
              oui: { min: 6200, max: 7200 },
              non: { min: 5200, max: 5800 },
            },
          },
          grande: {
            pvc: {
              oui: { min: 7000, max: 7900 },
              non: { min: 5800, max: 6300 },
            },
            bois: {
              oui: { min: 7400, max: 8400 },
              non: { min: 6100, max: 6700 },
            },
            aluminium: {
              oui: { min: 7700, max: 8800 },
              non: { min: 6500, max: 7200 },
            },
          },
        };
        nombreFenetre["cr_ation_d_une_baie_coulissante"] = {
          label: "Creation baie coulissante",
          prices: NombreDefenetreAutotal(
            {
              nombre: {
                step: "nombre_baie_coulissante_a_cr_er",
                field: "plusieurs_choix_possibles",
              },
              type: {
                step: "type_mat_riau_pour_les_baie_coulissante",
                field: "plusieur_choix_possible",
              },
              volet: {
                step: "volet_roulant_int_gr_baies_coulissantes",
                field:
                  "ce_choix_sera_appliqu_l_ensemble_des_baies_coulissantes",
              },
            },
            budgetParFenetre
          ),
        };
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
      budgetParFenetre = {
        petite: {
          oui: { min: 1500, max: 1700 },
          non: { min: 940, max: 1220 },
        },
        moyenne: {
          oui: { min: 1700, max: 2000 },
          non: { min: 1040, max: 1350 },
        },
        grande: {
          oui: { min: 1900, max: 2200 },
          non: { min: 1140, max: 1490 },
        },
      };
      if (
        type_travaux_sur_fen_tre_et_toit.includes(
          "remplacement_d_une_fen_tre_de_toit"
        )
      ) {
        nombreFenetre["remplacement_d_une_fen_tre_de_toit"] = {
          label: "Remplacement fenetre de toit",
          prices: NombreDefenetreAutotal(
            {
              nombre: {
                step: "nombre_fen_tre_toit_remplacer",
                field: "plusieurs_choix_possible",
              },
              volet: {
                step: "volet_roulant_int_gr_baies_coulissantes",
                field: "un_seul_choix_possibl",
              },
            },
            budgetParFenetre
          ),
        };
        console.log(
          " nombreFenetre nombre_fen_tre_toit_remplacer : ",
          nombreFenetre
        );
      }
      if (
        type_travaux_sur_fen_tre_et_toit.includes(
          "cr_ation_d_une_fen_tre_de_toit"
        )
      ) {
        budgetParFenetre = {
          petite: {
            oui: { min: 1700, max: 2000 },
            non: { min: 1140, max: 1490 },
          },
          moyenne: {
            oui: { min: 1900, max: 2200 },
            non: { min: 1250, max: 1620 },
          },
          grande: {
            oui: { min: 2100, max: 2500 },
            non: { min: 1350, max: 1760 },
          },
        };

        nombreFenetre["cr_ation_d_une_fen_tre_de_toit"] = {
          label: "Creation fenetre de toit",
          prices: NombreDefenetreAutotal(
            {
              nombre: {
                step: "nombre_fen_tre_toit_cr_er",
                field: "plusieurs_choix_possible",
              },
              volet: {
                step: "volet_roulant_int_gr_baies_coulissantes",
                field: "un_seul_choix_possibl",
              },
            },
            budgetParFenetre
          ),
        };
        console.log(
          " nombreFenetre nombre_nombre_fen_tre_toit_cr_er : ",
          nombreFenetre
        );
      }
    }

    var priceTotal = "<div><ul class='list-price'>";
    for (const i in nombreFenetre) {
      const subGroup = nombreFenetre[i];
      priceTotal += "<li>";
      priceTotal += "<div>" + subGroup.label + ", </div>";
      priceTotal += "<div>";
      for (const j in subGroup.prices) {
        const price = subGroup.prices[j];
        priceTotal += "<div>";
        priceTotal += j + " : <span class='price'> " + price + " € </span>";
        priceTotal += "</div>";
      }
      priceTotal += "</div>";
      priceTotal += "</li>";
    }
    priceTotal += "</div></ul>";
    return priceTotal;
  }
}
BudgetFenetre();
