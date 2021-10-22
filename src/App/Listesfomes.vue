<template lang="html">
  <b-container fluid="lg">
    dfdff
    <AddEditForm></AddEditForm>
    <SettingForm></SettingForm>
  </b-container>
</template>

<script>
import { mapState } from "vuex";
import config from "./config/config.js";

export default {
  name: "Listesfomes",
  props: {},
  components: {
    AddEditForm: () => import("./ConfigsForms/AddEditForm.vue"),
    SettingForm: () => import("./ConfigsForms/SettingForm.vue"),
  },
  data() {
    return {
      fields: [
        {
          label: "Identifiant",
          key: "id",
        },
        {
          label: "Type de travaux",
          key: "name",
        },
        {
          label: "Que souhaitez vous faire",
          key: "action",
          thClass: ["th-action"],
        },
      ],
    };
  },
  mounted() {
    this.loadPageInfo();
  },
  watch: {},
  computed: {
    ...mapState(["items", "pageInfo"]),
  },
  methods: {
    loadPageInfo() {
      this.$store.dispatch("loadPageInfo");
    },
    trueUrl(form) {
      var url =
        "https://www.mesdepanneurs.fr/sites/mesdepanneurs.fr/files/field/image/travaux-renovation-maison.jpeg";

      if (form.img) {
        if (form.img.length) {
          url = config.BaseUrl() + form.img;
        }
      }
      return url;
    },
    showHideVideo() {
      this.$store.state.pageInfo.showVideo =
        !this.$store.state.pageInfo.showVideo;
    },
    newForm() {
      this.$bvModal.show("add-edit-form");
    },
    settingform() {
      this.$bvModal.show("setting-form");
    },
    updateForm(id) {
      this.$router.push({ path: `/edit-form/${id}` });
    },
    voirForm(id) {
      this.$router.push({ path: `/estimation-devis/${id}` });
    },
    showResult(id) {
      this.$router.push({ path: `/traitement/${id}` });
    },
    updateMyOwnForm(id) {
      this.$router.push({ path: `/traitement-my-own/${id}` });
    },
    deleteForm(id) {
      console.log("object", id);
      config.modalConfirmDelete().then((value) => {
        if (value) {
          config.deleteForm(id).then(() => {
            window.location.reload();
          });
        }
      });
    },
    getStatisqueByNumber(form) {
      if (!this.$store.getters.uid) return;
      var sql =
        "select count(*) as nombre, status from `appformmanager_datas` where appformmanager_forms = (select id from `appformmanager_fomrs` where id=" +
        form.id +
        ") group by status";
      if (!this.$store.state.mode)
        sql =
          "select count(*) as nombre, status from `appformmanager_datas` where uid=" +
          this.$store.getters.uid +
          " and appformmanager_forms = (select id from `appformmanager_fomrs` where id=" +
          form.id +
          ") group by status";
      config.bPost("/query-ajax/select", sql, {}, false).then((resp) => {
        if (resp.data.length) {
          //console.log("resp.data ", resp.data);
          resp.data.forEach((item) => {
            if (item.status === "0") {
              this.$set(form, "onWaitNumber", item.nombre);
            } else if (item.status === "1") {
              this.$set(form, "onSave", item.nombre);
            } else if (item.status === "2") {
              this.$set(form, "onCancel", item.nombre);
            }
          });
        }
      });
    },
  },
};
</script>

<!--
 //nom du fichier en pascal.
 //<template>
 - le nom des attributs en kebab-case;
 - la valeur des attributs et des variables en camelCase;
 - function en PascalCase
 //props, data
 - variable en camelCase
 //methods
 - variable en PascalCase
-->
