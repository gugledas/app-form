<template>
  <div :firstValue="firstValue">
    <b-form class="mb-5">
      <b-row>
        <b-col md="4">
          <b-form-group
            label="Grouper par formulaire."
            label-for="type-input"
            invalid-feedback="type is required"
          >
            <b-form-select
              v-model="filtre.formid"
              @input="SelectionForm"
              :options="listForms"
              :disabled="loaders.GestionFieldFiltre"
            ></b-form-select>
          </b-form-group>
        </b-col>
        <b-col
          md="8"
          class="d-flex align-items-end pb-md-3 justify-content-end"
        >
          <b-button
            variant="outline-info"
            class="mt-3 mr-3"
            @click="OpenModalAddField"
          >
            + Ajouter un champs
          </b-button>
          <b-button variant="outline-info" class="mt-3 mr-3">
            + Exporter
          </b-button>
          <b-button variant="outline-info" class="mt-3"> + Importer </b-button>
        </b-col>
      </b-row>
    </b-form>
    <AddForm
      :listForms="listForms"
      :defaultFormid="filtre.formid"
      :field="field"
      idModal="filter"
      @set_default_field="set_default_field"
    ></AddForm>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AddForm from "./Addfield.vue";
import Utilities from "../Utilities.js";

export default {
  created() {},
  name: "Filtres",
  props: {
    listForms: {
      type: Array,
      required: true,
    },
  },
  components: {
    AddForm,
  },
  data() {
    return {
      field: Utilities.field(),
    };
  },
  mounted() {
    //on selectionne le premier elment
  },
  computed: {
    ...mapState({
      filtre: (state) => state.StoreGestionChamps.filtre,
      loaders: (state) => state.StoreGestionChamps.loaders,
    }),
    firstValue() {
      //alert("firstValue");
      if (this.listForms.length > 0) {
        let val = localStorage.getItem("gestionfields.defaultformid");
        if (!val) this.listForms[0].value;
        this.$store.dispatch("SetFiltre", {
          key: "formid",
          value: val,
        });
        return this.listForms[0].value;
      }
      return null;
    },
  },
  methods: {
    OpenModalAddField() {
      this.$bvModal.show("modal-addForm--filter");
    },
    /**
     * Remet la valeur par defaut apres selection.
     */
    set_default_field() {
      this.field = Utilities.field();
    },
    /**
     * --
     */
    SelectionForm(val) {
      localStorage.setItem("gestionfields.defaultformid", val);
      console.log("SelectionForm val", val);
      this.$store.dispatch("GetFields");
    },
  },
};
</script>
