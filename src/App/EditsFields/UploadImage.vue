<!--
https://bezkoder.com/vue-axios-file-upload/
-->
<template lang="html">
  <div>
    <FilePond
      name="file__upload"
      ref="pond"
      label-idle="Ajouter une image ici..."
      v-bind:allow-multiple="false"
      accepted-file-types="image/jpeg, image/png"
      :server="server"
      v-bind:files="myFiles"
      v-on:processfile="handleFileProcess"
      @updatefiles="updatefiles"
    ></FilePond>
    <ul class="m-0 p-2 bg-light m-2">
      <b-row align-h="center" align-v="center" class="row mb-3" v-if="hasImg">
        <b-col sm="10">
          <img :src="baseURl + field.img" width:="40px" height="40px" /></b-col
        >

        <b-col sm="2">
          <b-button size="sm" variant="outline-danger" @click="deleteFile">
            <b-icon icon="trash"></b-icon>
          </b-button>
        </b-col>
      </b-row>
    </ul>
  </div>
</template>

<script>
// Import image preview and file type validation plugins
import vueFilePond from "vue-filepond";
import "filepond/dist/filepond.min.css";
// Import image preview and file type validation plugins
//import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
//import FilePondPluginImagePreview from "filepond-plugin-image-preview";
// Import the plugin code
// import FilePondPluginFileEncode from "filepond-plugin-file-encode";
import config from "../config/config.js";

// Create component
const FilePond = vueFilePond();

export default {
  name: "files.vue",
  props: {
    field: {
      type: Object,
      require: true,
    },
  },
  components: {
    FilePond,
  },
  data() {
    return {
      myFiles: [],
      server: {
        url: config.baseURl + "/filesmanager/files",
        process: {
          onload: (res) => {
            // select the right value in the response here and return
            //console.log("onload : ", JSON.parse(res));
            this.addImages(JSON.parse(res));
            return res;
          },
        },
      },
    };
  },
  mounted() {
    //this.retriveFiles();
  },
  watch: {
    //
  },

  computed: {
    hasImg() {
      if (this.field.img) {
        if (this.field.img.length > 4) return true;
      }
      return false;
    },
    baseURl() {
      return config.baseURl;
    },
    myFilesPreview() {
      const myFilesPreview = [];
      if (this.field.img && this.field.img.length) {
        for (const f in this.field.img) {
          const file = this.field.img[f];
          myFilesPreview.push({
            source: config.baseURl + file.url,
            options: { type: "local" },
            filename: file.filename,
          });
        }
      } else {
        this.setEmptyValue();
      }
      return myFilesPreview;
    },
  },
  methods: {
    addImages(response) {
      console.log("ime", response);
      this.field.img = response.url;
    },
    retriveFiles() {
      this.myFilesPreview = [];
      if (this.field.img && this.field.img.length) {
        for (const f in this.field.img) {
          const file = this.field.img[f];
          this.myFilesPreview.push({
            source: config.baseURl + file.url,
            options: { type: "local" },
            filename: file.filename,
          });
        }
      } else {
        this.field.img = [];
      }
    },
    setEmptyValue() {
      this.field.img = "";
    },
    handleFilePondInit: function () {
      console.log("FilePond has initialized");
      // FilePond instance methods are available on `this.$refs.pond`
    },
    deleteFile() {
      this.field.img = "";
    },
    progressfiles(data) {
      console.log("progressfiles : ", data);
    },
    handleFileProcess(error, file) {
      console.log("handleFileProcess ", error, file);
    },
    handleFilesProcess(data) {
      console.log("handleFilesProcess ", data);
    },
    updatefiles(data) {
      console.log("updatefiles ", data);
    },
    load(data) {
      console.log("load ", data);
    },
    processfileprogress(file) {
      console.log("processfileprogress ", file);
    },
  },
};
</script>

<style lang="scss">
.filepond--root {
  .filepond--credits {
    display: none !important;
    visibility: hidden !important;
    height: 0 !important;
    width: 0 !important;
    position: absolute !important;
    z-index: -100 !important;
  }
}
</style>

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
