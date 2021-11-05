<template>
  <div class="boutton-absolute d-flex">
    <b-button
      class="border-0"
      size="md"
      variant="outline-info"
      @click="editerField"
      v-b-tooltip.hover.v-info
      title="Editer le champs"
    >
      <b-icon icon="pencil-square" aria-hidden="true"></b-icon>
    </b-button>
    <b-button
      class="border-0 d-none"
      size="md"
      variant="outline-secondary"
      @click="$emit('cloner-field', row)"
      v-b-tooltip.hover.v-info
      title="cloner le champs"
    >
      <b-icon icon="clipboard-plus" aria-hidden="true"></b-icon>
    </b-button>
    <b-button
      class="border-0"
      size="md"
      variant="outline-danger"
      @click="deleteField"
      v-b-tooltip.hover.v-danger
      title="Supprimer le champs"
    >
      <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
    </b-button>
    <AddForm
      :listForms="listForms"
      :defaultFormid="field.formid"
      :field="field"
      :idModal="'edit' + row.index"
    ></AddForm>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AddForm from "./Addfield.vue";
import config from "../config/config.js";
export default {
  name: "tableauChampsAction",
  props: {
    row: {
      type: Object,
    },
    listForms: {
      type: Array,
    },
  },
  components: { AddForm },
  computed: {
    ...mapState({
      loaders: (state) => state.StoreGestionChamps.loaders,
      fields: (state) => state.StoreGestionChamps.fields,
    }),
    field() {
      if (this.row) {
        return this.row.item;
      } else {
        return {};
      }
    },
  },
  methods: {
    editerField() {
      this.$bvModal.show("modal-addForm--edit" + this.row.index);
    },
    /**
     * --
     */
    deleteField() {
      config.modalConfirmDelete().then(() => {
        this.loaders.GestionField = true;
        config.deleteField(this.row.item).then(() => {
          this.fields.splice(this.row.index, 1);
          this.loaders.GestionField = false;
        });
      });
    },
  },
};
</script>
