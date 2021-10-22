<template lang="html">
  <div>
    <loaderIcon :busy="busy"></loaderIcon>
    <div class="block-option" v-if="!busy">
      <!-- lists -->
      <div class="block" v-for="(form, index) in items" :key="index">
        <div class="form-stats" :number="getStatisqueByNumber(form)">
          <!-- Affiche les status -->
          <div>
            <b-button
              variant=""
              class="form-stats__btn form-stats__red"
              v-b-tooltip.hover.v-danger
              title="Projet en attente de rappel"
              v-if="form.onWaitNumber"
            >
              <span> {{ form.onWaitNumber }} </span>
            </b-button>
            <b-button
              variant=""
              class="form-stats__btn form-stats__bleu"
              v-b-tooltip.hover.v-primary
              title="Projet sauvegardé"
              v-if="form.onSave"
            >
              <span> {{ form.onSave }} </span>
            </b-button>
            <b-button
              variant=""
              class="form-stats__btn form-stats__gris"
              v-b-tooltip.hover.v-secondary
              title="Projet abandonné"
              v-if="form.onCancel"
            >
              <span>{{ form.onCancel }}</span>
            </b-button>
          </div>
          <!-- img -->
          <div
            class="block_img"
            @click="
              !$store.state.mode
                ? updateMyOwnForm(form.id)
                : showResult(form.id)
            "
          >
            <img :src="findUrlImg(form)" />
          </div>
          <!-- title -->
          <div
            class="block_desc"
            @click="
              !$store.state.mode
                ? updateMyOwnForm(form.id)
                : showResult(form.id)
            "
          >
            <span> {{ form.name }} </span>
          </div>

          <!-- Bonttons d'action -->
          <b-button-group class="home-button">
            <b-button
              variant="outline-primary"
              @click="voirForm(form.id)"
              v-b-tooltip.hover.v-primary
              title="Estimer mes travaux"
            >
              <b-icon icon="eye"></b-icon>
            </b-button>

            <b-button
              variant="outline-secondary"
              @click="updateMyOwnForm(form.id)"
              v-b-tooltip.hover.v-secondary
              title="voir mes devis"
            >
              <b-icon icon="newspaper"></b-icon>
            </b-button>

            <b-button
              variant="outline-warning"
              @click="updateForm(form.id)"
              v-if="$store.state.mode"
              v-b-tooltip.hover.v-warning
              title="Modifier"
            >
              <b-icon icon="pencil"></b-icon>
            </b-button>
            <b-button
              variant="outline-success"
              @click="showResult(form.id)"
              v-if="$store.state.mode"
              v-b-tooltip.hover.v-success
              title="Voir les soumissions"
            >
              <b-icon icon="server"></b-icon>
            </b-button>
            <b-button
              variant="outline-danger"
              @click="deleteForm(form.id)"
              v-if="$store.state.mode"
              v-b-tooltip.hover.v-danger
              title="Supprimer le formulaire "
            >
              <b-icon icon="trash"></b-icon>
            </b-button>
          </b-button-group>
        </div>
      </div>
      <div class="block-plus" v-if="$store.state.mode" @click="newForm">
        <div class="horiz"></div>
        <div class="verti"></div>
        <div class="block_desc">
          <span>Nouveau Formulaire</span>
        </div>
      </div>
      <AddEditForm></AddEditForm>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AddEditForm from "./ConfigsForms/AddEditForm.vue";
import loaderIcon from "./ConfigsForms/loaderIcon.vue";
import config from "./config/config.js";

export default {
  name: "ListesfomesItems",
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
      busy: false,
    };
  },
  components: {
    AddEditForm,
    loaderIcon,
  },
  mounted() {
    this.busy = true;
    this.$store.dispatch("loadFormsDatas").then(() => {
      setTimeout(() => {
        this.busy = false;
      }, 500);
    });
  },
  computed: {
    ...mapState(["items"]),
  },
  methods: {
    newForm() {
      this.$bvModal.show("add-edit-form");
    },
    findUrlImg(form) {
      var url =
        "https://www.mesdepanneurs.fr/sites/mesdepanneurs.fr/files/field/image/travaux-renovation-maison.jpeg";

      if (form.img) {
        if (form.img.length) {
          url = config.BaseUrl() + form.img;
        }
      }
      return url;
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
    voirForm(id) {
      this.$router.push({ path: `/estimation-devis/${id}` });
    },
    updateMyOwnForm(id) {
      this.$router.push({ path: `/traitement-my-own/${id}` });
    },
    updateForm(id) {
      this.$router.push({ path: `/edit-form/${id}` });
    },
    showResult(id) {
      this.$router.push({ path: `/traitement/${id}` });
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
  },
};
</script>
