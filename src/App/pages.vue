<template>
  <div class="element-center">
    <b-row align-h="end" class="m-4">
      <b-button class="mx-4" variant="primary" size="sm" @click="addFormField"
        >Ajouter des Champs</b-button
      >

      <p class="button-travaux">{{ formDatas.info.headerTitle }}</p></b-row
    >
    <!-- center container -->
    <b-container fluid class="center-container">
      <b-row class="block-container" align-h="center">
        <b-row>
          <b-col cols="12" class="text-left">
            <h3 class="question-title">{{ formDatas.info.title }}</h3>
          </b-col>
          <!-- <div class="help-container">
            <div class="help-block">
              <p class="help-block__title">Aide</p>
              <p class="help-block__content">
                La mitoyenneté de votre logement va permettre de définir la
                bonne solution en matière d’isolation thermique.
              </p>
            </div>
          </div> -->
          <b-col cols="12" class="text-left"
            ><p class="page-label">{{ fields.label }}</p></b-col
          >
          <b-col class="choice-section">
            <form ref="form" @submit.stop.prevent="handleSubmit">
              de: {{ fields.value }}--{{ fields.selected }}

              <!-- affiche sur le cas du type markup label up -->
              <b-row align-h="center" v-if="fields.type == 'number'">
                <label-row :options="fields.options"></label-row>
              </b-row>

              <!-- affiche sur le cas du type markup label up -->
              <b-row align-h="center" v-if="fields.type == 'markupnumberrow'"
                ><number-markup :options="fields.options"></number-markup
              ></b-row>

              <!-- affiche sur le cas du type markup label up -->
              <b-row align-h="center" v-if="fields.type == 'markupnumber'"
                ><number-markup
                  type="up"
                  :options="fields.options"
                ></number-markup
              ></b-row>
              <!-- affiche sur le cas du type increment number -->
              <b-row align-h="center" v-if="fields.type == 'increment'">
                <increment-number></increment-number>
              </b-row>

              <!-- affiche pour le cas du type radio -->
              <b-row v-if="fields.type == 'radio'">
                <b-col cols="12" v-for="(item, i) in fields.options" :key="i">
                  <div class="input-list">
                    <b-col sm="11" class="input-list__label">
                      <label class="m-0">{{ item.label }}</label>
                    </b-col>
                    <b-col class="input-list__input">
                      <b-form-radio
                        name="some-radios"
                        v-model="fields.selected"
                        size="lg"
                        :id="`input-horizni-${i}`"
                        :value="item.value"
                      ></b-form-radio>
                    </b-col>
                  </div>
                </b-col>
              </b-row>

              <!-- affiche pour le cas du type checkbox -->
              <b-row v-if="fields.type == 'checkbox'">
                <b-col cols="12" v-for="(item, i) in fields.options" :key="i">
                  <div class="input-list">
                    <b-col
                      sm="11"
                      class="
                        input-list__label
                        d-flex
                        align-items-start
                        flex-column
                      "
                    >
                      <label class="m-0">{{ item.label }}</label>
                    </b-col>
                    <b-col class="input-list__input">
                      <b-form-checkbox
                        name="some-radios"
                        v-model="fields.value"
                        size="lg"
                        :id="`input-horizni-${i}`"
                        :value="item.value"
                      ></b-form-checkbox>
                    </b-col>
                  </div>
                </b-col>
              </b-row>

              <!-- affiche pour le cas du type radio with description -->
              <b-row v-if="fields.type == 'radiodesc'">
                <b-col cols="12" v-for="(item, i) in fields.options" :key="i">
                  <div class="input-list">
                    <b-col
                      sm="11"
                      class="
                        input-list__label
                        d-flex
                        align-items-start
                        flex-column
                      "
                    >
                      <label class="m-0">{{ item.label }}</label>
                      <small class="input-list__description">{{
                        item.description
                      }}</small>
                    </b-col>
                    <b-col class="input-list__input">
                      <b-form-radio
                        name="some-radios"
                        v-model="fields.selected"
                        size="lg"
                        :id="`input-horizni-${i}`"
                        :value="item.value"
                      ></b-form-radio>
                    </b-col>
                  </div>
                </b-col>
              </b-row>

              <b-row align-h="center" class="m-0" v-if="false">
                <div
                  v-for="(img, i) in imageCheck"
                  :key="i"
                  @click="getImage(i)"
                >
                  <imageCheck
                    :isActive="img.isActive"
                    :description="img.description"
                  />
                </div>
              </b-row></form
          ></b-col>
        </b-row>

        <b-col cols="12" class="form-nav-bouton">
          <button class="next-bouton next-bouton--disable" @click="suivant">
            Suivant
          </button>
        </b-col>
      </b-row>
    </b-container>

    <!-- add modal field -->
    <add-form-field
      :isOpen="modalFormFieldIsOpen"
      ref="formField"
    ></add-form-field>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AddFormField from "./AddFormField.vue";
import LabelRow from "./input/LabelRow.vue";
import NumberMarkup from "./NumberMarkup.vue";
export default {
  components: {
    AddFormField,
    ImageCheck: () => import("./ImageCheck.vue"),
    IncrementNumber: () => import("./IncrementNumber.vue"),
    NumberMarkup,
    LabelRow,
  },
  props: {},
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
  computed: {
    ...mapState(["formDatas", "fields"]),
    taille() {
      if (this.fields.options.length) {
        return true;
      } else return false;
    },
  },
  methods: {
    suivant() {
      this.$store.dispatch("suivant");
    },
    addFormField() {
      this.$refs.formField.openAddFormFieldPopUp();
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
.custom-control-input:checked ~ .custom-control-label::before {
  background: teal;
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
    color: #49a0a2;
    font-weight: 700;
    font-size: 0.8rem;
    border-bottom: 2px solid #49a0a2;
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
      .question-title {
        text-align: left;
        font-size: 1.4em;
        margin-bottom: 10px;
        color: #222;
        line-height: 1.2;
      }
      .choice-section {
        max-width: 530px;
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
      }
      .page-label {
        margin: 15px 0;
        font-size: 0.9em;
        color: #000;
      }
    }
    .form-nav-bouton {
      margin: 3rem 0;
      .next-bouton {
        height: 56px;
        width: 100%;
        max-width: 465px;
        background: teal;
        border-radius: 2px;
        color: #fff;
        border: none;
        transition: opacity 0.5s ease, background-color 0.5s ease;

        &--active {
          opacity: 1;
          &:hover {
            background: rgb(5, 95, 95);
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
