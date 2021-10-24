<template>
  <b-container fluid="md">
    <div>
      <title-bar
        :conf="{ col: true, text: 'Traitement' }"
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

//import axios from "axios";
import config from "../config/config.js";
//import utilities from "./Utilities";
//import NavLine from "./NavLine.vue";
import { mapState, mapGetters } from "vuex";
//import ListTable from "./ListTable.vue";
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
      perPage: 20,
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
    ...mapState(["traitementId", "form"]),
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
      //var self = this;
      //var datas = this.form;
      config.prepareDatasToSave(this.form).then((val) => {
        config.saveForm(val).then(() => {
          //
        });
      });
    },

    resetValue() {
      this.$store.getters.formDatas.selected = "";
      this.$store.getters.formDatas.value = [];
      console.log("prev");
    },
    resetModal() {
      //   this.formDatas.info.title = "";
      //   this.titleState = null;
      //   this.headerTitle = "";
      //   this.headerState = null;
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit(event) {
      event.preventDefault();
      // Exit when the form isn't valid
      this.demo = true;

      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    },
    getTotalRows() {
      var datas =
        "select count(*) as nombres from `appformmanager_datas` where `appformmanager_forms` = " +
        this.id;
      config.getData(datas).then((resp) => {
        if (resp.data[0] && resp.data[0].nombres) {
          this.totalRows = parseInt(resp.data[0].nombres);
        }
        console.log("resp[0].nombres : ", resp.data[0]);
      });
    },
    loadDatas(pagination = 0) {
      this.isBusy = true;
      var pag = null;
      if (pagination) pag = (pagination - 1) * this.perPage;
      this.$store
        .dispatch("loadTraitementDatas", {
          id: this.id,
          pagination: pag,
        })
        .then(() => {
          this.$store.dispatch("setTraitId", this.id);
          this.$store.dispatch("setFormId", this.id);
          this.isBusy = false;
        });
    },
    ChangePagination(val) {
      this.loadDatas(val);
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
