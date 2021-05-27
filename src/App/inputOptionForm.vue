<template>
  <div>
    <hr />
    <!-- if is type Checkbox -->
    <b-row v-if="type == 'checkbox'" class="p-2">
      <b-col cols="7">
        <b-form-group
          label="label :"
          label-for="label-input"
          invalid-feedback="Name is required"
        >
          <b-form-input
            id="label-input"
            required
            v-model="fields.label"
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
      <b-col cols="12">
        <label>Options</label>
        <b-form @submit="onPush" @reset="onReset" class="border p-3">
          <b-form-group
            id="option-label"
            label="Option label"
            label-for="input-option-label"
          >
            <b-form-input
              v-model="inputOptions.label"
              id="option-label"
              placeholder="Enter label"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="option-val"
            label="Option value"
            label-for="input-option-val"
          >
            <b-form-input
              v-model="inputOptions.value"
              id="option-name"
              placeholder="Enter value of option"
              required
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary" size="sm" class="mr-2"
            >Push</b-button
          >
          <b-button type="reset" variant="danger" size="sm">Reset</b-button>
        </b-form>
        <b-card class="mt-3" header="Form Data Result">
          <pre class="m-0">{{ inputOptions }}</pre>
        </b-card>
      </b-col>
    </b-row>

    <!-- if is type checbox with description -->
    <b-row v-if="type == 'radiodesc'" class="p-2">
      <b-col cols="7">
        <b-form-group
          label="label :"
          label-for="label-input"
          invalid-feedback="Name is required"
        >
          <b-form-input id="label-input" required></b-form-input>
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
              v-model="optionsRadioDesc.label"
              id="option-label"
              placeholder="Enter label"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="option-name"
            label="description"
            label-for="input-option-description"
          >
            <b-form-input
              v-model="optionsRadioDesc.description"
              id="option-description"
              placeholder="Enter description"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="option-val"
            label="value"
            label-for="input-option-val"
          >
            <b-form-input
              v-model="optionsRadioDesc.value"
              id="option-name"
              placeholder="Enter value of option"
              required
            ></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary" size="sm" class="mr-2"
            >Push</b-button
          >
          <b-button type="reset" variant="danger" size="sm">Reset</b-button>
        </b-form>
        <b-card class="mt-3" header="Form Data Result">
          <pre class="m-0">{{ optionsRadioDesc }}</pre>
        </b-card>
      </b-col>
    </b-row>

    <!-- if is type radios -->
    <b-row v-if="type == 'radio'" class="p-2">
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
              v-model="optionsRadios.label"
              id="option-label"
              placeholder="Enter label"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="option-val"
            label="value"
            label-for="input-option-val"
          >
            <b-form-input
              v-model="optionsRadios.value"
              id="option-name"
              placeholder="Enter value of option"
              required
            ></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary" size="sm" class="mr-2"
            >Push</b-button
          >
          <b-button type="reset" variant="danger" size="sm">Reset</b-button>
        </b-form>
        <b-card class="mt-3" header="Form Data Result">
          <pre class="m-0">{{ optionsRadios }}</pre>
        </b-card>
      </b-col>
    </b-row>

    <!-- if is type codepostal -->
    <b-row v-if="type == 'codepostal'" class="p-2">
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
      <b-col cols="12">
        <b-form-group label="label :" label-for="label-postal">
          <b-form-input
            v-model="fields.label"
            id="label-postal"
            required
          ></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>

    <!-- if is type increment -->
    <b-row v-if="type == 'increment'" class="p-2">
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
    <b-row v-if="type == 'checkboximg'" class="p-2">
      <b-col cols="7">
        <b-form-group
          label="label :"
          label-for="label-input"
          invalid-feedback="Name is required"
        >
          <b-form-input
            v-model="fields.label"
            id="label-input"
            required
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
              v-model="optionsCheckImg.label"
              id="option-label"
              placeholder="Enter label"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="option-img"
            label="img"
            label-for="input-option-img"
          >
            <b-form-file
              id="option-name"
              placeholder="Choisir une image"
            ></b-form-file>
          </b-form-group>

          <b-form-group
            id="option-val"
            label="value"
            label-for="input-option-val"
          >
            <b-form-input
              v-model="optionsCheckImg.value"
              id="option-name"
              placeholder="Enter value of option"
              required
            ></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary" size="sm" class="mr-2"
            >Push</b-button
          >
          <b-button type="reset" variant="danger" size="sm">Reset</b-button>
        </b-form>
        <b-card class="mt-3" header="Form Data Result">
          <pre class="m-0">{{ optionsCheckImg }}</pre>
        </b-card>
      </b-col>
    </b-row>

    <!-- if is type Markup & Number label up -->
    <b-row v-if="type == 'markupnumber'" class="p-2">
      <b-col cols="7">
        <b-form-group
          label="label :"
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
          <b-button type="submit" variant="primary" size="sm" class="mr-2"
            >Push</b-button
          >
          <b-button type="reset" variant="danger" size="sm">Reset</b-button>
        </b-form>
        <b-card class="mt-3" header="Form Data Result">
          <pre class="m-0">{{ optionsMarkupNumber }}</pre>
        </b-card>
      </b-col>
    </b-row>

    <!-- if is type Markup & Number with label inline -->
    <b-row v-if="type == 'markupnumberrow'" class="p-2">
      <b-col cols="7">
        <b-form-group
          label="label :"
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
          <b-button type="submit" variant="primary" size="sm" class="mr-2"
            >Push</b-button
          >
          <b-button type="reset" variant="danger" size="sm">Reset</b-button>
        </b-form>
        <b-card class="mt-3" header="Form Data Result">
          <pre class="m-0">{{ optionsMarkupNumber }}</pre>
        </b-card>
      </b-col>
    </b-row>

    <!-- if is type Number -->
    <b-row v-if="type == 'number'" class="p-2">
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
              v-model="optionsNumber.label"
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
              v-model="optionsNumber.name"
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
              v-model="optionsNumber.value"
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
              v-model="optionsNumber.unit"
              id="option-unit"
              placeholder="Enter unit of option"
              required
            ></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary" size="sm" class="mr-2"
            >Push</b-button
          >
          <b-button type="reset" variant="danger" size="sm">Reset</b-button>
        </b-form>
        <b-card class="mt-3" header="Form Data Result">
          <pre class="m-0">{{ optionsNumber }}</pre>
        </b-card>
      </b-col>
    </b-row>
    fields:
    <pre>{{ fields }}--{{ optionsToPush }}</pre>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  components: {},
  props: {
    type: {
      type: String,
      default: null,
    },
  },
  data: () => {
    return {
      //json
      // fields: {
      //   type: null,
      //   label: "",
      //   name: "",
      //   require: true,
      //   options: [],
      // },
      //Object of type checkbox
      inputOptions: {
        label: "",
        value: "",
      },
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
      //object of type checkbox images
      optionsCheckImg: {
        label: "",
        value: "",
        img: "",
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
    ...mapState(["fields"]),
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
      } else return {};
    },
  },
  methods: {
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
