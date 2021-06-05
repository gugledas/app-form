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
          size="sm"
          v-b-tooltip.hover.v-info
          title="Ajouter un champs"
        >
          <b-icon icon="plus" style="font-size: 1.5rem"></b-icon>
        </b-button>
        <b-button
          variant="outline-success"
          @click="configSteps"
          size="sm"
          v-b-tooltip.hover.v-success
          title="Editer le formulaire"
        >
          <b-icon icon="pencil"></b-icon>
        </b-button>

        <b-button
          variant="outline-danger"
          @click="deleteSteps"
          size="sm"
          v-b-tooltip.hover.v-danger
          title="Suprimer le formulaire"
        >
          <b-icon icon="trash"></b-icon>
        </b-button>
      </b-button-group>
    </div>
    <!-- center container -->

    <ValidationObserver v-slot="v" class="center-container">
      <b-row class="block-container" align-h="center">
        <b-col cols="12" class="text-left" v-if="level > 0">
          <div class="backButton" @click="back">
            <img src="../../public/long-arrow-alt-left-solid.svg" alt="" />
          </div>
        </b-col>
        <div
          v-for="(field, i) in formDatas.fields"
          :key="i"
          class="col-12 p-0 mb-5"
        >
          <display-fields :type="field.type" :id="i"></display-fields>
        </div>

        <b-col cols="12" class="form-nav-bouton">
          <button
            class="next-bouton"
            :class="
              stepsState && !v.invalid
                ? 'next-bouton--active'
                : 'next-bouton--disable'
            "
            @click="suivant"
          >
            Suivant
          </button>
        </b-col>
      </b-row>
      <getStatusValidation :validation-observer="v"></getStatusValidation>
    </ValidationObserver>

    <!-- editions/configs -->
    <div v-if="mode">
      <add-form-field
        :isOpen="modalFormFieldIsOpen"
        ref="formField"
        :nouveau="true"
      ></add-form-field>
      <StepConfiguration ref="StepConfiguration"></StepConfiguration>
    </div>
    <pre>
      stepsIndexs :
      {{ stepsIndexs }}
    </pre>
  </div>
</template>

<script>
import { ValidationObserver } from "vee-validate";
import { mapGetters, mapState } from "vuex";
import DisplayFields from "./displayFields.vue";
import getStatusValidation from "./EditsFields/getStatusValidation.vue";

export default {
  components: {
    DisplayFields,
    ValidationObserver,
    getStatusValidation,
    AddFormField: () => import("./AddFormField.vue"),
    StepConfiguration: () => import("./ConfigsForms/StepConfiguration.vue"),
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
    stepsState() {
      var state = null;

      if (this.$store.getters.form.forms.length - 1 > this.level) {
        state = true;
      }

      console.log(" StepsState : ");
      return state;
    },
    taille() {
      if (this.fields.options.length) {
        return true;
      } else return false;
    },
  },
  methods: {
    suivant() {
      if (this.stepsState) {
        this.$store.dispatch("stepsIndex", this.stepsIndex);
      }
    },
    back() {
      this.$store.dispatch("stepsBack");
      //this.$store.state.stepsIndex--;
    },
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

<style lang="scss">
@use "./scss/variables.scss" as *;
.custom-control-input:checked ~ .custom-control-label::before {
  background: $primary_color;
}
.backButton {
  width: 20px;
  margin: 7px 0;
  cursor: pointer;
}

.help-container {
  margin-bottom: 0;
  position: absolute;
  // left: calc(260px + 50%);
  right: 15px;
  top: 263px;
  max-width: 163px;
  background-color: rgba(164, 207, 208, 0.3);
  padding: 10px;
  .help-block {
    font-weight: 300;
    font-size: 1.08em;
    line-height: 1.5em;
    margin-bottom: 0;
    padding-bottom: 0;
    text-align: left;
    &__title {
      font-size: 0.9em;
      margin-bottom: 10px;
      font-weight: 800;
      position: relative;
      padding-left: 22px;
      display: block;
      &::before {
        content: "?";
        border: 1px solid #080138;
        font-size: 0.8em;
        padding-top: 3px;
        border-radius: 50%;
        width: 16px;
        height: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-55%);
      }
    }
    &__content {
      font-size: 0.815em;
    }
  }
}
.element-center {
  //text-align: center;
  .button-travaux {
    color: $primary_color;
    font-weight: 700;
    font-size: 0.8rem;
    border-bottom: 2px solid $primary_color;
    padding-bottom: 2px;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
  }

  .center-container {
    display: flex;
    padding-top: 20px;
    margin-bottom: 2rem;
    justify-content: center;
    .block-container {
      max-width: 500px;

      .page-label {
        margin: 0 0 30px;
        font-size: 0.9em;
        color: #000;
      }
    }

    .form-nav-bouton {
      margin: 1rem 0;
      .next-bouton {
        height: 56px;
        width: 100%;
        max-width: 465px;
        background: $primary_color;
        border-radius: 2px;
        color: #fff;
        border: none;
        transition: opacity 0.5s ease, background-color 0.5s ease;

        &--active {
          opacity: 1;
          &:hover {
            background: rgb(9, 94, 94);
          }
        }
        &--disable {
          opacity: 0.3;
        }
      }
    }
  }
}
</style>
