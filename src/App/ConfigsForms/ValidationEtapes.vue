<template lang="html">
  <div class="accordion" role="tablist">
    <!-- -->
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-2 variant="info">
          Condition d'affichage
        </b-button>
      </b-card-header>
      <b-collapse
        id="accordion-2"
        accordion="my-accordion"
        role="tabpanel"
        visible
      >
        <b-card-body>
          <div class="mb-3">
            <b-button variant="outline-primary" size="sm" @click="addCondition">
              + Ajouter une condition
            </b-button>
          </div>
          <div
            v-for="(condition, i) in formDatas.states"
            :key="i"
            class="border pt-3 pl-0 pr-0 mb-3 bg-light"
          >
            <div class="d-flex w-100 align-items-center">
              <div class="svg-content px-2">
                <b-button variant="transparent" class="m-0 p-0">
                  <b-icon icon="arrows-move"></b-icon>
                </b-button>
              </div>
              <div class="content-action">
                <b-form-group
                  label="Action"
                  label-for="input-lazy"
                  label-size="sm"
                  label-cols="4"
                >
                  <b-form-select
                    v-model="condition.action"
                    :options="optionsAction"
                    size="sm"
                  ></b-form-select>
                </b-form-group>
                <!-- -->
                <b-form-group
                  label="si l'etape "
                  label-for="input-lazy"
                  label-size="sm"
                  label-cols="4"
                >
                  <b-form-select
                    v-model="condition.state_name"
                    :options="listeDesEtapes"
                    size="sm"
                  ></b-form-select>
                </b-form-group>
                <!-- -->
                <b-form-group
                  label="si le champs "
                  label-for="input-lazy"
                  label-size="sm"
                  label-cols="4"
                >
                  <b-form-select
                    v-model="condition.name"
                    :options="listeDesChamps(condition)"
                    size="sm"
                  ></b-form-select>
                </b-form-group>
                <!-- -->
                <b-form-group
                  label="est"
                  label-for="input-lazy"
                  label-size="sm"
                  label-cols="4"
                >
                  <b-form-select
                    v-model="condition.operator"
                    :options="listsOperators"
                    size="sm"
                  ></b-form-select>
                </b-form-group>
                <!-- -->
                <b-form-group
                  label="valeur"
                  label-for="input-lazy"
                  label-size="sm"
                  label-cols="4"
                  v-if="
                    condition.operator == 'egal' &&
                    (!condition.options || condition.options.length === 0)
                  "
                >
                  <b-form-input
                    required
                    v-model="condition.value"
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  label="valeur"
                  label-for="input-lazy"
                  label-size="sm"
                  label-cols="4"
                  v-if="
                    condition.operator == 'egal' &&
                    condition.options &&
                    condition.options.length > 0
                  "
                >
                  <b-form-select
                    v-model="condition.value"
                    :options="condition.options"
                    size="sm"
                  ></b-form-select>
                </b-form-group>
              </div>
              <div class="svg-content">
                <b-button
                  variant="transparent"
                  class="m-0 p-0"
                  @click="deleteState(i)"
                >
                  <b-icon icon="trash" class="px-2" variant="danger"></b-icon>
                </b-button>
              </div>
            </div>
          </div>
        </b-card-body>
      </b-collapse>
    </b-card>
    <pre>
      {{ formDatas.states }}
    </pre>
  </div>
</template>
<script>
import { validationRessource as Validation } from "../config/validation.js";
import { mapGetters } from "vuex";
export default {
  name: "ValidationFields",
  props: {
    //
  },
  components: {
    //
  },
  data() {
    return {
      options: [
        {
          text: "Le champs est requis",
          value: "required",
        },
        {
          text: "Le champ ne peut contenir que des caractères alphabétiques.",
          value: "alpha",
        },
        {
          text: "Le champ doit être un email valide.",
          value: "email",
        },
        {
          text: "Le champ doit être une valeur numerique",
          value: "numeric",
        },
      ],
      selected: [],
      listsOperators: Validation.listsOperators(),
      optionsAction: Validation.Action("Cette etape"),
      form_validation_options: [],
    };
  },
  mounted() {
    //
  },
  watch: {
    selected() {
      this.formDatas.require = this.selected.join("|");
    },
  },
  computed: {
    ...mapGetters(["formDatas", "form"]),
    listeDesEtapes() {
      const etapes = [];

      Validation.listesEtapes(this.form, this.formDatas, etapes);
      return etapes;
    },
  },
  methods: {
    addCondition() {
      if (!this.formDatas.states) {
        //this.formDatas.states = []
        this.$set(this.formDatas, "states", []);
      }
      this.formDatas.states.push(Validation.conditions());
    },
    deleteState(i) {
      //console.log("i : ", i);
      this.formDatas.states.splice(i, 1);
    },
    listeDesChamps(condition) {
      const fields = [];
      if (condition.state_name && condition.state_name !== "") {
        var form = Validation.getFormStateByName(
          condition.state_name,
          this.form.forms
        );
        if (form !== undefined) {
          //console.log("form , ", form);
          for (const i in form.fields) {
            const field = form.fields[i];
            if (condition.name == field.name && field.options.length) {
              //this.put_form_validation_options(field.options);
              condition.options = field.options;
            }
            fields.push({ text: field.label, value: field.name });
          }
        }
      }
      return fields;
    },
    put_form_validation_options(options) {
      this.form_validation_options = options;
    },
  },
};
</script>

<style lang="scss" scoped>
.content-action {
  width: calc(100% - 80px);
}
.svg-content {
  svg {
    min-width: 40px;
    font-size: 1rem !important;
  }
}
</style>

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
