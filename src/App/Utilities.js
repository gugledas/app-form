const Utilities = {
  /**
   * Prepare les données de paramètres de la page de formulaires pour la sauvagarde.
   */
  settingForm: function (datas) {
    return new Promise((resolv) => {
      //console.log("fdate : ", datas);
      var value = "";

      value = JSON.stringify(datas.value);

      var result = [];
      if (datas != "") {
        //edition de la table contents
        var table1 = {
          table: "appformmanager_config",
          fields: {
            name: datas.name,
            value: value,
          },
          action: "update",
        };
        table1.where = [
          {
            column: "name",
            value: datas.name,
          },
        ];
        result.push(table1);
      }
      resolv(result);
    });
  },

  field() {
    return {
      type: "",
      title: "",
      label: "",
      name: "",
      value: null,
      imgUrl: "",
      require: "",
      options: [],
      states: [],
    };
  },
  resetField(field) {
    const defaultField = this.field();
    for (const i in field) {
      field[i] = defaultField[i];
    }
  },
  typeOptions() {
    return [
      { value: null, text: "Please select an option" },
      { value: "radio", text: "Radio" },
      { value: "text", text: "text" },
      { value: "select", text: "Select" },
      { value: "number", text: "Number" },
      { value: "checkbox", text: "Checkbox" },
      { value: "increment", text: "Spin Button" },
      { value: "markuptitle", text: "Markup Title" },
      { value: "markupimage", text: "Markup Image" },
      { value: "checkboximg", text: "Checkbox Image" },
      { value: "codepostal", text: "Code Postal input" },
      { value: "radiodesc", text: "Radio with Description" },
      { value: "numberup", text: "Number label up" },
      { value: "file", text: "Ajout de fichiers" },
      { value: "recapitulatif", text: "Recapitulatif du montant" },
      { value: "userlogin", text: "Connexion utilisateur" },
      { value: "input-aide-financiere", text: "Aide financiere" },
    ];
  },
  array_move(arr, old_index, new_index) {
    while (old_index < 0) {
      old_index += arr.length;
    }
    while (new_index < 0) {
      new_index += arr.length;
    }
    if (new_index >= arr.length) {
      var k = new_index - arr.length + 1;
      while (k--) {
        arr.push(undefined);
      }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  },
};
export default Utilities;
