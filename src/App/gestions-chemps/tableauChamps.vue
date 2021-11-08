<template>
  <b-table
    hover
    small
    caption-top
    responsive
    bordered
    :busy="loaders.GestionField"
    :items="fieldsRender"
    :fields="fieldsName"
    class="tableau-gestion-fields"
  >
    <template #table-busy>
      <loaderIcon :busy="loaders.GestionField"></loaderIcon>
    </template>
    <template #cell(actions)="row">
      <buttonAction :row="row" :listForms="listForms"></buttonAction>
    </template>
    <template #cell(formid)="row">
      {{ getStringValue(row.value) }}
    </template>
    <template #cell(value)="row">
      <component
        :field="row.item"
        :is="templateRender(row.item.type)"
      ></component>
    </template>
    <template #cell(stepes)="row">
      <stepesInfosVue :stepes="row.value"></stepesInfosVue>
    </template>
  </b-table>
</template>

<script>
import buttonAction from "./tableauChampsAction.vue";
import stepesInfosVue from "./renders/stepesInfos.vue";
//import moduleA from "./testStore.js";
import radio from "./renders/lists.vue";
import { mapState } from "vuex";

export default {
  name: "tableauChamps",
  props: {
    listForms: {
      type: Array,
      required: true,
    },
  },
  components: { buttonAction, radio, stepesInfosVue },
  data() {
    return {
      fieldsName: [
        {
          key: "formid",
          label: "Formulaire",
          class: ["td-formid"],
        },
        {
          key: "stepes",
          label: "etapes + identifiant",
          class: ["td-stepes"],
        },
        {
          key: "label",
          sortable: false,
          label: "Etiquetes",
          class: ["td-label"],
        },
        {
          key: "value",
          label: "Prix",
          sortable: true,
          class: ["td-value"],
        },
        {
          key: "actions",
          label: "#Actions",
          class: ["position-relative", "td-actions"],
        },
        {
          key: "type",
          label: "Type",
        },
      ],
    };
  },
  computed: {
    ...mapState({
      loaders: (state) => state.StoreGestionChamps.loaders,
      fields: (state) => state.StoreGestionChamps.fields,
    }),
    fieldsRender() {
      return this.fields;
    },
  },

  methods: {
    /**
     * --
     */
    getStringValue(val) {
      for (const i in this.listForms) {
        const option = this.listForms[i];
        if (option.value === val) {
          return option.text;
        }
      }
    },
    /**
     * --
     */
    templateRender(type) {
      var template = "";
      switch (type) {
        case "radio":
          template = radio;
          break;
        case "checkbox":
          template = radio;
          break;

        default:
          break;
      }
      return template;
    },
  },
};
</script>
<style lang="scss">
.tableau-gestion-fields {
  table {
    thead th {
      min-width: 200px;
    }
    td {
      word-break: break-word;
    }
    .td-formid {
      min-width: 120px;
    }
    .td-stepes {
      min-width: 250px;
    }
    .td-label {
      min-width: 250px;
      font-size: 14px;
    }
    .td-actions {
      min-width: 100px;
    }
    .td-value {
      min-width: 370px;
    }
  }
}
</style>
