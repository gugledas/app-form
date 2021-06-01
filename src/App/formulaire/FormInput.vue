<template>
  <div>
    <b-row class="mb-3">
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
      <b-col cols="7">
        <b-form-group label="value">
          <b-form-input type="text" v-model="fields.value"></b-form-input>
        </b-form-group>
      </b-col>
      <b-col sm="3">
        <b-form-group label="require?" label-for="require-input">
          <b-form-checkbox
            id="require-input"
            :value="true"
            :unchecked-value="false"
            required
            v-model="fields.require"
          ></b-form-checkbox>
        </b-form-group>
      </b-col>
    </b-row>
    <ValidationFields :field="fields"></ValidationFields>
  </div>
</template>

<script>
import { snakeCase } from "snake-case";
import ValidationFields from "./ValidationFields.vue";
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
  },
  data() {
    return {
      value: 1,
      readonly: true,
      //Object of type checkbox
      inputOptions: {
        label: "",
        value: "",
      },
    };
  },
  watch: {},
  methods: {
    input() {
      if (this.readonly && this.field.name.length <= 32) {
        this.field.name = snakeCase(this.field.label);
      }
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
