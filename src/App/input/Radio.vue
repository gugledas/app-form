<template>
  <b-row>
    <b-col cols="12" class="text-left"
      ><p class="page-label">{{ formDatas.fields[id].label }}</p></b-col
    >
    <b-col cols="12" v-for="(item, i) in formDatas.fields[id].options" :key="i">
      <div class="input-list">
        <b-col sm="11" class="input-list__label">
          <label class="m-0">{{ item.label }}</label>
        </b-col>
        <b-col class="input-list__input">
          <b-form-radio
            name="some-radios"
            v-model="formDatas.fields[id].value"
            size="lg"
            :id="`input-radio-a${i}`"
            :value="item.value"
          ></b-form-radio>
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
