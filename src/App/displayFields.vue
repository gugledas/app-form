<!-- Ce fichier gerer l'affichege et la configuration des champs -->
<template>
  <div>
    <div>
      <!-- affiche sur le cas du type codepostal -->

      <b-row align-h="center" v-if="type == 'codepostal'">
        <b-col>
          <autocomplete :field="formDatas.fields[id]"></autocomplete>
        </b-col>
      </b-row>

      <ImageCheck
        :field="formDatas.fields[id]"
        v-if="type == 'checkboximg'"
      ></ImageCheck>

      <!-- affiche sur le cas du type number -->
      <label-row
        v-if="type == 'text' || type == 'number'"
        :field="formDatas.fields[id]"
      ></label-row>

      <!-- affiche sur le cas du type markup label up -->
      <label-up
        v-if="type == 'numberup'"
        :field="formDatas.fields[id]"
      ></label-up>
      <!-- affiche sur le cas du type increment number -->
      <b-row align-h="center" v-if="type == 'increment'">
        <increment-number :field="formDatas.fields[id]"></increment-number>
      </b-row>

      <!-- affiche sur le cas du type markup title && image -->
      <markup-title
        v-if="type == 'markuptitle'"
        :field="formDatas.fields[id]"
      ></markup-title>
      <markup-image
        v-if="type == 'markupimage'"
        :field="formDatas.fields[id]"
      ></markup-image>

      <!-- affiche pour le cas du type radio -->
      <div v-if="type == 'radio'">
        <radio :field="formDatas.fields[id]"></radio>
      </div>

      <select-display
        v-if="type == 'select'"
        :field="formDatas.fields[id]"
      ></select-display>

      <!-- affiche pour le cas du type checkbox -->
      <checkbox
        v-if="type == 'checkbox'"
        :field="confirmStructureField(formDatas.fields[id])"
      ></checkbox>

      <!-- affiche pour le cas du type radio with description -->
      <radio-desc
        v-if="type == 'radiodesc'"
        :field="formDatas.fields[id]"
      ></radio-desc>

      <!-- -->
      <files :field="formDatas.fields[id]" v-if="type == 'file'"></files>
      <!-- -->
      <recapitulatif
        :field="formDatas.fields[id]"
        v-if="type == 'recapitulatif'"
      ></recapitulatif>

      <!-- -->
      <userlogin
        :field="formDatas.fields[id]"
        v-if="type == 'userlogin'"
      ></userlogin>

      <!-- -->
      <AideFinanciere
        :field="formDatas.fields[id]"
        v-if="type == 'input-aide-financiere'"
      ></AideFinanciere>

      <div v-if="this.$store.state.mode" class="boutton-absolute d-flex">
        <b-button
          class="border-0"
          size="sm"
          variant="outline-success"
          @click="editFormField"
          v-b-tooltip.hover.v-success
          title="Editer ce champs"
        >
          <b-icon icon="pencil" font-scale="1" class=""></b-icon>
        </b-button>
        <b-button
          class="border-0"
          size="sm"
          variant="outline-danger"
          @click="deleteField"
          v-b-tooltip.hover.v-danger
          title="Supprimer ce champs"
          ><b-icon icon="trash" font-scale="1" class=""></b-icon
        ></b-button>
        <b-button
          class="border-0"
          size="sm"
          variant="outline-secondary"
          @click="modeToUp"
          v-b-tooltip.hover.v-secondary
          title="Deplacer vers le haut"
          ><b-icon icon="arrow-bar-up" font-scale="1" class=""></b-icon
        ></b-button>
        <b-button
          class="border-0"
          size="sm"
          variant="outline-secondary"
          @click="moveToDown"
          v-b-tooltip.hover.v-secondary
          title="Deplacer vers le bas"
          ><b-icon icon="arrow-bar-down" font-scale="1" class=""></b-icon
        ></b-button>
        <b-button
          class="border-0"
          size="sm"
          variant="outline-secondary"
          @click="cloneField"
          v-b-tooltip.hover.v-secondary
          title="Cloner ce champs"
        >
          <b-icon icon="clipboard-plus" font-scale="1" class=""></b-icon>
        </b-button>
      </div>
    </div>

    <add-form-field
      :ref="'editFormField' + id"
      :field="field"
      :nouveau="false"
      :id-modal="'edit' + id"
    ></add-form-field>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Utilities from "./Utilities.js";

export default {
  components: {
    ImageCheck: () => import("./input/ImageCheckV2.vue"),
    IncrementNumber: () => import("./input/IncrementNumber.vue"),
    //InputText: () => import("./input/InputText.vue"),
    autocomplete: () => import("./input/Autocomplete"),
    Radio: () => import("./input/Radio.vue"),
    RadioDesc: () => import("./input/RadioDesc"),
    Checkbox: () => import("./input/Checkbox.vue"),
    LabelRow: () => import("./input/LabelRow.vue"),
    SelectDisplay: () => import("./input/SelectDisplay.vue"),
    MarkupTitle: () => import("./input/MarkupTitle.vue"),
    MarkupImage: () => import("./input/MarkupImage.vue"),
    files: () => import("./EditsFields/files.vue.vue"),
    LabelUp: () => import("./input/LabelUp.vue"),
    recapitulatif: () => import("./input/recapitulatif.vue"),
    userlogin: () => import("./input/userlogin.vue"),
    AideFinanciere: () => import("./input/inputAideFinanciere.vue"),
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
      typeFieldSelected: null,
      option: {},
      field: {},
      labelState: null,
    };
  },
  watch: {},
  computed: {
    ...mapGetters(["formDatas"]),
  },
  methods: {
    confirmStructureField(field) {
      if (field.type === "checkbox") {
        var selected = [];
        var type_data = typeof field.value;
        if (type_data !== "object") {
          if (field.value && field.value !== "") {
            selected.push(field.value);
            field.value = selected;
          } else {
            field.value = [];
          }
        }
      }
      return field;
    },
    getImage(il) {
      var le = this.formDatas.fields[this.id].options;

      for (var i = 0; i < le.length; i++) {
        if (i == il) {
          le[i].isActive = !le[i].isActive;
          this.formDatas.fields[this.id].value = le[i].value;
        } else {
          le[i].isActive = false;
        }
      }
    },
    editFormField() {
      var idModel = "modal-addForm--edit" + this.id;
      this.field = this.formDatas.fields[this.id];
      this.$bvModal.show(idModel);
    },
    deleteField() {
      var all = this.formDatas.fields;
      for (var i = all.length - 1; i >= 0; i--) {
        if (i === this.id) {
          all.splice(i, 1);
        }
      }
    },
    moveToDown() {
      const idN = this.id + 1;
      Utilities.array_move(this.formDatas.fields, this.id, idN);
    },
    modeToUp() {
      const idP = this.id - 1;
      Utilities.array_move(this.formDatas.fields, this.id, idP);
    },
    cloneField() {
      const field = JSON.stringify(this.formDatas.fields[this.id]);
      this.formDatas.fields.push(JSON.parse(field));
    },
  },
};
</script>
<style lang="scss"></style>
