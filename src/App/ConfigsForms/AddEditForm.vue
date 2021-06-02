<template lang="html">
  <div>
    <b-modal
      id="add-edit-form"
      ref="modal"
      title="Create your form page"
      @ok="handleOk"
      hide-footer
    >
      <h1>kksa8888</h1>
      <form ref="form" @submit="handleSubmit">
        <b-row>
          <b-col cols="8">
            <b-form-group label="name" label-for="name-input">
              <b-form-input v-model="form.name" required></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="8">
            <b-form-group label="Description" label-for="description-input">
              <b-form-textarea
                v-model="form.description"
                required
              ></b-form-textarea>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row align-h="end">
          <div class="mr-3">
            <b-button type="submit" variant="primary" class="mr-2"
              >Ajouter</b-button
            >
          </div>
        </b-row>
      </form>
    </b-modal>
  </div>
</template>

<script>
//
import config from "../config/config.js";
export default {
  name: "AddEditForm",
  props: {
    //
  },
  components: {
    //
  },
  data() {
    return {
      form: {
        forms: [],
        description: "",
        name: "",
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
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit(event) {
      event.preventDefault();
      config.prepareDatasToSave(this.form).then((val) => {
        config.saveForm(val).then(() => {
          this.$nextTick(() => {
            this.$bvModal.hide("add-edit-form");
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
