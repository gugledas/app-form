<template lang="html">
  <div>
    <b-modal
      id="clone-current-stepe"
      ref="modal"
      title="Re-ordonner les etapes | cloner"
      hide-footer
      size="lg"
    >
    <form
      ref="forme"
      @submit="handleSubmit"
      @reset="resetModal"
      @hidden="resetModal"
      v-if="watchFormDatas"
    >
      <b-form-group label="Titre" invalid-feedback="Name is required">
        <b-input-group>
          <b-form-input
            v-model="formDatas.info.title"
            @input="input"
            required
          ></b-form-input>
          <b-form-input
            required
            v-model="formDatas.info.name"
            :readonly="readonly"
            @dblclick="toogleReadOnly"
            :state="state_name"
          ></b-form-input>
        </b-input-group>
      </b-form-group>
      <b-form-group
        label="Titre texte d'aide"
        invalid-feedback="the header title is required"
      >
        <b-form-input v-model="formDatas.info.headerTitle"></b-form-input>
      </b-form-group>
      <b-form-group
        label="Texte d'aide"
        invalid-feedback="the header title is required"
      >
        <b-form-input v-model="formDatas.info.description"></b-form-input>
      </b-form-group>
      <ValidationEtapes :currentFormDatas="formDatas"></ValidationEtapes>
      <hr />
      <b-row align-h="end">
        <div class="mr-3">
          <b-button type="submit" variant="outline-info" size="sm">
            <b-icon icon="plus"></b-icon> Mettre à jour
          </b-button>
        </div>
      </b-row>
    </form>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Utilities from "../Utilities.js";
export default {
  name: "reOrderStepes",
  props: {
    //
  },
  components: {
    //
  },
  data() {
    return {
      CurrentForm:{},
    };
  },
  mounted() {
    //
  },
  watch: {
    //
  },
  computed: {
    ...mapGetters(["form", "formDatas"]),
    watchFormDatas(){
      if(this.formDatas.fields){
        this.getCurrentForm(JSON.stringify(this.formDatas));
        return this.formDatas.fields.length;
      }
      return null;
    }
  },
  methods: {
    moveToDown(i) {
      const idN = i + 1;
      Utilities.array_move(this.form.forms, i, idN);
    },
    modeToUp(i) {
      const idP = i - 1;
      Utilities.array_move(this.form.forms, i, idP);
    },
    getNameStep(stape_name) {
      for (const i in this.form.forms) {
        if (this.form.forms[i].info.name === stape_name)
          return this.form.forms[i].info.title;
      }
    },
    getCurrentForm(currentForm){
      this.CurrentForm= JSON.parse(currentForm);
    }
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
