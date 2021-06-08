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
        <ckeditor
          :editor="editor"
          v-model="field.value"
          :config="editorConfig"
        ></ckeditor>
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
    compositeHeaderField,
    ckeditor: CKEditor.component,
  },
  data() {
    return {
      editor: ClassicEditor,
      editorData: "<p>Content of the editor.</p>",
      editorConfig: {
        // The configuration of the editor.
      },
    };
  },
  mounted() {
    //
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
