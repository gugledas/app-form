<template lang="html">
  <div>
    <div class="home-form">
      <b-container fluid="lg">
        <b-row align-h="center">
          <b-col
            cols="12"
            md="10"
            class="app-form-shadow d-flex justify-content-center"
          >
            <div class="home-form_block">
              <div class="block-header">
                <div class="config">
                  <b-button
                    class="config-btn"
                    @click="settingform"
                    v-if="$store.state.mode"
                    v-b-tooltip.hover.v-dark
                    title="Setting"
                  >
                    <b-icon icon="gear" class="setting-icon"></b-icon>
                  </b-button>
                </div>
                <div class="content">
                  <h1>{{ pageInfo.title }}</h1>
                  <p
                    v-html="pageInfo.description"
                    v-if="pageInfo.description && pageInfo.description !== ''"
                  ></p>

                  <div
                    class="link"
                    @click="showHideVideo"
                    v-if="pageInfo.video && pageInfo.video !== ''"
                  >
                    <span href="#" class="button-link">
                      <span> Comment sa marche ? </span>
                      <b-icon
                        :icon="pageInfo.showVideo ? 'arrow-up' : 'arrow-down'"
                        class="ml-2 setting-icon"
                      ></b-icon>
                    </span>
                  </div>
                </div>
              </div>
              <transition
                name="fade"
                v-if="pageInfo.video && pageInfo.video !== ''"
              >
                <div
                  class="video-center"
                  v-if="pageInfo.video.length && pageInfo.showVideo"
                >
                  <iframe
                    title="YouTube video player"
                    :src="pageInfo.video"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </transition>
              <b-col cols="12" class="text-center" v-if="!items.length">
                <b-spinner
                  style="width: 3rem; height: 3rem"
                  label="Large Spinner"
                  variant="dark"
                  type="grow"
                ></b-spinner>
              </b-col>
              <b-row class="block-option">
                <div class="block" v-for="(form, index) in items" :key="index">
                  <!-- -->
                  <div class="form-stats" :number="getStatisqueByNumber(form)">
                    <b-spinner
                      v-if="false"
                      style="width: 2rem; height: 2rem"
                      label="Large Spinner"
                      variant="warning"
                      class="ml-2"
                      type="grow"
                    ></b-spinner>
                    <div v-if="true">
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
                  </div>
                  <div
                    class="block_img"
                    @click="
                      !$store.state.mode
                        ? updateMyOwnForm(form.id)
                        : showResult(form.id)
                    "
                  >
                    <img :src="trueUrl(form)" />
                  </div>
                  <!-- -->
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

                  <div>
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

                <div
                  class="block-plus"
                  v-if="$store.state.mode"
                  @click="newForm"
                >
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
    <SettingForm></SettingForm>
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
