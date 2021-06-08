<template lang="html">
  <ValidationObserver v-slot="v" class="center-container">
    <b-row class="block-container" align-h="center">
      <b-col cols="12" class="text-left" v-if="level > 0">
        <div class="backButton" @click="back">
          <img src="../../../public/long-arrow-alt-left-solid.svg" alt="" />
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
    StatusStepsIndexs : {{ StatusStepsIndexs }}
  </ValidationObserver>
</template>

<script>
import { ValidationObserver } from "vee-validate";
import DisplayFields from "../displayFields.vue";
import getStatusValidation from "../EditsFields/getStatusValidation.vue";
import { mapGetters, mapState } from "vuex";
export default {
  name: "forms",
  props: {
    level: {
      type: Number,
      default: 0,
    },
  },
  components: {
    ValidationObserver,
    DisplayFields,
    getStatusValidation,
  },
  data() {
    return {
      //
    };
  },
  mounted() {
    //
  },
  watch: {
    //
  },
  computed: {
    ...mapState(["mode", "stepsIndex", "stepsIndexs", "StatusStepsIndexs"]),
    ...mapGetters(["formDatas"]),
    stepsState() {
      var state = null;
      if (
        this.$store.getters.form.forms.length - 1 > this.level &&
        this.StatusStepsIndexs
      ) {
        state = true;
      }
      //console.log(" StepsState : ");
      return state;
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
  },
};
</script>

<style lang="scss">
@use "../scss/variables.scss" as *;
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
