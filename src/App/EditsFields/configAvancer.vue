<template>
  <b-col cols="12">
    <b-card no-body class="mb-1" v-if="true">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle="'accordion-' + field.name" variant="info">
          Configuration avancée
        </b-button>
      </b-card-header>

      <b-collapse
        :id="'accordion-' + field.name"
        accordion="my-accordion"
        role="tabpanel"
      >
        <b-card-body>
          <!-- Valeur par defaut -->
          <b-form-group label="Selectionner une valeur par defaut">
            <b-form-select
              v-model="field.value"
              :options="field.options"
            ></b-form-select>
          </b-form-group>
          <compositeFooter :field="field"></compositeFooter>
        </b-card-body>
      </b-collapse>
    </b-card>
    <ValidationFields :field="field"></ValidationFields>
  </b-col>
</template>

<script>
import compositeFooter from "./compositeFooter.vue";
import ValidationFields from "../EditsFields/ValidationFields";
export default {
  name: "configAvancer",
  props: {
    field: {
      type: Object,
      required: true,
    },
  },
  components: {
    ValidationFields,
    compositeFooter,
  },
};
</script>
