<template>
  <!-- -->
  <b-row>
    <b-col sm="12">
      <b-form-group
        label="Cacher le label"
        label-cols="6"
        label-cols-md="6"
        label-cols-sm="3"
      >
        <b-form-checkbox
          size="lg"
          v-model="field.label_hidden"
        ></b-form-checkbox>
      </b-form-group>
    </b-col>
    <b-col sm="12">
      <b-form-group
        label="Afficher le champs dans les resultats"
        label-cols="6"
        label-cols-md="6"
        label-cols-sm="3"
      >
        <b-form-checkbox
          size="lg"
          v-model="field.display_field"
        ></b-form-checkbox>
      </b-form-group>
    </b-col>
  </b-row>
</template>
<script>
export default {
  name: "compositeFooter",
  props: {
    field: {
      type: Object,
      required: true,
    },
  },
};
</script>
