<template>
  <div>
    <b-modal
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
              label-for="name-input"
              invalid-feedback="type is required"
            >
              <b-form-select
                v-model="type"
                :options="typeOptions"
                id="name-input"
                required
              ></b-form-select>
            </b-form-group>
          </b-col>
        </b-row>
        <!-- !-->
        <div>
          <input-option-form :type="type"></input-option-form>
        </div>

        <b-row align-h="end">
          <div class="mr-3">
            <b-button @click="isOpen = !isOpen" class="mr-2" size="sm"
              >cancel</b-button
            >
            <b-button type="reset" class="mr-2" variant="danger" size="sm"
              >Reset</b-button
            >
            <b-button type="submit" variant="primary" class="mr-2">ok</b-button>
          </div></b-row
        >
      </form>
    </b-modal>
  </div>
</template>

<script>
import { mapState } from "vuex";
import inputOptionForm from "./inputOptionForm.vue";
export default {
  components: { inputOptionForm },
  props: {},
  data: () => {
    return {
      isOpen: false,
      typeFieldSelected: null,
      type: null,
      // fields: {
      //   type: null,
      //   label: "",
      //   name: "",
      //   require: true,
      //   options: [],
      // },
      //datas to check form validity
      labelState: null,
      typeOptions: [
        { value: null, text: "Please select an option" },
        { value: "checkbox", text: "Checkbox" },
        { value: "radio", text: "Radio" },
        { value: "input", text: "Input" },
        { value: "number", text: "Number" },
        { value: "Select", text: "Select" },
        { value: "checkboximg", text: "Checkbox Image" },
        { value: "checkboxdesc", text: "Checkbox Description" },
        { value: "markupnumber", text: "Markup & Number" },
      ],
    };
  },
  watch: {},
  computed: {
    ...mapState(["fields"]),
  },
  methods: {
    optionAddToFields() {
      this.$store.dispatch("addFields");
    },
    //
    openAddFormFieldPopUp() {
      this.isOpen = !this.isOpen;
    },

    resetModal() {
      this.type = null;

      //   this.titleState = null;
      //   this.headerTitle = "";
      //   this.headerState = null;
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
      this.optionAddToFields();
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
