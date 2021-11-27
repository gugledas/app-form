<template>
  <div>
    <b v-if="field.prix && parseFloat(field.prix.cout)">
      {{ field.prix.cout }} €
    </b>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  name: "radio",
  props: {
    field: {
      type: Object,
      required: true,
    },
  },
};
</script>
