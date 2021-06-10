<template lang="html">
  <div>
    <b-table
      :items="traitementFormItems"
      :fields="fields"
      :outlined="true"
      :hover="true"
      head-variant="dark"
    >
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
            @click="showResult(data.index)"
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
          ><b-card no-body class="mb-1">
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

export default {
  name: "Listesfomes",
  props: {},
  components: {
    typeDisplays: () => import("./affichage/typeDisplays.vue"),
  },
  data() {
    return {
      fields: [
        {
          label: "Id",
          key: "id",
        },
        {
          label: "Status du formulaire",
          key: "name",
        },
        {
          label: "Price",
          key: "price",
        },
        {
          label: "#Action",
          key: "action",
        },
      ],
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
