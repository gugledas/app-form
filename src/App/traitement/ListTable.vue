<template lang="html">
  <div>
    <b-table
      :items="traitementFormItemsDisplay"
      :fields="liste_fields_display"
      :outlined="true"
      :hover="true"
      head-variant="dark"
      responsive
      class="traitement"
      :sticky-header="true"
      :trigger_perfom="trigger_perfom"
      :busy="isBusy"
    >
      <template v-slot:cell()="scope">
        <div>
          <div
            v-if="
              scope.item[scope.field.key] &&
              scope.item[scope.field.key].type === undefined
            "
          >
            <div v-if="scope.field.key === 'status'">
              <h5 class="status">
                {{
                  scope.item.status == 1
                    ? "Sauvegardé"
                    : "Devis en attente de rappel"
                }}
              </h5>
            </div>
            <div v-else-if="scope.field.key === 'uid'">
              <div v-if="scope.item.uid !== '0'">
                <ul v-if="scope.item.user" class="m-0 p-0 pl-2">
                  <li v-for="(val, i) in getInfoUser(scope.item.user)" :key="i">
                    {{ val.text }}
                  </li>
                </ul>
              </div>
              <div v-else>Anonyme</div>
            </div>
            <div v-else>
              {{ scope.value }}
            </div>
          </div>
          <div v-else-if="!scope.item[scope.field.key]">
            <div v-if="scope.field.key === 'action'">
              <b-button-group class="">
                <b-button
                  variant="outline-primary"
                  @click="getValideStepe(scope.index)"
                >
                  voir mon devis
                </b-button>

                <b-button
                  variant="outline-success"
                  @click="showResult(scope.item)"
                  v-if="$store.state.mode"
                >
                  Editer
                </b-button>

                <b-button
                  variant="outline-warning"
                  @click="formTraiter(scope.item)"
                  v-if="$store.state.mode"
                >
                  Traiter
                </b-button>
              </b-button-group>
            </div>
          </div>
          <div v-else>
            <component
              v-bind:is="getTemplatesFiles(scope.item[scope.field.key].type)"
              :field="scope.item[scope.field.key]"
              class="content-field"
            ></component>
          </div>
        </div>
      </template>
      <template #table-busy>
        <div class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>chargements des devis...</strong>
        </div>
      </template>
    </b-table>
    <!-- -->
    <b-pagination
      v-model="currentPage"
      :total-rows="totalRows"
      :per-page="perPage"
      align="fill"
      size="sm"
      class="my-0"
      @change="changePagination"
      v-if="totalRows > 20"
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
      <b-row align-h="center" v-if="traitementFormItems.length">
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
                      v-if="field.status === undefined || field.status"
                      class="mb-2"
                    ></type-displays>
                    <div v-else>
                      <pre class="d-none">
                        {{ field.name }}
                      </pre>
                    </div>
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
                currentDevis.uid === $store.state.uid
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
import Utilities from "../../store/utilities";
import config from "../config/config";
import traitementDisplay from "./affichage/traitement-display.js";
import { users } from "drupal-vuejs";

export default {
  name: "Listesfomes",
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
    typeDisplays: () => import("./affichage/typeDisplays.vue"),
  },
  data() {
    return {
      showModal: false,
      validSteps2: [],
      traitementFormItemsDisplay: [],
      /**
       * L'id du formulaire selectionné.
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
  mounted() {
    //
  },
  watch: {},
  computed: {
    ...mapState(["items", "CachesUser"]),
    ...mapGetters(["traitementFormItems"]),
    trigger_perfom() {
      if (this.traitementFormItems.length) {
        this.getTraitementFormItems();
        return this.traitementFormItems.length;
      }
      return "";
    },
  },
  methods: {
    getTraitementFormItems() {
      console.log("traitementFormItems : ", this.traitementFormItemsDisplay);
      this.traitementFormItemsDisplay = [];
      for (const i in this.traitementFormItems) {
        const rowData = this.traitementFormItems[i];
        const row = {
          id: rowData.id,
          status: rowData.status,
          created: rowData.created,
          price: rowData.price,
          uid: rowData.uid,
          user: {}, //pour gerer les informations provenant de la connexions.
        };
        this.getUser(rowData.uid, row);
        for (const s in rowData.datas) {
          const stape = rowData.datas[s];
          for (const f in stape.fields) {
            const field = stape.fields[f];
            //console.log("field.name : ", field.name);
            if (this.liste_fields_check.includes(field.name)) {
              row[field.name] = field;
            }
          }
        }
        this.traitementFormItemsDisplay.push(row);
      }
    },
    getTemplatesFiles(type) {
      return traitementDisplay.getTemplatesFiles(type);
    },
    getValideStepe(id) {
      var self = this;
      this.showModal = !this.showModal;
      this.validSteps2 = [];
      this.currentDataId = this.traitementFormItems[id].id;
      this.currentDevis = this.traitementFormItems[id];
      const forms = this.traitementFormItems[id].datas;
      this.validSteps2.push(forms[0]);
      function execution(i) {
        const loop = function (i) {
          return new Promise((resolv) => {
            Utilities.selectNextState(forms, i).then((rep) => {
              //console.log("getValideStepe : ", rep);
              resolv(rep);
            });
          });
        };
        loop(i).then((kk) => {
          if (kk && kk < 200) {
            self.validSteps2.push(forms[kk]);
            // Console.log("kk : ", kk);
            execution(kk);
          }
        });
      }
      execution(0);
    },
    showResult(id) {
      console.log("id", id);
    },
    formTraiter(id) {
      var status = "";
      if (id.status == "0") {
        status = "1";
      } else status = "0";
      this.$bvModal
        .msgBoxConfirm("Confirmez-vous avoir l'action", {
          title: "Alerte",
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
            console.log("Refus : ", id);
            config.deleteFormTraitement(id.id, status).then(() => {
              window.location.reload();
            });
          }
        });
      /**
       *  .catch((err) => {
       *    console.log("refus : ", err);
       *  });
       */
    },
    getUser(uid, item = {}) {
      if (this.CachesUser["uid" + uid]) {
        item.user = this.CachesUser["uid" + uid];
      } else {
        users.getUser(uid).then((rep) => {
          item.user = rep;
          this.$store.dispatch("setCachesUser", { uid: uid, user: rep });
        });
      }
    },
    getInfoUser(item) {
      const user = [];
      var keys = ["mail", "name"];
      keys.forEach((key) => {
        if (item[key]) {
          user.push({ text: item[key][0].value });
        }
      });
      return user;
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
          config.modalSuccess(
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
  },
};
</script>

<!--
  // Nom du fichier en pascal.
  // <template>
 - le nom des attributs en kebab-case;
 - la valeur des attributs et des variables en camelCase;
 - function en PascalCase
  // props, data
 - variable en camelCase
  // methods
 - variable en PascalCase
-->
<style lang="scss">
.traitement.table-responsive {
  max-height: 73vh;
  min-height: 350px;
}
.traitement {
  .status {
    font-size: 0.7em;
    font-weight: bold;
  }
}
</style>
