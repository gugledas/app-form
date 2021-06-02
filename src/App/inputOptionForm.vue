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
          <b-form-input
            id="title-input"
            required
            v-model="fields.value"
          ></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>

    <!-- if is type increment -->
    <b-row v-if="type == 'increment'" class="p-2">
      <b-col cols="7">
        <b-form-group
          label="title :"
          label-for="title-input"
          invalid-feedback="Name is required"
        >
          <b-form-input
            id="title-input"
            required
            v-model="fields.title"
          ></b-form-input>
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
    </b-row>

    <!-- if is type checbox images -->

    <form-check-img v-if="type == 'checkboximg'" :fields="fields">
    </form-check-img>

    <!-- if is  Number label up  and Number label Inline-->

    <form-number-inline
      v-if="type == 'numberinline' || type == 'numberup'"
      :fields="fields"
    ></form-number-inline>

    <!-- if is type Markup & Number with label inline -->
    <b-row v-if="type == 'markupnumberrow'" class="p-2">
      <b-col cols="7">
        <b-form-group
          label="title :"
          label-for="title-input"
          invalid-feedback="Name is required"
        >
          <b-form-input
            id="title-input"
            required
            v-model="fields.title"
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col cols="7">
        <b-form-group
          label="Markup image :"
          label-for="markup-input"
          invalid-feedback="Markup image is required"
        >
          <b-form-file
            id="markup-input"
            description="Choose Markup image"
          ></b-form-file>
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
        <b-form-group
          label="name"
          label-for="name-input"
          invalid-feedback="Name is required"
        >
          <b-form-input
            id="name-input"
            required
            v-model="fields.name"
          ></b-form-input>
        </b-form-group>
      </b-col>
      <!-- form option -->
      <b-col cols="12">
        <label>Options</label>
        <b-form @submit="onPush" @reset="onReset" class="border p-3">
          <b-form-group
            id="option-label"
            label="label"
            label-for="input-option-label"
          >
            <b-form-input
              v-model="optionsMarkupNumber.label"
              id="option-label"
              placeholder="Enter label"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="option-name"
            label="name"
            label-for="input-option-name"
          >
            <b-form-input
              v-model="optionsMarkupNumber.name"
              id="option-name"
              placeholder="Enter name"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="option-val"
            label="value"
            label-for="input-option-val"
          >
            <b-form-input
              v-model="optionsMarkupNumber.value"
              id="option-value"
              placeholder="Enter value of option"
              type="number"
              min="1"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="option-unit"
            label="Input unit"
            label-for="input-option-unit"
          >
            <b-form-input
              v-model="optionsMarkupNumber.unit"
              id="option-unit"
              placeholder="Enter unit of option"
              required
            ></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary" size="sm" class="mr-2">
            Push
          </b-button>
          <b-button type="reset" variant="danger" size="sm"> Reset </b-button>
        </b-form>
        <b-form
          @submit="onPush"
          @reset="onReset"
          class="border p-3"
          v-for="(item, i) in fields.options"
          :key="i"
        >
          <b-form-group label="label" label-for="input-option-label">
            <b-form-input
              v-model="item.label"
              placeholder="Enter label"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group label="name" label-for="input-option-name">
            <b-form-input
              v-model="item.name"
              placeholder="Enter name"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group label="value" label-for="input-option-val">
            <b-form-input
              v-model="item.value"
              placeholder="Enter value of option"
              type="number"
              min="1"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Input unit" label-for="input-option-unit">
            <b-form-input
              v-model="item.unit"
              placeholder="Enter unit of option"
              required
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary" size="sm"> Push </b-button>
          <b-button type="reset" variant="dark" size="sm" class="mx-2">
            Reset
          </b-button>
          <b-button variant="danger" size="sm" @click="deleteOption(i)">
            delete
          </b-button>
        </b-form>
        <b-card class="mt-3" header="Form Data Result">
          <pre class="m-0">{{ optionsMarkupNumber }}</pre>
        </b-card>
      </b-col>
    </b-row>

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
    return {
      //object of type checkbox description
      optionsRadioDesc: {
        label: "",
        description: "",
        value: "",
      },
      //object of type radios
      optionsRadios: {
        label: "",
        value: "",
      },
      //object of type input
      optionsInput: {
        label: "",
        value: "",
      },

      //object of type select
      optionsSelect: {
        text: "",
        value: "",
      },
      //object of type checkbox images
      optionsCheckImg: {
        label: "",
        value: "",
        img: "",
        description: "",
        isActive: false,
      },
      //object of type number Markup
      optionsMarkupNumber: {
        label: "",
        value: "",
        name: "",
        unit: "",
      },

      //object of type number
      optionsNumber: {
        label: "",
        value: "",
        name: "",
        unit: "",
      },
      // optionsToPush: {},
    };
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
      } else if (base == "radiodesc") {
        return this.optionsRadioDesc;
      } else if (base == "radio") {
        return this.optionsRadios;
      } else if (base == "checkboximg") {
        return this.optionsCheckImg;
      } else if (base == "markupnumber") {
        return this.optionsMarkupNumber;
      } else if (base == "markupnumberrow") {
        return this.optionsMarkupNumber;
      } else if (base == "number") {
        return this.optionsNumber;
      } else if (base == "input") {
        return this.optionsInput;
      } else if (base == "select") {
        return this.optionsSelect;
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
