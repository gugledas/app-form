<template>
  <div class="element-center">
    <b-row align-h="end" class="m-4">
      <b-col>
        <b-button
          class="mx-4"
          v-if="mode"
          variant="primary"
          size="sm"
          @click="addFormField"
        >
          Ajouter des Champs
        </b-button>
        <p class="button-travaux">{{ formDatas.info.headerTitle }}</p>
        <p>Status de validation : {{ stepsState }}</p>
      </b-col>
    </b-row>
    <!-- center container -->
    <b-container fluid class="center-container">
      <ValidationObserver v-slot="{ invalid }">
        <b-row class="block-container" align-h="center">
          <b-row class="w-100">
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
          </b-row>
          <div>
            <markup-image></markup-image>
            <markup-title></markup-title>
          </div>
          <b-col cols="12" class="form-nav-bouton">
            <button
              class="next-bouton"
              :class="
                stepsState && !invalid
                  ? 'next-bouton--active'
                  : 'next-bouton--disable'
              "
              @click="suivant"
            >
              Suivant
            </button>
          </b-col>
          <b-col cols="12" v-if="mode">
            <b-button variant="danger" @click="deleteSteps">
              delete this steps
            </b-button>
          </b-col>
        </b-row>
        <!-- pre: -->
        <!-- <pre>{{ fields }}</pre> -->
      </ValidationObserver>
    </b-container>

    <!-- add modal field -->
    <add-form-field
      :isOpen="modalFormFieldIsOpen"
      ref="formField"
    ></add-form-field>
  </div>
</template>

<script>
import { ValidationObserver } from "vee-validate";
import { mapGetters, mapState } from "vuex";
import AddFormField from "./AddFormField.vue";
import DisplayFields from "./displayFields.vue";
import MarkupImage from "./input/MarkupImage.vue";
import MarkupTitle from "./input/MarkupTitle.vue";
export default {
  components: {
    AddFormField,
    DisplayFields,
    MarkupImage,
    MarkupTitle,

    ValidationObserver,
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
  watch: {
    fields() {
      console.log("changement");
    },
  },
  computed: {
    ...mapState(["mode"]),
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
        // this.$parent.suivant();
        this.$store.state.stepsIndex++;
      }
    },
    deleteSteps() {
      var all = this.$store.getters.form.forms;
      var r = all.indexOf(this.formDatas);
      for (var i = all.length - 1; i >= 0; i--) {
        if (i === r) {
          all.splice(i, 1);
          console.log("iiippp");
        }
      }
      //this.$store.dispatch("deleteStepsInAllSteps");
    },
    addFormField() {
      this.$refs.formField.openAddFormFieldPopUp();
    },
    back() {
      //this.$parent.back();
      this.$store.state.stepsIndex--;
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
$primary_color: #319899;
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
  text-align: center;
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
  //center-container
  .center-container {
    display: flex;
    padding: 1rem;
    margin-bottom: 2rem;
    justify-content: center;
    .block-container {
      max-width: 500px;

      .choice-section {
        max-width: 530px;
        margin-top: 10px;
        width: 100%;
        .input-list {
          display: flex;
          align-items: center;
          padding: 10px 0;
          border-bottom: 1px solid #94909052;
          border-top: 1px solid #94909052;
          &__description {
            color: #8a8a8a;
            font-size: 0.8em;
            margin-top: 10px;
            font-style: italic;
            font-weight: 300;
          }
          &__label {
            text-align: left;
            // margin-left: -12px;
            padding: 10px 0;
            margin-bottom: 0;
            font-size: 1em;
            font-family: Ubuntu, sans-serif;
            font-weight: 400;
            background-color: #fff;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            cursor: pointer;
          }
          &__input {
            text-align: right;
            margin-left: 6px;
          }
        }
        .input-label {
          border-top: 1px solid #80808012;
          border-bottom: 1px solid #88828212;
          font-weight: 300;
          padding: 10px 0;
          margin: 0;
        }

        .autocomplete {
          max-width: 500px;
          margin-top: 0.9rem;
          .multiselect__tags {
            min-height: 64px;

            padding: 20px 40px 0 8px;
            border-radius: 5px;
            border: 1px solid $primary_color;
          }
          .multiselect__select {
            display: none;
          }
          .multiselect__option--highlight {
            background: $primary_color;
            outline: none;
            color: #fff;
          }
        }
      }
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
