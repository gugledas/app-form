[
  {
    info: {
      header_title: "Tous les travaux",
      title: "Quels travaux d’isolation souhaitez-vous réaliser ?",
      step_id: 1,
      name: "step1",
      type: "step"
    },
    fields: [
      {
        type: "markup",
        value: "Quels travaux d’isolation souhaitez-vous réaliser ?"
      },
      {
        type: "checkbox",
        label: "Plusieurs choix possibles.",
        require: true,
        name: "type_renovation",
        value: ["val1", "val3"],
        options: [
          {
            text: "Combles aménagés par l’intérieur",
            val: "val1"
          },
          {
            text: "Renovation du miroir",
            val: "renovaion_cuisine_miroir"
          },
          {
            text: "Combles perdus",
            val: "val1"
          },
          {
            text: "Toit-terrasse",
            val: "val1"
          }
        ]
      },
      {
        type: "text",
        value: [],
        label: "model de champs",
        name: "type_tache",
        required: [] // contient les chaines de validation, example "required" ou "required|email",
      },
      {
        type: "checkbox",
        label: "",
        require: true,
        name: "renovaion_cuisine_miroir_options",
        options: [
          {
            text: "J'accepter d'etre developpeur",
            val: "condition-validée"
          }
        ],
        state: [
          {
            name: "type_renovation",
            value: "renovaion_cuisine_miroir",
            operator: "AND"
          }
        ]
      }
    ]
  },
  {
    info: {
      header_title: "Tous les travaux",
      title: "Quelle est la mitoyenneté de votre logement ?",
      step_id: 2,
      name: "step2",
      state: [
        {
          fields: [[{name: "type_renovation", value: "val1", operator: "AND"}]]
        }
      ],
      fields: [
        {
          type: "checkboxicone",
          label: "Un seul choix possible",
          require: true,
          name: "type_tache[mitoyen]",
          options: [
            {
              text: "val1",
              val: "val1",
              img: "url"
            },
            {
              text: "val1",
              val: "val1",
              img: "url"
            },
            {
              text: "val1",
              val: "val1",
              img: "url"
            },
            {
              text: "val1",
              val: "val1",
              img: "url"
            }
          ]
        }
      ]
    }
  },
  {
    info: {
      header_title: "Tous les travaux",
      title: "Quelles sont les dimensions de vos combles ?",
      step_id: 1,
      name: "step3",
      state: [
        {
          fields: [[{name: "type_tache", value: "val1", operator: "AND"}]]
        }
      ],
      fields: [
        {
          markup: "url img"
        },
        {
          type: "number",
          label: "Longueur",
          require: true,
          name: "type_tache[longueur]"
        },
        {
          type: "number",
          label: "Largeur",
          require: true,
          name: "longueur"
        },
        {
          type: "number",
          label: "Hauteur",
          require: true,
          name: "Hauteur",
          default: 3
        }
      ]
    }
  },
  {
    info: {
      header_title: "Tous les travaux",
      title: "Quel niveau de performance souhaitez-vous ?",
      step_id: 4,
      name: "step4",
      state: [
        {
          fields: [[{name: "type_tache", value: "val1", operator: "AND"}]]
        }
      ],
      fields: [
        {
          type: "checkboxdescription",
          label: "Un seul choix possible",
          require: true,
          name: "type_tache",
          options: [
            {
              text: "val1",
              description: "sdfdf ",
              val: "val1"
            },
            {
              text: "val1",
              val: "val1",
              description: "sdfdf "
            },
            {
              text: "val1",
              val: "val1",
              description: "sdfdf "
            }
          ]
        }
      ]
    }
  },
  {
    info: {
      header_title: "Tous les travaux",
      title: "Quel niveau de performance souhaitez-vous ?",
      step_id: 4,
      name: "step4",
      state: [
        {
          fields: [[{name: "type_tache", value: "val1", operator: "AND"}]]
        }
      ],
      fields: [
        {
          type: "radios",
          label: "",
          require: true,
          name: "type_tache",
          options: [
            {
              text: "Oui",
              val: "oui"
            },
            {
              text: "Non",
              val: "non"
            }
          ]
        }
      ]
    }
  },
  {
    info: {
      header_title: "Tous les travaux",
      title: "Souhaitez vous des options de confort ?",
      step_id: 4,
      name: "step4",
      state: [
        {
          fields: [[{name: "type_tache", value: "val1", operator: "AND"}]]
        }
      ],
      fields: [
        {
          type: "checkbox",
          label: "Plusieurs choix possibles.",
          require: true,
          name: "type_tache",
          options: [
            {
              text: "Protection renforcée contre les bruits extérieurs",
              val: "Protection renforcée contre les bruits extérieurs"
            },
            {
              text: "Non",
              val: "non"
            }
          ]
        }
      ]
    }
  },
  {
    info: {
      header_title: "Tous les travaux",
      title: "Souhaitez-vous que les murs soient peints ?",
      step_id: 4,
      name: "step4",
      state: [
        {
          fields: [[{name: "type_tache", value: "val1", operator: "AND"}]]
        }
      ],
      fields: [
        {
          type: "radios",
          label: "",
          require: true,
          name: "type_tache",
          options: [
            {
              text: "Oui",
              val: "oui"
            },
            {
              text: "Non",
              val: "non"
            }
          ]
        }
      ]
    }
  },
  {
    info: {
      header_title: "Tous les travaux",
      title: "Quels travaux d’isolation souhaitez-vous réaliser ?",
      step_id: 1,
      name: "step1",
      state: [
        {
          validate: [
            {
              step: "step1",
              fields: [[{name: "type_tache", value: "val1", operator: "AND"}]]
            }
          ]
        }
      ]
    }
  }
];
