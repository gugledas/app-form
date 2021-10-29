<template>
  <div>
    <b-row class="p-2">
      <b-col sm="12">
        <compositeHeaderField :field="field"></compositeHeaderField>
      </b-col>
      <ManageOptionTable :field="field"></ManageOptionTable>
      <ConfigAvancer :field="field"></ConfigAvancer>
    </b-row>
  </div>
</template>

<script>
import compositeHeaderField from "../EditsFields/compositeHeaderField.vue";
import ConfigAvancer from "../EditsFields/configAvancer.vue";
import ManageOptionTable from "./ManageOptionTable.vue";
export default {
  props: {
    field: {
      type: Object,
      required: true,
      validator: function (val) {
        return val.label === undefined ||
          val.value === undefined ||
          val.name === undefined ||
          val.require === undefined
          ? false
          : true;
      },
    },
  },
  components: {
    ManageOptionTable,
    ConfigAvancer,
    compositeHeaderField,
  },
};
</script>
<style lang="scss"></style>
