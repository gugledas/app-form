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
          <b-col cols="12" class="text-left"
            ><p class="page-label">{{ fields.label }}</p></b-col
          >
          <b-col class="choice-section">
            <form ref="form" @submit.stop.prevent="handleSubmit">
              der: {{ selected }}
              <b-row>
                <!-- affiche pour le cas du type radio -->

                <!-- <b-col
                  cols="12"
                  class=""
                  v-for="(item, i) in fields.options"
                  :key="i"
                >
                  <b-form-group
                    id="fieldset-horizontal"
                    label-cols="10"
                    label-cols-md="10"
                    content-cols="2"
                    content-cols-md="2"
                    label-align="left"
                    content-align="right"
                    :label="item.label"
                    label-for="input-horizontal"
                    class="input-label"
                  >
                    <b-form-checkbox
                      v-model="item.value"
                      size="lg"
                      id="input-horizon"
                      class="text-right"
                    ></b-form-checkbox>
                  </b-form-group>
                </b-col> -->

                <b-col cols="12" class="">
                  <b-form-group
                    id="fieldset-horizontal"
                    label-cols="10"
                    label-cols-md="10"
                    content-cols="2"
                    content-cols-md="2"
                    label-align="left"
                    content-align="right"
                    description="je ne sais pas réellement"
                    label="label"
                    label-for="input-horizontal"
                    class="input-label d-flex"
                  >
                    <b-form-radio
                      v-model="selected"
                      size="lg"
                      id="input-horizon"
                      class="text-right"
                      name="some-radios"
                      value="check"
                    ></b-form-radio>
                  </b-form-group>
                </b-col>
                <b-col cols="12" class="">
                  <b-form-group
                    id="fieldset-horizontal"
                    label-cols="10"
                    label-cols-md="10"
                    content-cols="2"
                    content-cols-md="2"
                    label-align="left"
                    content-align="right"
                    label="optionb"
                    label-for="input-horizontal"
                    class="input-label"
                  >
                    <b-form-radio
                      name="some-radios"
                      v-model="selected"
                      size="lg"
                      id="input-horizn"
                      class="text-right"
                      value="recap"
                    ></b-form-radio>
                  </b-form-group>
                </b-col>
                <b-row class="my-1 col-12 input-list">
                  <b-col sm="9 " class="text-left m-0 p-2">
                    <label class="m-0 input-list__label">Type</label>
                  </b-col>
                  <b-col sm="3" class="bg-light">
                    <b-form-radio
                      name="some-radios"
                      v-model="selected"
                      size="lg"
                      id="input-horizni"
                      value="aa"
                      class="input-list__input"
                    ></b-form-radio>
                  </b-col>
                </b-row>
              </b-row></form
          ></b-col>
        </b-row>

        <b-col cols="12" class="form-nav-bouton">
          <button class="next-bouton next-bouton--disable">Suivant</button>
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
export default {
  components: { AddFormField },
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
    addFormField() {
      this.$refs.formField.openAddFormFieldPopUp();
    },
  },
};
</script>

<style lang="scss">
.custom-control-input:checked ~ .custom-control-label::before {
  background: teal;
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
          &__label {
            text-align: left;
          }
          &__input {
            text-align: right;
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
      margin-top: 20px;
      .next-bouton {
        height: 54px;
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
