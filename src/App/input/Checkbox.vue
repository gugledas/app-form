<template>
  <b-row>
    <b-col cols="12" class="text-left"
      ><p class="page-label">{{ field.label }}</p></b-col
    >
    <b-col cols="12" v-for="(item, i) in field.options" :key="i">
      <div class="input-list">
        <b-col
          sm="11"
          class="input-list__label d-flex align-items-start flex-column"
        >
          <label class="m-0 w-100" :for="`checkbox-a${field.name}${i}`">{{
            item.text
          }}</label>
        </b-col>
        <b-col class="input-list__input">
          <b-form-checkbox
            :id="`checkbox-a${field.name}${i}`"
            name="some-radios"
            v-model="field.value"
            size="lg"
            :value="item.value"
          ></b-form-checkbox>
        </b-col>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    field: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      value: 1,
    };
  },
  watch: {},
  computed: {
    ...mapGetters(["formDatas"]),
  },
  methods: {},
};
</script>

<style lang="scss"></style>
