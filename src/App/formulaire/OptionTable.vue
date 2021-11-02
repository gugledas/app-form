<template lang="html">
  <div>
    <b-table
      :items="options"
      :fields="defaultOptions"
      responsive
      head-variant="light"
      :outlined="true"
    >
      <template #cell(action)="row">
        <b-button
          size="sm"
          variant="outline-primary"
          @click="row.toggleDetails"
          v-if="!row.detailsShowing"
        >
          Modifier
        </b-button>
      </template>
      <template #row-details="row">
        <b-form @submit="onPush" @reset="onReset" class="px-3">
          <b-form-group label="label">
            <b-form-input
              v-model="row.item.text"
              placeholder="Entrer le label"
              required
              @input="automaticValue(row)"
            ></b-form-input>
          </b-form-group>

          <b-form-group label="Option value">
            <b-form-input
              placeholder="Enter value of option"
              required
              v-model="row.item.value"
              :readonly="readonlyValue"
              @dblclick="toogleReadOnlyValue"
            ></b-form-input>
          </b-form-group>

          <b-form-group label="Description" v-if="desc">
            <b-form-input
              placeholder="Enter value of option"
              required
              v-model="row.item.description"
            ></b-form-input>
          </b-form-group>
          <b-form-group label="cout (€)">
            <b-form-input type="number" v-model="row.item.cout"></b-form-input>
          </b-form-group>
          <div v-if="row.item.img">
            <img :src="row.item.img" style="width=100px;" />
          </div>
          <b-button
            type="submit"
            variant="primary"
            class="mx-2"
            size="sm"
            @click="row.item.value.length ? allo(row) : ''"
          >
            Modifier
          </b-button>
          <b-button variant="danger" size="sm" @click="deleteOption(row.index)">
            Supprimer
          </b-button>
        </b-form>
      </template>
    </b-table>
  </div>
</template>

<script>
import { snakeCase } from "snake-case";

export default {
  name: "OptionsTable",
  props: {
    field: {
      type: Object,
      required: true,
    },
    desc: {
      type: Boolean,
      required: true,
    },
  },
  components: {},
  data() {
    return {
      fieldSimple: [
        {
          label: "Etiquetes",
          key: "text",
        },
        {
          label: "Valeur",
          key: "value",
        },
        {
          label: "Prix",
          key: "cout",
          formatter(value) {
            if (value) return value + " €";
          },
        },
        {
          label: "",
          key: "action",
        },
      ],
      fieldDesc: [
        {
          label: "label",
          key: "text",
        },
        {
          label: "value",
          key: "value",
        },
        {
          label: "desc",
          key: "description",
        },
        {
          label: "",
          key: "action",
        },
      ],
      readonlyValue: true,
      options: this.field.options,
    };
  },
  computed: {
    defaultOptions() {
      if (this.desc) {
        return this.fieldDesc;
      } else return this.fieldSimple;
    },
  },
  methods: {
    toogleReadOnlyValue() {
      if (this.readonlyValue) this.readonlyValue = false;
      else this.readonlyValue = true;
    },
    automaticValue(row) {
      if (this.readonlyValue && this.options[row.index].text.length <= 50) {
        this.options[row.index].value = snakeCase(this.options[row.index].text);
      }
    },
    onPush(event) {
      event.preventDefault();
    },
    onReset(event) {
      event.preventDefault;
    },
    allo(row) {
      this.options[row.index]._showDetails = false;
    },
    deleteOption(index) {
      var all = this.options;
      for (var i = all.length - 1; i >= 0; i--) {
        if (i === index) {
          all.splice(i, 1);
          console.log("iii");
        }
      }
    },
  },
};
</script>
