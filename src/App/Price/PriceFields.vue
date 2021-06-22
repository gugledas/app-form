<template lang="html">
  <div>
    <div v-if="field.prix">
      <!-- ! -->
      <b-form-group
        label="Action"
        label-for="input-lazy"
        label-size="sm"
        label-cols="4"
      >
        <b-form-select
          v-model="field.prix.action"
          :options="optionsAction"
          size="sm"
        ></b-form-select>
      </b-form-group>
      <!--  -->
      <b-form-group
        label="Coût"
        label-for="input-lazy"
        label-size="sm"
        label-cols="4"
        class="mb-3"
        v-if="!typeSelection"
      >
        <b-form-input
          required
          v-model="field.prix.cout"
          type="number"
        ></b-form-input>
      </b-form-group>
      <!-- ! -->
      <div
        v-if="
          field.prix.action === 'prix_utilisables' ||
          field.prix.action === 'aide_financiere'
        "
      >
        <div class="mb-3">
          <b-button variant="outline-primary" size="sm" @click="addCondition">
            + Ajouter une condition
          </b-button>
        </div>
        <div class="mb-3">
          <b-form-group
            label="Logique de calcul complexe"
            label-cols="6"
            label-cols-md="6"
            label-cols-sm="3"
          >
            <b-form-checkbox
              size="lg"
              v-model="field.prix.complex_logique"
            ></b-form-checkbox>
          </b-form-group>
        </div>
        <div class="mb-3">
          <!-- -->
          <b-form-group
            label="Logique complexe"
            label-size="sm"
            label-cols="4"
            v-if="field.prix.complex_logique"
          >
            <b-form-textarea
              v-model="field.prix.datas_logique"
              placeholder=""
              rows="10"
            ></b-form-textarea>
          </b-form-group>
        </div>
        <div
          v-for="(component, i) in field.prix.components"
          :key="i"
          class="border p-2 d-flex align-items-center w-100"
        >
          <div class="w-100">
            <!-- -->

            <!-- -->
            <b-form-group
              label="si l'etape "
              label-size="sm"
              label-cols="4"
              v-if="!field.prix.complex_logique"
            >
              <b-form-select
                v-model="component.state_name"
                :options="listeDesEtapes"
                size="sm"
              ></b-form-select>
            </b-form-group>
            <!-- -->
            <b-form-group
              label="si champs "
              label-size="sm"
              label-cols="4"
              v-if="component.state_name !== '' && !field.prix.complex_logique"
            >
              <b-form-select
                v-model="component.name"
                :options="listeDesChamps(component)"
                size="sm"
              ></b-form-select>
            </b-form-group>
          </div>
          <div class="svg-content px-2">
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
    </div>
  </div>
</template>

<script>
import Price from "../config/price.js";
import config from "../config/config.js";
import {
  validationRessource as Validation,
  ValidationInstance,
} from "../config/validation.js";
import { mapGetters } from "vuex";
export default {
  name: "PriceFields",
  props: {
    field: {
      type: Object,
      required: true,
    },
  },
  components: {
    //
  },
  data() {
    return {
      optionsAction: Price.optionsAction(),
    };
  },
  mounted() {
    this.addAttributPrix();
  },
  watch: {
    //
  },
  computed: {
    ...mapGetters(["formDatas", "form"]),
    listeDesEtapes() {
      const etapes = [];
      Validation.listesEtapes(this.form, this.formDatas, etapes);
      return etapes;
    },
    typeSelection() {
      if (config.typeSelection.includes(this.field.type)) {
        return true;
      }
      return false;
    },
  },
  methods: {
    /**
     * On ajoute l'attribut prix si cela n'est pas definit.
     */
    addAttributPrix() {
      if (this.field && !this.field.prix) {
        this.$set(this.field, "prix", Price.price());
      }
    },
    /**
     * On ajoute une condition de choix;
     */
    addCondition() {
      this.field.prix.components.push({
        state_name: "",
        name: "",
        value: "",
      });
    },
    /**
     * Liste des champs;
     */
    listeDesChamps(component) {
      const fields = [];
      const ValidationInst = new ValidationInstance();
      ValidationInst.listeDesChamps(component, this.form, fields);
      //component.options = ValidationInst.StepeValidationOptions;
      return fields;
    },
    deleteState(i) {
      this.field.prix.components.splice(i, 1);
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
