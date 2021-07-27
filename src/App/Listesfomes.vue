<template lang="html">
  <div>
    <div class="home-form">
      <b-container fluid="lg">
        <b-row align-h="center">
          <b-col cols="12" md="10" class="shadow d-flex justify-content-center">
            <div class="home-form_block">
              <div class="block-header">
                <div class="content">
                  <h1>Quels travaux de rénovation souhaitez-vous</h1>
                  <p>Décrivé votre projet et visualiser votre estimation.</p>
                  <p>
                    Vous pourriez ensuite entrer en relation avec les meilleurs
                    professionels de notre réseau.
                  </p>
                  <div class="link">
                    <a href="#" class="button-link">Comment sa marche?</a>
                  </div>
                </div>
              </div>
              <div class="video-center"></div>
              <b-col cols="12" class="text-center my-5" v-if="!items.length">
                <b-spinner
                  style="width: 8rem; height: 8rem"
                  label="Large Spinner"
                  variant="info"
                  type="grow"
                ></b-spinner>
              </b-col>
              <b-row class="block-option">
                <div class="block" v-for="(form, index) in items" :key="index">
                  <div class="block_img">
                    <img src="../../img/image.jpg" />
                  </div>
                  <div class="block_desc">
                    <span>{{ form.name }}</span>
                  </div>
                  <div class="p-relative">
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

                <div class="block-plus" @click="newForm">
                  <div class="horiz"></div>
                  <div class="verti"></div>

                  <div class="block_desc">
                    <span>Nouveau Formulaire</span>
                  </div>
                </div>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
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
    newForm() {
      this.$bvModal.show("add-edit-form");
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
