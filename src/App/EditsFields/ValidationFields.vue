<template lang="html">
  <div class="accordion" role="tablist">
    <!-- Field validation -->
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-1 variant="info">
          Configuration avancée
        </b-button>
      </b-card-header>
      <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-form-group
            label="Selectionner les elments de validation"
            v-slot="{ ariaDescribedby }"
          >
            <b-form-checkbox-group
              v-model="selected"
              :options="options"
              :aria-describedby="ariaDescribedby"
            ></b-form-checkbox-group>
          </b-form-group>
        </b-card-body>
      </b-collapse>
    </b-card>
    <!-- Field  -->
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-2 variant="info">
          Condition d'affichage
        </b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <div class="mb-3">
            <b-button variant="outline-primary" size="sm" @click="addCondition">
              + Ajouter une condition
            </b-button>
          </div>
          <div
            v-for="(condition, i) in field.states"
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
                  label="si le champs"
                  label-for="input-lazy"
                  label-size="sm"
                  label-cols="4"
                >
                  <b-form-select
                    v-model="condition.name"
                    :options="listeChamps"
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
                  label="Valeur"
                  label-for="input-lazy"
                  label-size="sm"
                  label-cols="4"
                  v-if="
                    condition.name !== '' &&
                    condition.operator === 'egal' &&
                    selectionType.includes(getTypeField(condition.name))
                  "
                >
                  <b-form-select
                    v-model="condition.value"
                    :options="listsOptionsCondition(condition)"
                    size="sm"
                  ></b-form-select>
                </b-form-group>
                <!-- -->
                <b-form-group
                  label="Valeur"
                  label-for="input-lazy"
                  label-size="sm"
                  label-cols="4"
                  v-if="
                    condition.name !== '' &&
                    (condition.operator === 'egal' ||
                      condition.operator === '>') &&
                    !selectionType.includes(getTypeField(condition.name))
                  "
                >
                  <b-form-input v-model="condition.value" required>
                  </b-form-input>
                </b-form-group>
                <!-- -->
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
    <!-- price -->
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-3 variant="info">
          Mecanisme de calcul du prix
        </b-button>
      </b-card-header>
      <b-collapse
        id="accordion-3"
        accordion="my-accordion"
        role="tabpanel"
        visible
      >
        <b-card-body>
          <PriceFields :field="field"></PriceFields>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>
<script>
import { validationRessource as Validation } from "../config/validation.js";
import PriceFields from "../Price/PriceFields.vue";
import { mapGetters } from "vuex";
import config from "../config/config.js";
export default {
  name: "ValidationFields",
  props: {
    field: {
      type: Object,
      required: true,
      validator: function (val) {
        return val.require !== undefined && val.states !== undefined
          ? true
          : false;
      },
    },
  },
  components: {
    PriceFields,
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
      optionsAction: Validation.Action(),
      selectionType: config.typeSelection,
    };
  },
  mounted() {
    this.retriveRules();
  },
  watch: {
    selected() {
      this.field.require = this.selected.join("|");
    },
  },
  computed: {
    ...mapGetters(["formDatas"]),
    listeChamps() {
      const typeValide = [
        "text",
        "number",
        "radio",
        "checkbox",
        "select",
        "increment",
        "checkboximg",
        "codepostal",
        "radiodesc",
      ];
      const fields = [];
      if (this.formDatas && this.formDatas.fields.length > 1) {
        for (const i in this.formDatas.fields) {
          const field = this.formDatas.fields[i];
          if (
            field.name !== this.field.name &&
            typeValide.includes(field.type)
          ) {
            fields.push({ text: field.label, value: field.name });
          }
        }
      }
      return fields;
    },
  },
  methods: {
    retriveRules() {
      if (this.field.require) this.selected = this.field.require.split("|");
    },
    addCondition() {
      this.field.states.push(Validation.conditions());
    },
    deleteState(i) {
      //console.log("i : ", i);
      this.field.states.splice(i, 1);
    },
    listsOptionsCondition(condition) {
      if (this.formDatas && this.formDatas.fields.length > 1) {
        for (const i in this.formDatas.fields) {
          const field = this.formDatas.fields[i];
          if (field.name === condition.name) {
            return field.options;
          }
        }
      } else {
        return [];
      }
    },
    /**
     * Retourne le type de champs.
     */
    getTypeField(name) {
      for (const i in this.formDatas.fields) {
        const field = this.formDatas.fields[i];
        if (field.name == name) {
          return field.type;
        }
      }
      return null;
    },
  },
};
</script>

<style lang="scss" scoped>
.content-action {
  width: calc(100% - 80px);
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
