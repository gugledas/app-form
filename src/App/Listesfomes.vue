<template lang="html">
  <div>
    <b-button variant="outline-info" v-b-modal.add-edit-form> + </b-button>
    <b-table :items="items" :fields="fields">
      <template #cell(action)="data">
        <div class="p-relative">
          <b-button-group class="boutton-absolute">
            <b-button
              variant="outline-primary"
              @click="voirForm(data.item.id)"
              v-b-tooltip.hover.v-primary
              title="Estimer mes travaux"
            >
              <b-icon icon="eye"></b-icon>
            </b-button>

            <b-button
              variant="outline-secondary"
              @click="updateMyOwnForm(data.item.id)"
              v-b-tooltip.hover.v-secondary
              title="voir mes devis"
            >
              <b-icon icon="newspaper"></b-icon>
            </b-button>

            <b-button
              variant="outline-warning"
              @click="updateForm(data.item.id)"
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

import { AjaxToastBootStrap } from "wbuutilities";

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
    updateMyOwnForm(id) {
      this.$router.push({ path: `/traitement-my-own/${id}` });
    },
    deleteForm(id) {
      AjaxToastBootStrap.modalConfirmDelete().then((value) => {
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
