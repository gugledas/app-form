<template lang="html">
  <div>
    <b-button
      size="sm"
      variant="outline-info"
      @click="addForm()"
      v-b-modal.add-edit-form
    >
      +
    </b-button>
    <b-table :items="items" :fields="fields">
      <template #cell(action)="data">
        <b-button size="sm" variant="outline-primary" class="mr-2">
          voir
        </b-button>

        <b-button
          size="sm"
          variant="outline-warning"
          @click="updateForm(data.index)"
        >
          MAJ
        </b-button>
      </template>
    </b-table>
    <AddEditForm></AddEditForm>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Listesfomes",
  props: {},
  components: {
    AddEditForm: () => import("./ConfigsForms/AddEditForm.vue"),
  },
  data() {
    return {
      fields: [
        {
          label: "Identifiant",
          key: "id",
        },
        {
          label: "nom du formulaire",
          key: "name",
        },
        {
          label: "Description",
          key: "description",
        },
        {
          label: "#Action",
          key: "action",
        },
      ],
    };
  },
  mounted() {},
  watch: {},
  computed: {
    ...mapState(["items"]),
  },
  methods: {
    updateForm(id) {
      this.$router.push({ path: `/edit-form/${id}` });
    },
    addForm() {
      //
    },
  },
};
</script>

<style lang="scss" scoped></style>

<!--
 //nom du fichier en pascal.
 //<template>
 - le nom des attributs en kebab-case;
 - la valeur des attributs et des variables en camelCase;
 - function en PascalCase
 //props, data
 - variable en camelCase
 //methods
 - variable en PascalCase
-->
