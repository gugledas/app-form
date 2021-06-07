<template lang="html">
  <b-modal
    size="lg"
    :id="idModal"
    title="Configuration de l'etape"
    hide-footer
    v-model="isOpen"
    @ok="handleOk"
  >
    <form
      ref="forme"
      @submit="handleSubmit"
      @reset="resetModal"
      @hidden="resetModal"
    >
      <b-form-group
        label="Header title"
        label-for="header-title-input"
        invalid-feedback="the header title is required"
      >
        <b-form-input
          id="header-title-input"
          v-model="formDatas.info.headerTitle"
          required
        ></b-form-input>
      </b-form-group>

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
      <ValidationFields :currentFormDatas="formDatas"></ValidationFields>
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
</template>

<script>
import { mapGetters, mapState } from "vuex";
import { snakeCase } from "snake-case";
import ValidationFields from "./ValidationEtapes.vue";
export default {
  name: "StepConfiguration",
  props: {
    idModal: {
      type: String,
      default: "step-configuration",
    },
  },
  components: {
    ValidationFields,
  },
  data() {
    return {
      isOpen: false,
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
    ...mapState(["mode"]),
    ...mapGetters(["formDatas", "form"]),
    ListNameforms() {
      const lists = [];
      for (const i in this.form.forms) {
        lists.push(this.form.forms[i].info.name);
      }
      return lists;
    },
  },
  methods: {
    openPopUp() {
      this.isOpen = !this.isOpen;
    },
    handleOk(event) {
      // Prevent modal from closing
      event.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit(event) {
      event.preventDefault();

      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide(this.idModal);
      });
    },
    resetModal() {
      //this.type = null;
    },
    input() {
      if (this.readonly && this.formDatas.info.name.length <= 32) {
        const valName = snakeCase(this.formDatas.info.title);
        if (this.ListNameforms.includes(valName)) {
          this.state_name = false;
        } else {
          this.state_name = true;
        }
        this.formDatas.info.name = valName;
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
