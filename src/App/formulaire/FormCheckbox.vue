<template>
  <div>
    <b-row class="p-2">
      <b-col sm="12">
        <b-form-group label="Label" invalid-feedback="Name is required">
          <b-input-group>
            <b-form-input v-model="fields.label" @input="input"></b-form-input>
            <b-form-input
              required
              v-model="fields.name"
              :readonly="readonly"
              @dblclick="toogleReadOnly"
            ></b-form-input>
          </b-input-group>
        </b-form-group>
      </b-col>
      <b-col cols="8">
        <b-form-group label="value">
          <b-form-select
            v-model="arrayValue"
            multiple
            :options="fields.options"
            placeholder="choose default value"
            @input="ArrayValue"
          ></b-form-select>
        </b-form-group>
      </b-col>

      <!-- options -->
      <b-col cols="12">
        <label>Options</label>
        <b-form @submit="onPush" @reset="onReset" class="border p-3">
          <b-form-group
            id="option-label"
            label="Option label"
            label-for="input-option-label"
          >
            <b-input-group>
              <b-form-input
                v-model="inputOptions.text"
                id="option-label"
                placeholder="Enter label"
                required
                @input="automaticValue"
              ></b-form-input>
              <b-form-input
                v-model="inputOptions.value"
                id="option-val"
                placeholder="Enter value of option"
                required
                :readonly="readonlyValue"
                @dblclick="toogleReadOnlyValue"
              ></b-form-input>
            </b-input-group>
          </b-form-group>
          <b-form-group label="Cout">
            <b-form-input
              v-model="inputOptions.cout"
              placeholder="Enter label"
              type="number"
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary" size="sm" class="mr-2">
            Push
          </b-button>
          <b-button type="reset" variant="danger" size="sm"> Reset </b-button>
        </b-form>
      </b-col>
      <b-col v-if="fields.options.length"
        ><b-card no-body class="mb-1" v-if="true">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-option variant="dark"
              >See options</b-button
            >
          </b-card-header>
          <b-collapse
            id="accordion-option"
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body class="p-2">
              <option-table :options="fields.options"></option-table>
            </b-card-body>
          </b-collapse> </b-card
      ></b-col>
    </b-row>
    <ValidationFields :field="fields"></ValidationFields>
  </div>
</template>

<script>
import { snakeCase } from "snake-case";
import ValidationFields from "../EditsFields/ValidationFields";
import OptionTable from "../OptionTable.vue";
export default {
  props: {
    fields: {
      type: Object,
      required: true,
      validator: function (val) {
        return val.label === undefined ||
          val.value === undefined ||
          val.name === undefined ||
          val.require === undefined
          ? false
          : true;
      },
    },
  },
  components: {
    ValidationFields,
    OptionTable,
  },
  data() {
    return {
      value: 1,
      arrayValue: [],
      readonly: true,
      readonlyValue: true,
      //Object of type checkbox
      inputOptions: {
        text: "",
        value: "",
        cout: 0,
      },
    };
  },
  watch: {},
  methods: {
    automaticValue() {
      if (this.readonlyValue && this.inputOptions.text.length <= 50) {
        this.inputOptions.value = snakeCase(this.inputOptions.text);
      }
    },
    ArrayValue() {
      if (this.arrayValue.length) {
        this.fields.value = this.arrayValue;
      } else {
        this.fields.value = [];
      }
    },
    input() {
      if (this.readonly && this.fields.name.length <= 32) {
        this.fields.name = snakeCase(this.fields.label);
      }
    },
    toogleReadOnlyValue() {
      if (this.readonlyValue) this.readonlyValue = false;
      else this.readonlyValue = true;
    },
    toogleReadOnly() {
      if (this.readonly) this.readonly = false;
      else this.readonly = true;
    },
    deleteOption(index) {
      var all = this.fields.options;
      console.log("i", all, index);

      for (var i = all.length - 1; i >= 0; i--) {
        if (i === index) {
          all.splice(i, 1);
          console.log("iii");
        }
      }
    },
    //logic for fields options
    onPush(event) {
      event.preventDefault();
      this.pushOptions(event);
    },
    pushOptions(event) {
      var info = {};
      for (let i in this.inputOptions) {
        info[i] = this.inputOptions[i];
      }
      console.log("object", info);
      this.fields.options.push(info);
      this.onReset(event);
      this.inputOptions = {
        text: "",
        value: "",
      };
    },
    onReset(event) {
      event.preventDefault;

      // Reset our form values
      // this.optionsToPush.label = "";
      // this.optionsToPush.value = null;

      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style lang="scss"></style>
