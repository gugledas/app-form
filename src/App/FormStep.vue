<template>
  <div class="element-center full-block">
    <div class="choice-section text-right">
      <b-row align-h="end">
        <b-col>
          <p class="button-travaux">
            <a href="/node/52">Tous les travaux</a>
          </p>
        </b-col>
      </b-row>
      <b-button-group class="boutton-absolute" v-if="mode">
        <b-button
          variant="outline-info"
          @click="addFormField"
          size="md"
          v-b-tooltip.hover.v-info
          title="Ajouter un champs"
        >
          <b-icon icon="plus" style="font-size: 1.5rem"></b-icon>
        </b-button>
        <b-button
          variant="outline-success"
          @click="configSteps"
          size="md"
          v-b-tooltip.hover.v-success
          title="Editer le formulaire"
        >
          <b-icon icon="pencil"></b-icon>
        </b-button>
        <b-button
          variant="outline-danger"
          @click="deleteSteps"
          size="md"
          v-b-tooltip.hover.v-danger
          title="Suprimer le formulaire"
        >
          <b-icon icon="trash"></b-icon>
        </b-button>
        <b-button
          variant="outline-secondary"
          v-b-modal.clone-current-stepe
          size="md"
          v-b-tooltip.hover.v-secondary
          title="cloner l'etape"
        >
          <b-icon icon="clipboard-plus"></b-icon>
        </b-button>
      </b-button-group>
    </div>
    <!-- center container -->
    <forms></forms>
    <!-- editions/configs -->
    <div v-if="mode">
      <add-form-field
        :isOpen="modalFormFieldIsOpen"
        :nouveau="true"
        :id-modal="'form-step'"
        :field="field"
        @update_current_field="update_current_field"
      ></add-form-field>
      <StepConfiguration ref="StepConfiguration"></StepConfiguration>
      <cloneCurrentStepe />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import Utilities from "./Utilities.js";
import forms from "./input/forms.vue";
import config from "./config/config";

export default {
  components: {
    StepConfiguration: () => import("./ConfigsForms/StepConfiguration.vue"),
    cloneCurrentStepe: () => import("./ConfigsForms/cloneCurrentStepe.vue"),
    forms,
  },
  data: () => {
    return {
      modalFormFieldIsOpen: false,
      //nombres de champs à afficher
      inputDatas: [],
      selected: "",
      options: [
        { text: "chamblie", value: "a" },
        { text: "callakala", value: "b" },
      ],
      imageCheck: [
        { isActive: false, description: "1 côté" },
        { isActive: false, description: "2 côté" },
        { isActive: false, description: "3 côté" },
        { isActive: false, description: "4 côté" },
      ],
      field: Utilities.field(),
    };
  },

  computed: {
    ...mapState(["mode", "stepsIndex", "stepsIndexs", "form"]),
    ...mapGetters(["formDatas"]),
    taille() {
      if (this.fields.options.length) {
        return true;
      } else return false;
    },
  },
  methods: {
    deleteSteps() {
      var stapes = this.$store.state.form.forms;
      var delStep = () => {
        for (var i = stapes.length - 1; i >= 0; i--) {
          if (i === r) {
            stapes.splice(i, 1);
            // si cest le dernier element, on remet à zero.
            if (stapes.length < this.$store.state.stepsIndex) {
              this.$store.state.stepsIndex = 0;
            }
          }
        }
      };
      var r = stapes.indexOf(this.formDatas);
      var key_step = this.formDatas.info.name;
      this.StepHasChildren(key_step).then((r) => {
        if (r) {
          config
            .modalConfirmDelete(
              "Cette etape contient des etapes enfant, souhaitez vous vraiment la supprimer ?"
            )
            .then(() => {
              delStep();
            });
        } else {
          delStep();
        }
      });
    },
    /**
     * pemet de s'assurrer que l'etape ne contient pas d'etape enfant.
     */
    StepHasChildren(key_step) {
      return new Promise((resolv) => {
        var stepes = this.$store.state.form.forms;
        for (const i in stepes) {
          const step = stepes[i];
          if (step.states && step.states.length)
            step.states.forEach((item) => {
              if (key_step == item.state_name) {
                resolv(true);
              }
            });
          var ii = parseInt(i) + 1;
          if (stepes.length == ii) {
            resolv(false);
          }
        }
      });
    },
    addFormField() {
      var idModel = "modal-addForm--form-step";
      this.$bvModal.show(idModel);
    },
    configSteps() {
      this.$refs.StepConfiguration.openPopUp();
    },
    getImage(il) {
      for (var i = 0; i < this.imageCheck.length; i++) {
        if (i == il) {
          this.imageCheck[i].isActive = !this.imageCheck[i].isActive;
        } else {
          this.imageCheck[i].isActive = false;
        }
      }
    },
    update_current_field(field) {
      this.field = JSON.parse(field);
    },
  },
};
</script>
