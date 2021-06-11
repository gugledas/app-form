<template>
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

    <!-- form option -->
    <b-col cols="12">
      <label>Options</label>
      <b-form @submit="onPush" @reset="onReset" class="border p-3">
        <b-form-group label="isActive?">
          <b-form-checkbox
            :value="true"
            :unchecked-value="false"
            required
            v-model="inputOptions.isActive"
          ></b-form-checkbox>
        </b-form-group>

        <b-form-group label="label" label-for="input-option-label">
          <b-form-input
            v-model="inputOptions.text"
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
            v-model="inputOptions.value"
            id="option-val"
            placeholder="Enter value of option"
            required
          ></b-form-input>
        </b-form-group>
        <manageImages
          @ev_manage_images_img="ev_manage_images_img($event, inputOptions)"
        ></manageImages>
        <b-button type="submit" variant="primary" size="sm" class="mr-2">
          Push
        </b-button>
        <b-button type="reset" variant="danger" size="sm"> Reset </b-button>
      </b-form>
      <hr />
      <!-- list edit options-->
      <b-form
        @submit="onPush"
        @reset="onReset"
        class="border p-3 mb-3 bg-light"
        v-for="(item, i) in fields.options"
        :key="i"
      >
        <!-- al -->
        <b-form-group label="isActive?" label-for="require-input">
          <b-form-checkbox
            :id="`require-input${i}`"
            :value="true"
            :unchecked-value="false"
            required
            v-model="item.isActive"
          ></b-form-checkbox>
        </b-form-group>

        <b-form-group
          :id="`option-label${i}`"
          label="label"
          label-for="input-option-label"
        >
          <b-form-input
            v-model="item.label"
            :id="`option-label${i}`"
            placeholder="Enter label"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          :id="`desc-img${i}`"
          label="description"
          label-for="input-option-val"
        >
          <b-form-input
            v-model="item.description"
            :id="`desc-img${i}`"
            placeholder="1 Côté"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          :id="`option-val${i}`"
          label="value"
          label-for="input-option-val"
        >
          <b-form-input
            v-model="item.value"
            :id="`option-val${i}`"
            placeholder="Enter value of option"
            required
          ></b-form-input>
        </b-form-group>

        <manageImages
          @ev_manage_images_img="ev_manage_images_img($event, item)"
          :img_url="item.img"
        ></manageImages>

        <b-button type="submit" variant="primary" size="sm">Push</b-button>
        <b-button type="reset" variant="dark" size="sm" class="mx-2">
          Reset
        </b-button>
        <b-button variant="danger" size="sm" @click="deleteOption(i)"
          >delete</b-button
        >
      </b-form>
      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ inputOptions }}</pre>
      </b-card>
    </b-col>
    <b-col sm="12">
      <ValidationFields :field="fields"></ValidationFields>
    </b-col>
  </b-row>
</template>

<script>
import { snakeCase } from "snake-case";
import ValidationFields from "../EditsFields/ValidationFields";
import manageImages from "../EditsFields/manage-images.vue";
//import OptionTable from "../OptionTable.vue";
export default {
  props: {
    fields: {
      type: Object,
      require: true,
    },
  },
  components: {
    ValidationFields,
    manageImages,
    //OptionTable,
  },
  data() {
    return {
      value: 1,
      //Object of type checkbox
      inputOptions: {
        text: "",
        value: "",
        img: "",
        description: "",
        isActive: false,
      },
      readonly: true,
    };
  },
  watch: {},
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
      for (let i in this.inputOptions) {
        info[i] = this.inputOptions[i];
      }
      console.log("object", info);
      this.fields.options.push(info);
      this.onReset(event);
      this.inputOptions = {
        label: "",
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
    input() {
      if (this.readonly && this.fields.name.length <= 32) {
        this.fields.name = snakeCase(this.fields.label);
      }
    },
    toogleReadOnly() {
      if (this.readonly) this.readonly = false;
      else this.readonly = true;
    },
    ev_manage_images_img(data, inputOptions) {
      if (data.url) {
        inputOptions.img = data.url;
      }
    },
  },
};
</script>

<style lang="scss"></style>
