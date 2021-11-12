<template>
  <div>
    <loader-icon :busy="isBusy"></loader-icon>
    <div v-if="!isBusy" class="titre-project-resume">
      <b-col cols="12" md="5" lg="3" class="notif">
        <span class="notif-alert notif-at">
          {{ nombreStatus.rappel.length }}
        </span>
        <span> Projet en attente de rappel </span>
      </b-col>
      <b-col cols="12" md="5" lg="3" class="notif">
        <span class="notif-alert notif-sa">{{ nombreStatus.save.length }}</span>
        <span> Projet sauvegardé </span>
      </b-col>
      <b-col cols="12" md="5" lg="3" class="notif" v-if="$store.state.mode">
        <span class="notif-ab notif-alert">
          {{ nombreStatus.loose.length }}
        </span>
        <span> Projet abandonné </span>
      </b-col>
    </div>
    <b-row :trigger_perfom="trigger_perfom" class="list-block" v-if="!isBusy">
      <b-col v-for="(item, i) in traitementFormItemsDisplay" :key="i" md="12">
        <block
          :item="item"
          :form="form"
          :traitementFormItems="traitementFormItemsDisplay"
          :data-id="i"
          @get-valide-stepe="getValideStepe"
          @form-traiter="formTraiter"
          @get-info-user="getInfoUser"
        ></block>
      </b-col>
    </b-row>

    <!-- -->
    <b-pagination
      v-model="currentPage"
      :total-rows="totalRows"
      :per-page="perPage"
      align="fill"
      size="sm"
      class="pt-5 pb-5 mt-5 mb-0"
      @change="changePagination"
      v-if="totalRows > perPage"
    ></b-pagination>

    <!-- -->
    <b-modal
      id="modal--closing"
      v-model="showModal"
      ref="modal"
      size="lg"
      :title="'Résultat du formulaire'"
      scrollable
      class="super-hover"
      cancelTitle="Quitter"
      okTitle="Me rappeler"
    >
      <b-row align-h="center" v-if="traitementFormItemsDisplay.length">
        <b-col sm="12" class="mb-4" v-for="(steps, i) in validSteps2" :key="i">
          <b-card no-body class="mb-1" v-if="steps !== undefined">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block variant="dark" disabled>
                {{ steps.info.title }}
              </b-button>
            </b-card-header>
            <b-collapse
              id="accordion-option"
              accordion="my-accordion"
              role="tabpanel"
              visible
            >
              <b-card-body class="p-2">
                <b-row class="d-flex flex-wrap">
                  <b-col
                    cols="12"
                    v-for="(field, index) in steps.fields"
                    :key="index"
                  >
                    <type-displays
                      :field="field"
                      :currentDevis="currentDevis"
                      class="mb-2"
                    ></type-displays>
                  </b-col>
                </b-row>
              </b-card-body>
            </b-collapse>
          </b-card>
        </b-col>
      </b-row>

      <template #modal-footer>
        <div class="d-flex">
          <div class="w-100">
            <b-button
              variant="primary"
              size="sm"
              class="mr-3"
              @click="$bvModal.hide('modal--closing')"
            >
              Quitter
            </b-button>
            <b-button
              variant="primary"
              size="sm"
              @click="updateStatus()"
              v-if="
                (currentDevis.status === '1' || currentDevis.status === 1) &&
                currentDevis.uid.includes($store.getters.uid)
              "
            >
              Me rappeler
            </b-button>
          </div>
        </div>
      </template>
    </b-modal>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
//import Utilities from "../../../store/utilities";
import config from "../../config/config";

