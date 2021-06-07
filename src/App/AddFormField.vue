<template>
  <b-modal
    size="lg"
    id="modal-addForm"
    ref="addForm"
    title="Ajouter des champs dans la page"
    hide-footer
    v-model="isOpen"
    @ok="handleOk"
  >
    <form
      ref="forme"
      @submit="handleSubmit"
      @reset="resetModal"
      @hidden="resetModal"
    >
      <b-row>
        <b-col cols="7">
          <b-form-group
            label="Sélectionner un type"
            label-for="type-input"
            invalid-feedback="type is required"
          >
            <b-form-select
              v-model="fields.type"
              :options="typeOptions"
              id="type-input"
              required
            ></b-form-select>
          </b-form-group>
        </b-col>
      </b-row>
      <!-- !-->
      <div>
        <input-option-form
          :type="fields.type"
          :fields="fields"
        ></input-option-form>
      </div>

      <b-row align-h="end">
        <div class="mr-3">
          <b-button type="submit" variant="primary" class="mr-2">{{
            nameButtonOk
          }}</b-button>
        </div>
      </b-row>
    </form>
  </b-modal>
</template>

<script>
import { mapGetters } from "vuex";
import inputOptionForm from "./inputOptionForm.vue";
import Utilities from "./Utilities.js";
export default {
  components: { inputOptionForm },
  props: {
    nouveau: {
      type: Boolean,
      require: true,
      default: true,
    },
    fields: {
      type: Object,
      default: function () {
        return Utilities.field();
      },
    },
    /**/
    genre: {
      type: String,
      default: "",
    },
  },
  data: () => {
    return {
      isOpen: false,
      typeFieldSelected: null,
      type: null,

      //datas to check form validity
      labelState: null,
      typeOptions: [
        { value: null, text: "Please select an option" },
        { value: "radio", text: "Radio" },
        { value: "text", text: "text" },
        { value: "select", text: "Select" },
        { value: "number", text: "Number" },
        { value: "checkbox", text: "Checkbox" },
        { value: "increment", text: "Spin Button" },
        { value: "markuptitle", text: "Markup Title" },
        { value: "markupimage", text: "Markup Image" },
        { value: "checkboximg", text: "Checkbox Image" },
        { value: "codepostal", text: "Code Postal input" },
        { value: "radiodesc", text: "Radio with Description" },
        { value: "numberup", text: "Number label up" },
        { value: "file", text: "Ajout de fichiers" },
      ],
    };
  },
  watch: {},
  computed: {
    ...mapGetters(["formDatas"]),
    nameButtonOk() {
      return this.nouveau ? "Ajouter" : "Mettre à jour";
    },
  },
  methods: {
    optionAddToFields() {
      //this.$store.dispatch("addFields", this.fields);
      class proto {
        constructor(hauteur) {
          this.hauteur = hauteur;
        }
      }
      const protoD = new proto(this.fields);
      var sh = {};
      for (let i in protoD.hauteur) {
        sh[i] = protoD.hauteur[i];
      }
      this.formDatas.fields.push(sh);
      Utilities.resetField(this.fields);
    },
    //
    openAddFormFieldPopUp() {
      this.isOpen = !this.isOpen;
    },

    resetModal() {
      this.type = null;
    },
    handleOk(event) {
      // Prevent modal from closing
      event.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit(event) {
      event.preventDefault();
      // Exit when the form isn't valid

      this.isOpen = !this.isOpen;
      if (this.nouveau) {
        this.optionAddToFields();
      }
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
