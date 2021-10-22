<template lang="html">
  <div>
    <b-modal
      id="clone-current-stepe"
      ref="modal"
      title="Cloner"
      hide-footer
      size="lg"
    >
      <form
        ref="forme"
        @submit="handleSubmit"
        v-if="watchFormDatas && CurrentForm.info"
      >
        <b-form-group label="Titre" invalid-feedback="Name is required">
          <b-input-group>
            <b-form-input
              v-model="CurrentForm.info.title"
              @input="input"
              required
            ></b-form-input>
            <b-form-input
              required
              v-model="CurrentForm.info.name"
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
          <b-form-input v-model="CurrentForm.info.headerTitle"></b-form-input>
        </b-form-group>
        <b-form-group
          label="Texte d'aide"
          invalid-feedback="the header title is required"
        >
          <b-form-input v-model="CurrentForm.info.description"></b-form-input>
        </b-form-group>
        <ValidationEtapes :currentFormDatas="CurrentForm"></ValidationEtapes>
        <hr />
        <b-row align-h="end">
          <div class="mr-3">
            <b-button type="submit" variant="outline-info" size="sm">
              <b-icon icon="plus"></b-icon> Cloner
            </b-button>
          </div>
        </b-row>
      </form>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import { snakeCase } from "snake-case";
import ValidationEtapes from "./ValidationEtapes.vue";
export default {
  name: "reOrderStepes",
  props: {
    //
  },
  components: {
    ValidationEtapes,
  },
  data() {
    return {
      CurrentForm: {},
      readonly: true,
      state_name: true,
    };
  },
  mounted() {
    //
  },
  watch: {
    //
  },
  computed: {
    ...mapState(["form"]),
    ...mapGetters(["formDatas"]),
    watchFormDatas() {
      if (this.formDatas.fields) {
        this.getCurrentForm(JSON.stringify(this.formDatas));
        return this.formDatas.fields.length;
      }
      return null;
    },
    ListNameforms() {
      const lists = [];
      for (const i in this.form.forms) {
        lists.push(this.form.forms[i].info.name);
      }
      return lists;
    },
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
      this.form.forms.push(this.CurrentForm);
      this.$bvModal.hide("clone-current-stepe");
    },
    input() {
      if (
        this.readonly &&
        (this.CurrentForm.info.name.length <= 32 ||
          this.CurrentForm.info.title.length <= 32)
      ) {
        const valName = snakeCase(this.CurrentForm.info.title);
        if (this.ListNameforms.includes(valName)) {
          this.state_name = false;
        } else {
          this.state_name = true;
        }
        this.CurrentForm.info.name = valName;
      }
    },
    toogleReadOnly() {
      if (this.readonly) this.readonly = false;
      else this.readonly = true;
    },
    getCurrentForm(currentForm) {
      this.CurrentForm = JSON.parse(currentForm);
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
