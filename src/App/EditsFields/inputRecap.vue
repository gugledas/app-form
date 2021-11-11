<!--
https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/vuejs-v2.html#using-es6-modules
-->
<template lang="html">
  <div>
    <b-row class="mb-3">
      <b-col sm="12">
        <compositeHeaderField :field="field"></compositeHeaderField>
      </b-col>
      <b-col sm="12">
        <b-form-group>
          <ckeditor
            :editor="editor"
            v-model="field.value"
            :config="editorConfig"
          ></ckeditor>
        </b-form-group>
      </b-col>
      <b-col sm="12">
        <b-form-group label="Coeficient pour estimation de prix en %">
          <b-form-input
            v-model="field.percent"
            required
            type="number"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Logique de calcul complexe">
          <b-form-checkbox
            size="lg"
            v-model="field.complex_logique"
          ></b-form-checkbox>
        </b-form-group>
        <b-form-group
          label="Logique calcul complexe"
          v-if="field.complex_logique"
        >
          <b-form-textarea
            v-model="field.preproccess_value"
            placeholder=""
            rows="10"
          ></b-form-textarea>
        </b-form-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import CKEditor from "@ckeditor/ckeditor5-vue2";
import compositeHeaderField from "./compositeHeaderField.vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
  name: "InputText",
  props: {
    field: {
      type: Object,
      required: true,
    },
  },
  components: {
    compositeHeaderField,
    ckeditor: CKEditor.component,
  },
  data() {
    return {
      editor: ClassicEditor,
      editorData: "",
      editorConfig: {
        // The configuration of the editor.
      },
    };
  },
  mounted() {
    if (this.field.percent === undefined) {
      this.$set(this.field, "percent", 20);
    }
  },
  watch: {
    //
  },
  computed: {
    //
  },
  methods: {
    //,
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
