<template lang="html">
  <div>
    <b-table
      :items="options"
      :fields="fields"
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
          Edit
        </b-button>
      </template>
      <template #row-details="row">
        <b-form @submit="onPush" @reset="onReset" class="px-3">
          <b-form-group label="label">
            <b-form-input
              v-model="row.item.text"
              placeholder="Enter label"
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

          <b-button type="reset" variant="dark" size="sm" class="mx-2"
            >Reset</b-button
          >
          <b-button variant="danger" size="sm" @click="deleteOption(row.index)"
            >delete</b-button
          >
          <b-button
            type="submit"
            variant="primary"
            class="mx-2"
            size="sm"
            @click="row.item.value.length ? allo(row) : ''"
            >ok</b-button
          >
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
    desc: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  components: {},
  data() {
    return {
      fieldSimple: [
        {
          label: "label",
          key: "text",
        },
        {
          label: "value",
          key: "value",
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
    };
  },
  mounted() {},
  watch: {},
  computed: {
    fields() {
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
    ArrayValue() {
      if (this.arrayValue.length) {
        this.fields.value = this.arrayValue;
      } else {
        this.fields.value = [];
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
      console.log("i", all, index);

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

<style lang="scss" scoped></style>
