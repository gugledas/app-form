<template lang="html">
  <div class="accordion" role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-1 variant="info">
          Configuration avancée
        </b-button>
      </b-card-header>
      <b-collapse
        id="accordion-1"
        visible
        accordion="my-accordion"
        role="tabpanel"
      >
        <b-card-body>
          <b-form-group
            label="Selectionner les elments de validation"
            v-slot="{ ariaDescribedby }"
          >
            <b-form-checkbox-group
              v-model="selected"
              :options="options"
              :aria-describedby="ariaDescribedby"
            ></b-form-checkbox-group>
          </b-form-group>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>
<script>
//import magentoSynchroListSites from "./ListSites.vue";
export default {
  name: "ValidationFields",
  props: {
    field: {
      type: Object,
      required: true,
      validator: function (val) {
        return val.require !== undefined ? true : false;
      },
    },
  },
  components: {
    //
  },
  data() {
    return {
      options: [
        {
          text: "Le champs est requis",
          value: "required",
        },
        {
          text: "Le champ ne peut contenir que des caractères alphabétiques.",
          value: "alpha",
        },
        {
          text: "Le champ doit être un email valide.",
          value: "email",
        },
        {
          text: "Le champ doit être une valeur numerique",
          value: "numeric",
        },
      ],
      selected: [],
    };
  },
  mounted() {
    this.retriveRules();
  },
  watch: {
    selected() {
      this.field.require = this.selected.join("|");
    },
  },
  computed: {
    //
  },
  methods: {
    retriveRules() {
      this.selected = this.field.require.split("|");
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
