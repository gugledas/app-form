<template>
  <div>
    <b-table
      hover
      small
      caption-top
      responsive
      bordered
      :busy="loaders.GestionField"
      :items="fieldsRender"
      :fields="fieldsName"
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
    </b-table>
  </div>
</template>

<script>
import { mapState } from "vuex";
import buttonAction from "./tableauChampsAction.vue";

import radio from "./renders/lists.vue";

export default {
  name: "tableauChamps",
  props: {
    listForms: {
      type: Array,
      required: true,
    },
  },
  components: { buttonAction, radio },
  data() {
    return {
      fieldsName: [
        {
          key: "formid",
          label: "Group de champs",
        },
        {
          key: "label",
          sortable: false,
          label: "Etiquetes",
          // formatter(value, key, item) {
          //   console.log("formatter : ", value, "\n", key, "\n", item);
          //   return item.field.label;
          // },
        },
        {
          key: "value",
          label: "Prix",
          sortable: true,
        },
        {
          key: "type",
          label: "Type",
        },
        {
          key: "actions",
          label: "#Actions",
          class: ["position-relative"],
        },
      ],
    };
  },
  mounted() {
    this.$store.dispatch("GetFields");
  },
  computed: {
    ...mapState(["fields", "filtre", "loaders"]),
    fieldsRender() {
      var results = [];
      this.fields.forEach((item) => {
        results.push({ ...JSON.parse(item.jsonfield), id: item.id });
      });
      return results;
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
