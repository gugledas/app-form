<template>
  <b-container fluid="md">
    <div>
      <title-bar
        :conf="{ col: true, text: 'Traitement devis : ' + titreDevis }"
        :id="id"
        :showDevis="false"
      ></title-bar>
    </div>
    <div class="appfom-container">
      <b-row align-h="center">
        <b-col class="" cols="12">
          <listBlocks
            :liste_fields_check="ListeFieldsCheck"
            :liste_fields_display="ListeFieldsDisplay"
            :totalRows="totalRows"
            :isBusy="isBusy"
            :perPage="perPage"
            @ev-change-pagination="ChangePagination"
          ></listBlocks>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import TitleBar from "../components/TitleBar.vue";
import config from "../config/config.js";
import { mapState, mapGetters } from "vuex";
import listBlocks from "./blocks/listBlocks.vue";

export default {
  components: { listBlocks, TitleBar },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data: () => {
    return {
      totalRows: 0,
      isBusy: false,
      perPage: 8,
    };
  },
  watch: {
    stepsId() {
      this.datasBdOrLocalStorage();
    },
  },
  mounted() {
    this.loadDatas();
    this.getTotalRows();
  },
  computed: {
    ...mapState(["traitementId", "form", "traitementItems"]),
    ...mapGetters(["traitementFormItems"]),
    ListeFieldsDisplay() {
      const fieldsDisplay = [
        {
          label: "Date",
          key: "created",
          formatter: function (val) {
            return config.getMysqlDateToFrench(val);
          },
        },
        {
          label: "Que souhaitez vous faire",
          key: "action",
          stickyColumn: true,
          thStyle: { minWidth: "170px" },
          tdClass: ["bg-light"],
        },
        {
          label: "Status",
          key: "status",
          thStyle: { minWidth: "140px" },
        },
        {
          label: "Prix",
          key: "price",
          thStyle: { minWidth: "120px" },
          formatter: (value) => {
            return value + " €";
          },
        },
        {
          label: "Utilisateur",
          key: "uid",
          thStyle: { minWidth: "220px" },
        },
      ];
      for (const i in this.form.forms) {
        const form = this.form.forms[i];
        // console.log("etate : ", form.info.name, "\n\n");
        for (const f in form.fields) {
          const field = form.fields[f];
          // console.log(field);
          if (field.display_field) {
            fieldsDisplay.push({
              label: field.label,
              key: field.name,
              thStyle: { minWidth: "220px" },
            });
          }
        }
      }
      return fieldsDisplay;
    },
    ListeFieldsCheck() {
      const lists = [];
      for (const i in this.ListeFieldsDisplay) {
        lists.push(this.ListeFieldsDisplay[i].key);
      }
      return lists;
    },
    titreDevis() {
      if (this.traitementItems.length) {
        return this.traitementItems[0].name;
      } else return "";
    },
  },
  methods: {
    deleteSteps(datas) {
      var all = this.$store.state.allStepsDatas;
      var r = all.indexOf(this.formDatas);
      this.$emit("index-to-delete", r);
      console.log("de", datas);
      for (var i = all.length - 1; i >= 0; i--) {
        if (i === r) {
          all.splice(i, 1);
          console.log("iiippp");
        }
      }
    },

    saveToLocal() {
      config.prepareDatasToSave(this.form).then((val) => {
        config.saveForm(val).then(() => {
          //
        });
      });
    },
    resetValue() {
      this.$store.getters.formDatas.selected = "";
      this.$store.getters.formDatas.value = [];
    },
    handleOk(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.handleSubmit();
    },
    handleSubmit(event) {
      event.preventDefault();
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    },
    getTotalRows() {
      var payload = {
        beginSql: " select count(*) as nombres from `appformmanager_datas` ",
        filters: {
          AND: [],
          OR: [],
        },
      };
      payload.filters.AND.push({
        column: "appformmanager_forms",
        value: this.id,
      });
      config
        .bPost("/appformmanager/count-devis", payload, {}, false)
        .then((resp) => {
          if (resp.data[0] && resp.data[0].nombres) {
            this.totalRows = parseInt(resp.data[0].nombres);
          }
        });
    },
    loadDatas(pagination = 0) {
      this.isBusy = true;
      var payload = {
        filters: {
          AND: [],
          OR: [],
        },
      };
      payload.filters.AND.push({
        column: "appformmanager_forms",
        value: this.id,
        preffix: "dv",
      });
      payload.filters.AND.push({
        column: "order",
        value: 0,
        preffix: "st",
      });
      config
        .bPost(
          "/appformmanager/getdevis/" + pagination + "/" + this.perPage,
          payload,
          {},
          false
        )
        .then((resp) => {
          this.$store.state.traitementItems = resp.data;
          this.$store.dispatch("setTraitId", this.id);
          this.$store.dispatch("setFormId", this.id);
          this.isBusy = false;
        })
        .catch((error) => {
          console.log("error", error);
          this.isBusy = false;
        });
    },
    ChangePagination(val) {
      this.loadDatas(val - 1);
    },
  },
};
</script>
<style lang="scss">
.form-title {
  letter-spacing: 2px;
  margin-left: 10px;
  font-weight: 600;
}
.block-button {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  button {
    margin: 5px;
  }
}
@import "./affichage/traitement.scss";
</style>
