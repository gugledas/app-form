<template>
  <b-col cols="12" class="text-left">
    <h3 class="question-title">{{ field.label }}</h3>
  </b-col>
</template>

<script>
export default {
  props: {
    field: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      text: "Quelles sont les caractéristiques de votre logement ?",
    };
  },
  methods: {
    labelUpValue(datas) {
      this.$emit("label-up-value", datas);
    },
  },
};
</script>

<style lang="scss">
.question-title {
  text-align: left;
  font-size: 1.38em;
  color: #000000;
  line-height: 1.2;
  margin: 15px 0;
}
</style>