import { users } from "drupal-vuejs";
import block from "../affichage/bloc.vue";
import LoaderIcon from "../../components/loaderIcon.vue";
export default {
  name: "listBlocks",
  props: {
    liste_fields_check: {
      type: Array,
      default: function () {
        return [];
      },
    },
    liste_fields_display: {
      type: Array,
      default: function () {
        return [];
      },
    },
    totalRows: {
      type: Number,
      required: true,
    },
    isBusy: {
      type: Boolean,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
  },
  components: {
    block,
    typeDisplays: () => import("../affichage/typeDisplays.vue"),
    LoaderIcon,
  },
  data() {
    return {
      showModal: false,
      validSteps2: [],
      traitementFormItemsDisplay: [],
      /**
       * L'id du devis selectionné.
       */
      currentDataId: null,
      /**
       * Les informations du devis selectionné.
       */
      currentDevis: {},
      currentPage: 1,
      //totalRows: 20,
      //perPage: 20,
    };
  },

  computed: {
    ...mapState(["items", "CachesUser", "form"]),
    ...mapGetters(["traitementFormItems"]),
    trigger_perfom() {
      if (this.traitementFormItems.length) {
        this.getTraitementFormItems();
        return this.traitementFormItems.length;
      }
      return "";
    },
    nombreStatus() {
      const nbst = {
        save: [],
        rappel: [],
        loose: [],
      };
      if (this.traitementFormItemsDisplay.length) {
        for (const i in this.traitementFormItemsDisplay) {
          const devis = this.traitementFormItemsDisplay[i];
          if (devis.status === "1") nbst.save.push(devis);
          else if (devis.status === "0") nbst.rappel.push(devis);
          else if (devis.status === "2") nbst.loose.push(devis);
        }
      }
      return nbst;
    },
  },
  methods: {
    getTraitementFormItems() {
      this.traitementFormItemsDisplay = [];
      for (const i in this.traitementFormItems) {
        const rowData = this.traitementFormItems[i];
        const row = {
          id: rowData.id,
          status: rowData.status,
          created: rowData.created,
          price: rowData.price,
          uid: rowData.uid,
          datas: rowData.datas,
          user: {}, //pour gerer les informations provenant de la connexions.
          idloop: i, // permet de retrouver aisement, le devis dans le current table (traitementFormItems);
        };
        this.getUser(rowData.uid, row);
        for (const s in rowData.datas) {
          const stape = rowData.datas[s];
          for (const f in stape.fields) {
            const field = stape.fields[f];
            if (this.liste_fields_check.includes(field.name)) {
              row[field.name] = field;
            }
          }
        }
        this.traitementFormItemsDisplay.push(row);
      }
      console.log(
        "traitementFormItemsDisplay : ",
        this.traitementFormItemsDisplay
      );
    },
    /**
     * -
     */
    formTraiter(item) {
      var status = "";
      if (item.status == "0") {
        status = "1";
      } else status = "0";
      this.$bvModal
        .msgBoxConfirm(" Confirmez-vous l'action ? ", {
          title: " Alerte ",
          size: "sm",
          buttonSize: "sm",
          okVariant: "success",
          okTitle: "Traiter",
          cancelTitle: "Annuler",
          footerClass: "p-2",
          hideHeaderClose: false,
          centered: true,
        })
        .then((value) => {
          if (value) {
            config.deleteFormTraitement(item.id, status).then(() => {
              item.status = status;
            });
          }
        });
    },
    /**
     * -
     */
    getUser(uid, item = {}) {
      if (uid == "0" || uid == 0) {
        item.user = {};
      } else if (this.CachesUser["uid" + uid]) {
        item.user = this.CachesUser["uid" + uid];
      } else {
        users.getUser(uid).then((rep) => {
          item.user = rep;
          this.$store.dispatch("setCachesUser", { uid: uid, user: rep });
        });
      }
    },
    /**
     * -
     */
    getInfoUser(item) {
      var user = item.user;
      var idloop = item.idloop;
      const userDisplay = [];
      var keys = [
        { key: "mail", label: "Mail" },
        { key: "name", label: "Nom" },
        { key: "field_prenom", label: "Prénom" },
        { key: "field_telephone", label: "Téléphone" },
      ];
      keys.forEach((key) => {
        if (user[key.key] && user[key.key][0]) {
          userDisplay.push({
            text: key.label + " : " + user[key.key][0].value,
          });
        }
      });
      if (this.traitementFormItems[idloop])
        this.$set(this.traitementFormItems[idloop], "user", userDisplay);
      return userDisplay;
    },
    updateStatus() {
      if (this.currentDataId) {
        var dataUpdate = {
          table: "appformmanager_datas",
          fields: {
            status: 0,
          },
          action: "update",
          where: [
            {
              column: "id",
              value: this.currentDataId,
            },
          ],
        };
        config.saveForm([dataUpdate], this.$store.state.mode).then(() => {
          config.CustomModalSuccess(
            "Vous serrez rappellé par un specialiste dans les plus bref delais.",
            {
              title: "Status du devis mise à jour",
              footerClass: "d-none",
            }
          );
          setTimeout(function () {
            window.location.reload();
          }, 3000);
        });
      }
    },
    changePagination(val) {
      this.$emit("ev-change-pagination", val);
    },
    getValideStepe(id) {
      //var self = this;
      this.showModal = !this.showModal;
      this.validSteps2 = [];
      this.currentDataId = this.traitementFormItemsDisplay[id].id;
      this.currentDevis = this.traitementFormItemsDisplay[id];
      this.validSteps2 = this.traitementFormItemsDisplay[id].datas;
      if (!this.traitementFormItemsDisplay[id]["all-steps-loaded"]) {
        this.loadAllStepOfDevis({
          DevisId: this.currentDataId,
        }).then((steps) => {
          steps.forEach((row) => {
            this.traitementFormItemsDisplay[id].datas.push(row.step);
          });
        });
        this.traitementFormItemsDisplay[id]["all-steps-loaded"] = true;
      }
    },
    /**
     * charge de maniere progressive les etapes d'un devis.
     */
    loadAllStepOfDevis(payload) {
      return new Promise((resolv, reject) => {
        var url = "/appformmanager/getdevis-steps/0";
        config
          .getData(payload, false, url)
          .then((reponse) => {
            console.log("DEvis : ", reponse);
            resolv(reponse.data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
};
</script>
