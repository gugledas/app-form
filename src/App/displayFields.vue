<template>
  <div>
    <div>
      <!-- fields value: {{ formDatas.fields[id].value }}-- fields selected:{{
          formDatas.fields[id].selected
        }} -->
      <!-- affiche sur le cas du type codepostal -->
      <b-row align-h="center" v-if="type == 'codepostal'">
        <b-col>
          <autocomplete :field="formDatas.fields[id]"></autocomplete>
        </b-col>
      </b-row>
      <!-- affiche pour le cas du type checkbox image -->
      <!--
        <b-row align-h="center" class="m-0" v-if="type == 'checkboximg'">
          <div
            v-for="(img, i) in formDatas.fields[id].options"
            :key="i"
            @click="getImage(i)"
          >
            <imageCheck
              :description="img.label"
              :isActive="img.isActive"
              :urlImage="baseUrl + img.img"
            />
          </div>
        </b-row>
      -->
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

      <radio v-if="type == 'radio'" :field="formDatas.fields[id]"></radio>

      <!-- affiche pour le cas du type input

      <InputText
        :field="formDatas.fields[id]"
        v-if="type == 'input'"
      ></InputText>
      -->
      <!-- affiche pour le cas du type select -->

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
      :isOpen="isOpen"
      ref="editFormField"
      :fields="fields"
      :nouveau="false"
    ></add-form-field>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AddFormField from "./AddFormField.vue";
import Utilities from "./Utilities.js";

export default {
  components: {
    AddFormField,
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
      option: {},
      fields: Utilities.field(),
      //datas to check form validity
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
      console.log("le", le);
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
      this.$refs.editFormField.openAddFormFieldPopUp();
      this.fields = this.formDatas.fields[this.id];
    },
    deleteField() {
      var all = this.formDatas.fields;
      for (var i = all.length - 1; i >= 0; i--) {
        if (i === this.id) {
          all.splice(i, 1);
          console.log("iiippp");
        }
      }
      //this.fields = this.formDatas.fields[this.id];
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
      //console.log("this.formDatas.fields : ", this.formDatas.fields[this.id]);
      const field = JSON.stringify(this.formDatas.fields[this.id]);
      this.formDatas.fields.push(JSON.parse(field));
    },
  },
};
</script>
<style lang="scss"></style>
