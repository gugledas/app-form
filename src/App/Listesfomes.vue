<template lang="html">
  <div>
    <b-button variant="outline-info" v-b-modal.add-edit-form> + </b-button>
    <b-table :items="items" :fields="fields">
      <template #cell(action)="data">
        <div class="p-relative">
          <b-button-group class="boutton-absolute">
            <b-button
              variant="outline-primary"
              @click="voirForm(data.index)"
              v-b-tooltip.hover.v-primary
              title="Voir"
            >
              <b-icon icon="eye"></b-icon>
            </b-button>

            <b-button
              variant="outline-warning"
              @click="updateForm(data.index)"
              v-if="$store.state.mode"
              v-b-tooltip.hover.v-warning
              title="Modifier"
            >
              <b-icon icon="pencil"></b-icon>
            </b-button>
            <b-button
              variant="outline-success"
              @click="showResult(data.item.id)"
              v-if="$store.state.mode"
              v-b-tooltip.hover.v-success
              title="Voir les soumissions"
            >
              <b-icon icon="server"></b-icon>
            </b-button>
            <b-button
              variant="outline-danger"
              @click="deleteForm(data.item.id)"
              v-if="$store.state.mode"
              v-b-tooltip.hover.v-danger
              title="Supprimer le formulaire "
            >
              <b-icon icon="trash"></b-icon>
            </b-button>
          </b-button-group>
        </div>
      </template>
    </b-table>
    <AddEditForm></AddEditForm>
  </div>
</template>

<script>
import { mapState } from "vuex";
import config from "./config/config.js";
export default {
  name: "Listesfomes",
  props: {},
  components: {
    AddEditForm: () => import("./ConfigsForms/AddEditForm.vue"),
  },
  data() {
    return {
      fields: [
        {
          label: "Identifiant",
          key: "id",
        },
        {
          label: "nom du formulaire",
          key: "name",
        },
        {
          label: "Description",
          key: "description",
        },
        {
          label: "#Action",
          key: "action",
          thClass: ["th-action"],
        },
      ],
    };
  },
  mounted() {},
  watch: {},
  computed: {
    ...mapState(["items"]),
  },
  methods: {
    updateForm(id) {
      this.$router.push({ path: `/edit-form/${id}` });
    },
    voirForm(id) {
      this.$router.push({ path: `/estimation-devis/${id}` });
    },
    showResult(id) {
      this.$router.push({ path: `/traitement/${id}` });
    },
    deleteForm(id) {
      this.$bvModal
        .msgBoxConfirm(
          "Confirmer la suppression, NB : cette action est irreverssible.",
          {
            title: "Attention",
            size: "sm",
            buttonSize: "sm",
            okVariant: "danger",
            okTitle: "Supprimer",
            cancelTitle: "Annuler",
            footerClass: "p-2",
            hideHeaderClose: false,
            centered: true,
          }
        )
        .then((value) => {
          if (value) {
            config.deleteForm(id).then(() => {
              window.location.reload();
            });
          }
        });
      /*
        .catch((err) => {
          console.log("refus : ", err);
        });
        /**/
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
