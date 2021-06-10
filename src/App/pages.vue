<template>
  <div class="element-center full-block shadow">
    <div class="choice-section text-right">
      <b-row align-h="end">
        <b-col>
          <p class="button-travaux">{{ formDatas.info.headerTitle }}</p>
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
      </b-button-group>
    </div>
    <!-- center container -->
    <forms :level="level"></forms>
    <!-- editions/configs -->
    <div v-if="mode">
      <add-form-field
        :isOpen="modalFormFieldIsOpen"
        ref="formField"
        :nouveau="true"
      ></add-form-field>
      <StepConfiguration ref="StepConfiguration"></StepConfiguration>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

import forms from "./input/forms.vue";

export default {
  components: {
    AddFormField: () => import("./AddFormField.vue"),
    StepConfiguration: () => import("./ConfigsForms/StepConfiguration.vue"),
    forms,
  },
  props: {
    level: {
      type: Number,
      default: 0,
    },
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
    };
  },
  mounted() {
    //
  },
  watch: {
    fields() {
      console.log("changement");
    },
  },
  computed: {
    ...mapState(["mode", "stepsIndex", "stepsIndexs"]),
    ...mapGetters(["formDatas", "form"]),

    taille() {
      if (this.fields.options.length) {
        return true;
      } else return false;
    },
  },
  methods: {
    deleteSteps() {
      var all = this.$store.getters.form.forms;
      var r = all.indexOf(this.formDatas);
      for (var i = all.length - 1; i >= 0; i--) {
        if (i === r) {
          all.splice(i, 1);
          console.log("iiippp");
          this.$store.state.stepsIndex = this.form.forms.length - 1;
        }
      }
      //this.$store.dispatch("deleteStepsInAllSteps");
    },
    addFormField() {
      this.$refs.formField.openAddFormFieldPopUp();
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
  },
};
</script>
