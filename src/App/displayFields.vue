<template>
  <div>
    <b-col cols="12" class="text-left">
      <h3 class="question-title">{{ formDatas.fields[id].title }}</h3>
    </b-col>
    <!-- stepsState: {{ stepsState }} -->
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
      ><p class="page-label">{{ formDatas.fields[id].label }}</p></b-col
    >
    <b-col class="choice-section">
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <!-- fields value: {{ fields.value }}-- fields selected:{{
                fields.selected
              }} -->
        <!-- affiche sur le cas du type codepostal -->
        <b-row align-h="center" v-if="type == 'codepostal'">
          <b-col class="autocomplete">
            <autocomplete></autocomplete>
          </b-col>
        </b-row>
        <!-- affiche sur le cas du type number -->
        <b-row align-h="center" v-if="type == 'number'">
          <label-row :options="formDatas.fields[id].options"></label-row>
        </b-row>

        <!-- affiche sur le cas du type markup label up -->
        <b-row align-h="center" v-if="type == 'markupnumberrow'"
          ><number-markup
            :options="formDatas.fields[id].options"
          ></number-markup
        ></b-row>

        <!-- affiche sur le cas du type markup label up -->
        <b-row align-h="center" v-if="type == 'markupnumber'"
          ><number-markup
            type="up"
            :options="formDatas.fields[id].options"
          ></number-markup
        ></b-row>
        <!-- affiche sur le cas du type increment number -->
        <b-row align-h="center" v-if="type == 'increment'">
          <increment-number></increment-number>
        </b-row>

        <!-- affiche pour le cas du type radio -->
        <b-row v-if="type == 'radio'">
          <b-col
            cols="12"
            v-for="(item, i) in formDatas.fields[id].options"
            :key="i"
          >
            <div class="input-list">
              <b-col sm="11" class="input-list__label">
                <label class="m-0">{{ item.label }}</label>
              </b-col>
              <b-col class="input-list__input">
                <b-form-radio
                  name="some-radios"
                  v-model="formDatas.fields[id].value"
                  size="lg"
                  :id="`input-radio-${i}`"
                  :value="item.value"
                ></b-form-radio>
              </b-col>
            </div>
          </b-col>
        </b-row>

        <!-- affiche pour le cas du type checkbox -->
        <b-row v-if="type == 'checkbox'">
          <b-col
            cols="12"
            v-for="(item, i) in formDatas.fields[id].options"
            :key="i"
          >
            <div class="input-list">
              <b-col
                sm="11"
                class="input-list__label d-flex align-items-start flex-column"
              >
                <label class="m-0">{{ item.label }}</label>
              </b-col>
              <b-col class="input-list__input">
                <b-form-checkbox
                  name="some-radios"
                  v-model="formDatas.fields[id].value"
                  size="lg"
                  :id="`input-horizni-${i}`"
                  :value="item.value"
                ></b-form-checkbox>
              </b-col>
            </div>
          </b-col>
        </b-row>

        <!-- affiche pour le cas du type radio with description -->
        <b-row v-if="type == 'radiodesc'">
          <b-col
            cols="12"
            v-for="(item, i) in formDatas.fields[id].options"
            :key="i"
          >
            <div class="input-list">
              <b-col
                sm="11"
                class="input-list__label d-flex align-items-start flex-column"
              >
                <label class="m-0">{{ item.label }}</label>
                <small class="input-list__description">{{
                  item.description
                }}</small>
              </b-col>
              <b-col class="input-list__input">
                <b-form-radio
                  name="some-radios"
                  v-model="formDatas.fields[id].value"
                  size="lg"
                  :id="`input-horizni-${i}`"
                  :value="item.value"
                ></b-form-radio>
              </b-col>
            </div>
          </b-col>
        </b-row>
        <!-- affiche pour le cas du type checkbox image -->
        <b-row align-h="center" class="m-0" v-if="false">
          <div v-for="(img, i) in imageCheck" :key="i" @click="getImage(i)">
            <imageCheck
              :isActive="img.isActive"
              :description="img.description"
            />
          </div>
        </b-row></form
    ></b-col>
  </div>
</template>

<script>
import { mapState } from "vuex";
import LabelRow from "./input/LabelRow.vue";
import NumberMarkup from "./NumberMarkup.vue";
import autocomplete from "./Autocomplete";
export default {
  components: {
    ImageCheck: () => import("./ImageCheck.vue"),
    IncrementNumber: () => import("./IncrementNumber.vue"),
    NumberMarkup,
    LabelRow,
    autocomplete,
  },
  props: {
    type: {
      type: String,
      default: "",
    },
    id: {
      type: Number,
      default: null,
    },
  },
  data: () => {
    return {
      isOpen: false,
      typeFieldSelected: null,

      // fields: {
      //   type: null,
      //   label: "",
      //   name: "",
      //   require: true,
      //   options: [],
      // },
      //datas to check form validity
      labelState: null,
    };
  },
  watch: {},
  computed: {
    ...mapState(["fields", "formDatas"]),
  },
  methods: {},
};
</script>
