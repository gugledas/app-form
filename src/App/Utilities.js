const Utilities = {
  /**
   * Prepare les données pour la sauvagarde.
   */
  saveSteps: function (datas) {
    return new Promise((resolv) => {
      //console.log("fdate : ", datas);
      var result = [];
      if (datas != "") {
        //edition de la table contents
        var table1 = {
          table: "appformmanager_fomrs",
          fields: {
            forms: datas.forms,
            description: datas.description,
            name: datas.name,
          },
          action: "update",
        };
        if (datas.id) {
          table1.where = [
            {
              column: "id",
              value: datas.id,
            },
          ];
        }

        result.push(table1);
      }
      resolv(result);
    });
  },
};
export default Utilities;
