<template>
  <div>
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

    <b-col class="choice-section">
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <!-- fields value: {{ formDatas.fields[id].value }}-- fields selected:{{
          formDatas.fields[id].selected
        }} -->
        <!-- affiche sur le cas du type codepostal -->
        <b-row align-h="center" v-if="type == 'codepostal'">
          <b-col class="autocomplete">
            <autocomplete :value="formDatas.fields[id]"></autocomplete>
          </b-col>
        </b-row>
        <!-- affiche pour le cas du type checkbox image -->
        <b-row align-h="center" class="m-0" v-if="type == 'checkboximg'">
          <div
            v-for="(img, i) in formDatas.fields[id].options"
            :key="i"
            @click="getImage(i)"
          >
            <imageCheck
              :description="img.description"
              :isActive="img.isActive"
            />
          </div>
        </b-row>

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
          <increment-number :id="id"></increment-number>
        </b-row>

        <!-- affiche pour le cas du type radio -->

        <radio v-if="type == 'radio'" :field="formDatas.fields[id]"></radio>

        <!-- affiche pour le cas du type input -->

        <InputText
          :field="formDatas.fields[id]"
          v-if="type == 'input'"
        ></InputText>

        <!-- affiche pour le cas du type select -->

        <select-display
          v-if="type == 'select'"
          :field="formDatas.fields[id]"
        ></select-display>

        <!-- affiche pour le cas du type checkbox -->

        <checkbox
          v-if="type == 'checkbox'"
          :field="formDatas.fields[id]"
        ></checkbox>

        <!-- affiche pour le cas du type radio with description -->

        <radio-desc v-if="type == 'radiodesc'" :id="id"></radio-desc>
      </form>

      <b-row align-h="center" v-if="this.$store.state.mode">
        <b-col sm="2" class="my-3"
          ><b-button
            class="mx-3"
            variant="success"
            size="sm"
            @click="editFormField"
            >edit</b-button
          ></b-col
        ><b-col sm="2" class="my-3"
          ><b-button
            class="mx-3"
            variant="danger"
            size="sm"
            @click="deleteField"
            >delete</b-button
          ></b-col
        >
      </b-row>
    </b-col>

    <add-form-field
      :isOpen="isOpen"
      ref="editFormField"
      :fields="fields"
    ></add-form-field>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AddFormField from "./AddFormField.vue";
import Utilities from "./Utilities.js";
export default {
  components: {
    ImageCheck: () => import("./ImageCheck.vue"),
    IncrementNumber: () => import("./IncrementNumber.vue"),

    AddFormField,
    InputText: () => import("./input/InputText.vue"),
    autocomplete: () => import("./Autocomplete"),
    Radio: () => import("./input/Radio.vue"),
    RadioDesc: () => import("./input/RadioDesc"),
    Checkbox: () => import("./input/Checkbox.vue"),
    LabelRow: () => import("./input/LabelRow.vue"),
    SelectDisplay: () => import("./input/SelectDisplay.vue"),
    LabelUp: () => import("./input/LabelUp.vue"),
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
    resetModal() {
      //this.type = null;
    },
    handleOk(event) {
      event.preventDefault();
      this.handleSubmit();
    },
    handleSubmit(event) {
      event.preventDefault();
      this.isOpen = !this.isOpen;
      // Push the name to submitted names
      this.$emit("input_to_add", this.fields);
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    },
  },
};
</script>
<style lang="scss"></style>
