<template lang="html">
  <div>
    <b-row class="mb-3">
      <b-col sm="12">
        <b-form-group label="Label" invalid-feedback="Name is required">
          <b-input-group>
            <b-form-input
              v-model="fields.label"
              @input="input"
              required
            ></b-form-input>
            <b-form-input
              required
              v-model="fields.name"
              :readonly="readonly"
              @dblclick="toogleReadOnly"
            ></b-form-input>
          </b-input-group>
        </b-form-group>
      </b-col>
      <b-col sm="12" v-if="fields.type == 'markupimage'">
        <b-form-group label="Url de l'image">
          <b-form-input v-model="fields.imgUrl" id="image-url"></b-form-input>
        </b-form-group>
        <manageImages
          @ev_manage_images_img="ev_manage_images_img($event)"
        ></manageImages>
      </b-col>
    </b-row>
    <ValidationFields :field="fields"></ValidationFields>
  </div>
</template>

<script>
import { snakeCase } from "snake-case";
import ValidationFields from "../EditsFields/ValidationFields.vue";
import manageImages from "../EditsFields/manage-images.vue";
export default {
  name: "FormMarkup",
  props: {
    title: {
      type: Boolean,
      default: true,
    },
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
    manageImages,
  },
  data() {
    return {
      readonly: true,
      value: "",
    };
  },
  mounted() {
    //
  },
  watch: {
    //
  },
  computed: {},
  methods: {
    ev_manage_images_img(data) {
      if (data.url) {
        this.fields.imgUrl = data.url;
      }
    },
    inputValue() {
      if (this.value.length) {
        return (this.fields.value = Number(this.value));
      }
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
  },
};
</script>

<style lang="scss" scoped></style>

<!--
 //nom du fichier en pascal.
 //<template>
 - le nom des attributs en kebab-case;
 - la valeur des attributs et des variables en camelCase;
 - function en PascalCase
 //props, data
 - variable en camelCase
 //methods
 - variable en PascalCase
-->
