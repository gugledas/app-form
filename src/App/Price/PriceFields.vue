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
      >
        <b-form-input
          required
          v-model="field.prix.cout"
          type="number"
        ></b-form-input>
      </b-form-group>
      <!-- ! -->
      <div class="border p-2">
        <div class="mb-3">
          <b-button variant="outline-primary" size="sm" @click="addCondition">
            + Ajouter une condition
          </b-button>
        </div>
        <b-form-group
          v-for="(component, i) in field.prix.components"
          :key="i"
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
      </div>
    </div>
  </div>
</template>

<script>
import Price from "../config/price.js";
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
    //
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
     * on ajoute une condition de choix;
     */
    addCondition() {
      //  this.field.prix.components.push({});
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
