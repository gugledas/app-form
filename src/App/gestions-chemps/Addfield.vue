<template>
  <b-modal
    size="lg"
    :id="'modal-addForm--' + idModal"
    title="Ajouter un champs dans le gestionnaire de champs"
    hide-footer
    @ok="handleOk"
    :content-class="['mange-add-field']"
  >
    <loaderIcon :busy="busy"></loaderIcon>
    <form
      ref="forme"
      @submit="handleSubmit"
      @reset="resetModal"
      @hidden="resetModal"
    >
      <b-row>
        <b-col cols="6">
          <b-form-group
            label="Sélectionner un model de base"
            label-for="type-input"
            invalid-feedback="type is required"
          >
            <b-form-select
              v-model="field.type"
              :options="typeOptions"
              id="type-input"
              required
            ></b-form-select>
          </b-form-group>
        </b-col>
        <b-col cols="6">
          <b-form-group
            label="Accosier à un formulaire"
            label-for="type-input"
            invalid-feedback="type is required"
            description="Cela permet de grouper ce champs avec le formulaire selectionné"
          >
            <b-form-select
              v-model="field.formid"
              :options="listForms"
              :disabled="defaultFormid !== '' ? true : false"
              id="type-input-2"
              required
            ></b-form-select>
          </b-form-group>
        </b-col>
      </b-row>
      <!-- !-->
      <input-option-form
        :type="field.type"
        :field="field"
        class="content-config-field"
      ></input-option-form>

      <b-row align-h="end">
        <div class="mt-3 mx-3">
          <b-button
            type="submit"
            variant="primary"
            class="mr-2"
            :disabled="field.name.length > 2 ? false : true"
          >
            {{ nameButtonOk }}
          </b-button>
        </div>
      </b-row>
    </form>
    <pre> field : {{ field }} </pre>
  </b-modal>
</template>

<script>
import { mapGetters } from "vuex";
import inputOptionForm from "../inputOptionForm.vue";
import loaderIcon from "../components/loaderIcon.vue";
import Utilities from "../Utilities.js";
import config from "../config/config";
export default {
  components: { inputOptionForm, loaderIcon },
  props: {
    field: {
      type: Object,
      required: true,
    },
    /**/
    genre: {
      type: String,
      default: "",
    },
    /**
     * liste de formulaire fournit.
     */
    listForms: {
      type: Array,
      required: true,
    },
    /**
     * Valeur du formulaire par defaut
     */
    defaultFormid: {
      type: String,
      default: null,
    },
    idModal: {
      type: [String, Number],
      required: true,
    },
  },
  data: () => {
    return {
      typeFieldSelected: null,
      type: null,
      //datas to check form validity
      labelState: null,
      typeOptions: Utilities.typeOptions(),
      busy: false,
    };
  },

  computed: {
    ...mapGetters(["formDatas", "uid"]),
    nameButtonOk() {
      return this.field.id ? "Mettre à jour" : "Ajouter";
    },
  },

  watch: {
    defaultFormid(val) {
      this.listForms.forEach((option) => {
        if (option.value === val) {
          this.field.formid = option.value;
        }
      });
    },
  },
  methods: {
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
      this.busy = true;
      event.preventDefault();
      config.prepareFieldToSave(this.field, this.uid).then((datas) => {
        config
          .saveForm(datas)
          .then((resp) => {
            console.log("resp : ", resp, " \n datas : ", datas);
            datas.forEach((tb) => {
              if (tb.table == "appformmanager_fields") {
                if (!tb.where) {
                  resp.data.forEach((r) => {
                    if (r.table == "appformmanager_fields") {
                      this.$store.state.StoreGestionChamps.fields.push({
                        ...this.field,
                        id: r.result,
                        stepes: [],
                      });
                    }
                  });
                }
              }
            });

            this.$bvModal.hide("modal-addForm--" + this.idModal);
            this.busy = false;
            this.$emit("set_default_field");
          })
          .catch(() => {
            this.busy = false;
          });
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
