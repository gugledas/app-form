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
              v-model="fields.type"
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
          <b-form-group>
            <b-form-checkbox switch size="lg" v-model="dynamicfield">
              Champs dynamique
            </b-form-checkbox>
          </b-form-group>
          <b-form-group
            label="Sélectionner un sous group"
            invalid-feedback="type is required"
            label-cols-md="6"
            v-if="dynamicfield"
          >
            <b-form-select
              v-model="fields.type"
              :options="typeOptions"
              required
            ></b-form-select>
          </b-form-group>
        </b-col>
      </b-row>
      <!-- !-->
      <div class="content-config-field">
        <input-option-form
          v-if="!dynamicfield"
          :type="fields.type"
          :fields="fields"
        ></input-option-form>
        <div v-if="dynamicfield">
          <hr />
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
    <pre> formId {{ formId }} </pre>
  </b-modal>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import inputOptionForm from "./inputOptionForm.vue";
import Utilities from "./Utilities.js";
import config from "./config/config";
export default {
  components: { inputOptionForm },
  props: {
    nouveau: {
      type: Boolean,
      require: true,
      default: true,
    },
    fields: {
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
      typeOptions: [],
      dynamicfield: true,
      typeFormId: "",
    };
  },
  mounted() {
    this.typeFormId = this.formId;
    console.log(" Chargement de modal AddFormField : ", this.idModal);
    this.$root.$on("bv::modal::show", (bvEvent, modalId) => {
      console.log(
        " Modal is about to be shown",
        bvEvent,
        "\n id modal : ",
        modalId
      );
    });
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
  },
  methods: {
    optionAddToFields() {
      //this.$store.dispatch("addFields", this.fields);
      class proto {
        constructor(hauteur) {
          this.hauteur = hauteur;
        }
      }
      const protoD = new proto(this.fields);
      var sh = {};
      for (let i in protoD.hauteur) {
        sh[i] = protoD.hauteur[i];
      }
      this.formDatas.fields.push(sh);
      Utilities.resetField(this.fields);
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
      this.$emit("input_to_add", this.fields);
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
      console.log("loadDynamicFields");
      var data = " select * from appformmanager_fields ";
      if (this.typeFormId) {
        data += " where formid='" + this.typeFormId + "'";
      }
      config.getData(data).then((resp) => {
        var results = [];
        resp.data.forEach((item) => {
          var jsonfield = JSON.parse(item.jsonfield);
          results.push({ value: item.machine_name, text: jsonfield.label });
        });
        this.typeOptions = results;
      });
    },
  },
};
</script>
<style lang="scss">
.mange-add-field {
  .content-config-field {
    min-height: 300px;
  }
}
</style>
