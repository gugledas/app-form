<template lang="html">
  <div>
    <b-table
      :items="traitementFormItemsDisplay"
      :fields="liste_fields_display"
      :outlined="true"
      :hover="true"
      head-variant="dark"
      responsive
      sticky-header="350px"
      class="traitement"
    >
      <template #cell(status)="data">
        <div>
          <h5 class="status">
            {{ data.item.status == 1 ? "Traité" : "non traité" }}
          </h5>
        </div>
      </template>

      <template #cell(action)="data">
        <b-button-group class="">
          <b-button
            size="sm"
            variant="outline-primary"
            @click="voirForm(data.index)"
          >
            voir
          </b-button>
          <b-button
            size="sm"
            variant="outline-success"
            @click="showResult(data.item)"
          >
            Editer
          </b-button>

          <b-button
            size="sm"
            variant="outline-warning"
            @click="formTraiter(data.item)"
          >
            Traiter
          </b-button>
        </b-button-group>
      </template>
    </b-table>
    <b-modal
      id="modal--closing"
      v-model="showModal"
      ref="modal"
      size="lg"
      :title="'Résultat du formulaire'"
      scrollable
      class="super-hover"
    >
      <b-row align-h="center" v-if="traitementFormItems.length">
        <b-col sm="12" v-for="(steps, i) in validSteps" :key="i"
          ><b-card no-body class="mb-1" v-if="steps !== undefined">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block variant="dark" disabled>{{
                steps.info.title
              }}</b-button>
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
                    class="m-1"
                    v-for="(item, index) in steps.fields"
                    :key="index"
                  >
                    <type-displays :fields="item"></type-displays>
                  </b-col>
                </b-row>
              </b-card-body>
            </b-collapse> </b-card
        ></b-col>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import Utilities from "../../store/utilities";
import config from "../config/config";

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
  },
  components: {
    typeDisplays: () => import("./affichage/typeDisplays.vue"),
  },
  data() {
    return {
      showModal: false,
      currentIndex: null,
    };
  },
  mounted() {
    //
  },
  watch: {},
  computed: {
    ...mapState(["items"]),
    ...mapGetters(["traitementFormItems"]),
    validSteps() {
      var all = [];
      var forms;
      if (this.traitementFormItems.length && this.currentIndex !== null) {
        forms = this.traitementFormItems[this.currentIndex].datas;
        all.push(forms[0]);
        for (let i = 0; i < forms.length; i++) {
          const kk = Utilities.selectNextState(forms, i);
          if (kk) {
            i = kk;
            all.push(forms[kk]);
          }
        }
      }
      return all;
    },
    traitementFormItemsDisplay() {
      const lists = [];
      for (const i in this.traitementFormItems) {
        const rowData = this.traitementFormItems[i];
        const row = {
          id: rowData.id,
          status: rowData.status,
          created: rowData.created,
          price: rowData.price,
        };
        for (const s in rowData.datas) {
          const stape = rowData.datas[s];
          for (const f in stape.fields) {
            const field = stape.fields[f];
            //console.log("field.name : ", field.name);
            if (this.liste_fields_check.includes(field.name)) {
              row[field.name] = field.value;
            }
          }
        }
        lists.push(row);
      }
      return lists;
    },
  },
  methods: {
    voirForm(id) {
      console.log("id", id);
      this.currentIndex = id;
      this.showModal = !this.showModal;
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
            console.log("refus : ", id);
            config.deleteFormTraitement(id.id, status).then(() => {
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
<style lang="scss">
.traitement {
  .status {
    font-size: 0.7em;
    text-transform: uppercase;
    font-weight: bold;
  }
}
</style>
