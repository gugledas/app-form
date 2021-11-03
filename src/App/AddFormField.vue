<template>
  <b-modal
    size="lg"
    :id="'modal-addForm--' + idModal"
    ref="addForm"
    title="Ajouter un champs dans cette etape"
    hide-footer
    v-model="isOpen"
    @ok="handleOk"
    :content-class="['mange-add-field']"
  >
    <form
      ref="forme"
      @submit="handleSubmit"
      @reset="resetModal"
      @hidden="resetModal"
    >
      <b-row class="">
        <b-col md="6">
          <b-form-group
            label="Sélectionner un type de champs"
            invalid-feedback="type is required"
            v-if="!dynamicfield"
          >
            <b-form-select
              v-model="field.type"
              :options="typeOptions"
              required
            ></b-form-select>
          </b-form-group>
          <b-form-group
            label="Formulaire"
            invalid-feedback="type is required"
            v-if="dynamicfield"
          >
            <b-form-select
              v-model="typeFormId"
              :options="formItems"
              required
            ></b-form-select>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group :isOverride="isOverride">
            <b-form-checkbox switch size="lg" v-model="dynamicfield">
              Champs dynamique
            </b-form-checkbox>
          </b-form-group>
        </b-col>
      </b-row>
      <!-- !-->
      <div class="content-config-field">
        <input-option-form
          v-if="!dynamicfield"
          :type="field.type"
          :field="field"
        ></input-option-form>
        <div v-if="dynamicfield">
          <hr />
          <b-form-group
            label="Sélectionner le champs dynamique"
            invalid-feedback="type is required"
          >
            <b-form-select
              v-model="field.name"
              :options="OptionDynamicsField"
              @change="selectDynamicLabel"
            ></b-form-select>
          </b-form-group>
          <compositeHeaderField :field="field"></compositeHeaderField>
        </div>
      </div>

      <b-row align-h="end">
        <div class="mr-3">
          <b-button type="submit" variant="primary" class="mr-2">
            {{ nameButtonOk }}
          </b-button>
        </div>
      </b-row>
    </form>
  </b-modal>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import inputOptionForm from "./inputOptionForm.vue";
import compositeHeaderField from "./EditsFields/compositeHeaderField.vue";
import Utilities from "./Utilities.js";
import config from "./config/config";
export default {
  components: { inputOptionForm, compositeHeaderField },
  props: {
    nouveau: {
      type: Boolean,
      require: true,
      default: true,
    },
    field: {
      type: Object,
      default: function () {
        return Utilities.field();
      },
    },
    /**/
    genre: {
      type: String,
      default: "",
    },
    idModal: {
      type: [String, Number],
      required: true,
    },
  },
  data: () => {
    return {
      isOpen: false,
      typeFieldSelected: null,
      type: null,
      //datas to check form validity
      labelState: null,
      typeOptions: Utilities.typeOptions(),
      OptionDynamicsField: [],
      dynamicfield: false,
      typeFormId: "",
      DynamicFields: [],
    };
  },
  watch: {
    dynamicfield() {
      this.watchDynamicFields();
    },
    typeFormId() {
      this.loadDynamicFields();
    },
  },
  computed: {
    ...mapGetters(["formDatas"]),
    ...mapState(["items", "formId"]),
    nameButtonOk() {
      return this.nouveau ? "Ajouter" : "Mettre à jour";
    },
    formItems() {
      var r = [];
      this.items.forEach((item) => {
        r.push({ text: item.name, value: item.id });
      });
      return r;
    },
    isOverride() {
      this.init();
      if (this.field.override) {
        return true;
      }
      return false;
    },
  },
  methods: {
    init() {
      this.typeFormId = this.formId;
      if (this.field.override) {
        this.dynamicfield = true;
      }
    },
    optionAddToFields() {
      class proto {
        constructor(hauteur) {
          this.hauteur = hauteur;
        }
      }
      const protoD = new proto(this.field);
      var sh = {};
      for (let i in protoD.hauteur) {
        sh[i] = protoD.hauteur[i];
      }
      this.formDatas.fields.push(sh);
      Utilities.resetField(this.field);
    },
    resetModal() {
      this.type = null;
    },
    handleOk(event) {
      // Prevent modal from closing
      event.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit(event) {
      event.preventDefault();
      this.isOpen = !this.isOpen;
      if (this.nouveau) {
        this.optionAddToFields();
      }
      // Push the name to submitted names
      this.$emit("input_to_add", this.field);
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    },
    /**
     * Charge les options en function du choix de l'utilisateur.
     */
    watchDynamicFields() {
      if (this.dynamicfield) {
        this.loadDynamicFields();
      } else this.typeOptions = Utilities.typeOptions();
    },
    loadDynamicFields() {
      var data = " select * from appformmanager_fields ";
      if (this.typeFormId) {
        data += " where formid='" + this.typeFormId + "'";
      }
      config.getData(data).then((resp) => {
        var results = [];
        this.DynamicFields = [];
        resp.data.forEach((item) => {
          var jsonfield = JSON.parse(item.jsonfield);
          this.DynamicFields.push(jsonfield);
          results.push({ value: item.machine_name, text: jsonfield.label });
        });
        this.OptionDynamicsField = results;
      });
    },
    selectDynamicLabel(val) {
      // this.OptionDynamicsField.forEach((option) => {
      //   if (option.value == val) this.field.label = option.text;
      // });
      //on selectionne le champs et on demande sa MAJ.
      for (const i in this.DynamicFields) {
        const f = this.DynamicFields[i];
        if (f.name == val) {
          this.$emit("update_current_field", JSON.stringify(f));
          break;
        }
      }
    },
  },
};
</script>
<style lang="scss">
.mange-add-field {
  .content-config-field {
    min-height: 150px;
    margin-bottom: 3rem;
  }
}
</style>
