<template>
  <b-row>
    <b-col cols="12" class="text-left"
      ><p class="page-label">{{ formDatas.fields[id].label }}</p></b-col
    >
    <b-col cols="12" v-for="(item, i) in formDatas.fields[id].options" :key="i">
      <div class="input-list">
        <b-col
          sm="11"
          class="input-list__label d-flex align-items-start flex-column"
        >
          <label class="m-0">{{ item.text }}</label>
        </b-col>
        <b-col class="input-list__input">
          <b-form-checkbox
            name="some-radios"
            v-model="formDatas.fields[id].value"
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
    id: {
      type: Number,
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
