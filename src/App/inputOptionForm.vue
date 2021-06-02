<template>
  <div>
    <hr />
    <!-- if is type Checkbox -->
    <form-checkbox v-if="type == 'checkbox'" :fields="fields"></form-checkbox>
    <!-- if is type input -->

    <InputText
      :field="fields"
      v-if="type == 'text' || type == 'number'"
    ></InputText>

    <!-- if is type select -->
    <form-select v-if="type == 'select'" :fields="fields"></form-select>

    <!-- if is type checbox with description -->
    <form-radio-desc
      v-if="type == 'radiodesc'"
      :fields="fields"
    ></form-radio-desc>

    <!-- if is type radios -->

    <form-radio v-if="type == 'radio'" :fields="fields"></form-radio>

    <!-- if is type codepostal -->
    <b-row v-if="type == 'codepostal'" class="p-2">
      <b-col cols="7">
        <b-form-group label="Label">
          <b-form-input required v-model="fields.label"></b-form-input>
        </b-form-group>
      </b-col>

      <b-col cols="7">
        <b-form-group label="Name" label-for="postal-input">
          <b-form-input
            id="postal-input"
            required
            v-model="fields.name"
          ></b-form-input>
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
      <b-col cols="7">
        <b-form-group label="value">
          <b-form-input id="title-input" v-model="fields.value"></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>

    <!-- if is type increment -->
    <b-row v-if="type == 'increment'" class="p-2">
      <b-col cols="7">
        <b-form-group label="label">
          <b-form-input required v-model="fields.label"></b-form-input>
        </b-form-group>
      </b-col>
      <b-col cols="7">
        <b-form-group
          label="Name"
          label-for="increment-input"
          invalid-feedback="Name is required"
        >
          <b-form-input
            id="name-input"
            required
            v-model="fields.name"
          ></b-form-input>
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
      <b-col cols="7">
        <b-form-group label="value">
          <b-form-input required v-model="fields.value"></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>

    <!-- if is type markup title -->
    <b-row v-if="type == 'markuptitle'" class="p-2">
      <b-col cols="7">
        <b-form-group label="label">
          <b-form-input required v-model="fields.label"></b-form-input>
        </b-form-group>
      </b-col>
      <b-col cols="7">
        <b-form-group label="Name">
          <b-form-input v-model="fields.name"></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>

    <!-- if is type markup image -->
    <b-row v-if="type == 'markupimage'" class="p-2">
      <b-col cols="7">
        <b-form-group label="Url">
          <b-form-input required v-model="fields.imgUrl"></b-form-input>
        </b-form-group>
      </b-col>
      <b-col cols="7">
        <b-form-group label="Name">
          <b-form-input v-model="fields.name"></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
    <!-- if is type checbox images -->

    <form-check-img v-if="type == 'checkboximg'" :fields="fields">
    </form-check-img>

    <!-- if is  Number label up  and Number label Inline-->

    <form-number-inline
      v-if="type == 'numberup'"
      :fields="fields"
    ></form-number-inline>

    fields:
    <pre>{{ fields }}--{{ optionsToPush }}</pre>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import FormCheckbox from "./formulaire/FormCheckbox.vue";
//import FormInput from "./formulaire/FormInput.vue";
import FormRadioDesc from "./formulaire/FormRadioDesc.vue";
import FormSelect from "./formulaire/FormSelect.vue";
import FormRadio from "./formulaire/FormRadio";
import FormCheckImg from "./formulaire/FormCheckImg.vue";
import FormNumberInline from "./formulaire/FormNumberInline.vue";
import Utilities from "./Utilities.js";
export default {
  components: {
    FormCheckbox,
    //FormInput,
    FormSelect,
    FormRadioDesc,
    FormRadio,
    FormCheckImg,
    FormNumberInline,
    InputText: () => import("./EditsFields/InputText.vue"),
  },
  props: {
    type: {
      type: String,
      default: null,
    },
    genre: {
      type: String,
      default: "",
    },
    fields: {
      type: Object,
      default: function () {
        return Utilities.field();
      },
    },
  },
  data: () => {
    return {};
  },
  watch: {
    type() {
      this.fields.type = this.type;
    },
  },
  computed: {
    ...mapGetters(["formDatas"]),
    optionsToPush() {
      var base = this.type;
      if (base == "checkbox") {
        return this.inputOptions;
      } else return {};
    },
  },
  methods: {
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
      for (let i in this.optionsToPush) {
        info[i] = this.optionsToPush[i];
      }
      console.log("object", info);
      this.fields.options.push(info);
      this.onReset(event);
    },
    onReset(event) {
      event.preventDefault;
      for (let i in this.optionsToPush) {
        this.optionsToPush[i] = "";
        console.log("iss", this.optionsToPush[i]);
      }
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
