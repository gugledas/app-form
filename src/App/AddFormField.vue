<template>
  <div>
    <b-modal
      id="modal-addForm"
      ref="addForm"
      title="Ajouter des champs dans la page..."
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
import { mapGetters } from "vuex";
import inputOptionForm from "./inputOptionForm.vue";
export default {
  components: { inputOptionForm },
  props: {
    fields: {
      type: Object,
      default: function () {
        return {
          type: "",
          title: "",
          label: "",
          name: "",
          value: null,
          selected: [],
          imgUrl: "",
          require: "",
          options: [],
        };
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
      /*
      fields: {
        type: "",
        title: "",
        label: "",
        name: "",
        value: [],
        selected: "",
        imgUrl: "",
        require: true,
        options: [],
      },
      /**/
      //datas to check form validity
      labelState: null,
      typeOptions: [
        { value: null, text: "Please select an option" },
        { value: "radio", text: "Radio" },
        { value: "input", text: "Input" },
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
      ],
    };
  },
  watch: {},
  computed: {
    ...mapGetters(["formDatas"]),
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
      console.log("pus,sh", this.formDatas);
      this.fields.type = "";
      this.fields.title = "";
      this.fields.label = "";
      this.fields.name = "";
      this.fields.value = [];
      this.fields.selected = [];
      this.fields.imgUrl = "";
      this.fields.require = true;
      this.fields.options = [];
      //this.fields = {};
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
