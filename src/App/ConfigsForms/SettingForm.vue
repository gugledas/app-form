<template lang="html">
  <div>
    <b-modal
      id="setting-form"
      ref="modal"
      title="Configuration de la page"
      @ok="handleOk"
      hide-footer
    >
      <form ref="form" @submit="handleSubmit" class="p-3">
        <b-row class="shadow-sm">
          <b-col cols="8">
            <b-form-group label="Titre de la page" label-for="name-input">
              <b-form-input v-model="pageInfo.title" required></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="10">
            <b-form-group label="Description" label-for="description-input">
              <b-form-textarea
                v-model="pageInfo.description"
                rows="4"
                required
              ></b-form-textarea>
            </b-form-group>
          </b-col>
          <b-col cols="12">
            <b-form-group label="vidéo " label-for="description-input">
              <b-form-input v-model="pageInfo.video" required></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row align-h="end">
          <div class="mr-3">
            <b-button type="submit" variant="primary" class="mr-2">
              Ajouter
            </b-button>
          </div>
        </b-row>
      </form>
    </b-modal>
  </div>
</template>

<script>
import { mapState } from "vuex";
//

import config from "../config/config.js";
export default {
  name: "AddEditForm",
  props: {
    //
  },
  components: {},
  data() {
    return {
      form: {
        forms: [],
        description: "",
        name: "",
        img: "",
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
    ...mapState(["pageInfo"]),
  },
  methods: {
    loadPageInfo() {
      this.$store.dispatch("loadPageInfo");
    },
    ev_manage_images_img(data, form) {
      console.log("file", data);
      if (data.url) {
        form.img = data.url;
      }
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit(event) {
      var datas = { name: "pageInfo", value: this.pageInfo };
      event.preventDefault();
      config.prepareSettingForm(datas).then((val) => {
        config.saveForm(val).then(() => {
          this.$nextTick(() => {
            this.$bvModal.hide("setting-form");
            this.loadPageInfo();
          });
        });
      });
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
