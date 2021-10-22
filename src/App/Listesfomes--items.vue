<template lang="html">
  <div class="block-option">
    <!-- lists -->
    <div class="block" v-for="(form, index) in items" :key="index"></div>
    <div class="block-plus" v-if="$store.state.mode" @click="newForm">
      <div class="horiz"></div>
      <div class="verti"></div>
      <div class="block_desc">
        <span>Nouveau Formulaire</span>
      </div>
    </div>
    <AddEditForm></AddEditForm>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AddEditForm from "./ConfigsForms/AddEditForm.vue";

export default {
  name: "ListesfomesItems",
  data() {
    return {
      fields: [
        {
          label: "Identifiant",
          key: "id",
        },
        {
          label: "Type de travaux",
          key: "name",
        },
        {
          label: "Que souhaitez vous faire",
          key: "action",
          thClass: ["th-action"],
        },
      ],
    };
  },
  components: {
    AddEditForm,
  },
  mounted() {
    this.$store.dispatch("loadStepsDatas");
  },
  computed: {
    ...mapState(["items"]),
  },
  methods: {
    newForm() {
      this.$bvModal.show("add-edit-form");
    },
  },
};
</script>
