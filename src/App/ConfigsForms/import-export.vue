<template lang="html">
  <div>
    <b-modal
      id="export-import-stepe"
      ref="modal"
      title="Exporter ou importer"
      hide-footer
      size="lg"
    >
      <form
        ref="forme"
        @submit="handleSubmit"
        v-if="watchFormDatas && CurrentForm.info"
      >
        <b-form-group
          label="Contenu de l'etape"
          description="Le contenu par defaut est celui de l'etape encours,(exportation), vous pouvez le remplacer par un autre contenu et importer"
        >
          <b-form-textarea
            required
            v-model="formStep"
            size="sm"
          ></b-form-textarea>
        </b-form-group>
        <hr />
        <b-row align-h="end">
          <div class="mr-3">
            <b-button type="submit" variant="outline-info" size="sm">
              <b-icon icon="plus"></b-icon> Importer
            </b-button>
          </div>
        </b-row>
      </form>
      <div class="accordion" role="tablist">
        <!-- -->
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-import-export variant="info">
              Condition d'affichage
            </b-button>
          </b-card-header>
          <b-collapse id="accordion-import-export" role="tabpanel" visible>
            <b-card-body>
              <div class="p-2">{{ JSON.stringify(formDatas) }}</div>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import { snakeCase } from "snake-case";

export default {
  name: "reOrderStepes",

  data() {
    return {
      CurrentForm: {},
      readonly: true,
      state_name: true,
      formStep: "",
    };
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
      const newStep = JSON.parse(this.formStep);
      this.form.forms.push(newStep);
      this.$bvModal.hide("export-import-stepe");
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
