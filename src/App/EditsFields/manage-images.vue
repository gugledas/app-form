<template lang="html">
  <div>
    {{ img_url }}
    <div v-if="img_url_format" style="width: 100px">
      <img src="img_url_format" class="img-fluid" />
    </div>
    <UploadImages
      v-if="!img_url_format"
      @change="handleImages"
      :max="max"
      class="mb-3"
      uploadMsg="Selectionner l'image"
    />
  </div>
</template>

<script>
import { AjaxBasic } from "wbuutilities";
import UploadImages from "vue-upload-drop-images";
import config from "../config/config.js";
export default {
  name: "manage-images",
  props: {
    max: {
      type: Number,
      default: 10,
    },
    url: {
      type: String,
      default: "/filesmanager/post",
    },
    img_url: {
      type: String,
    },
  },
  components: {
    UploadImages,
  },
  data() {
    return {
      //
    };
  },
  mounted() {
    console.log("img_url : ", this.img_url);
  },
  watch: {
    //
  },
  computed: {
    img_url_format() {
      if (this.img_url && this.img_url !== undefined)
        return config.baseURl + this.img_url;
      return null;
    },
  },
  methods: {
    handleImages(files) {
      console.log("re", files);
      for (const i in files) {
        AjaxBasic.postFile(config.baseURl + this.url, files[i])
          .then((resolv) => {
            this.$emit("ev_manage_images_img", resolv);
          })
          .catch((error) => {
            console.log("Error : ", error);
          });
      }
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
