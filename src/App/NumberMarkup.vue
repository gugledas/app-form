<template>
  <div>
    <div class="number-Markup">
      <div class="number-markup__img">
        <img :src="imgUrl" />
      </div>
      <label-row
        :type="type"
        :options="options"
        @label-up-value="labelUpValue"
      ></label-row>
    </div>
  </div>
</template>

<script>
import LabelRow from "./input/LabelRow.vue";
export default {
  components: { LabelRow },
  props: {
    imgUrl: {
      type: String,
      default:
        "https://prod-taro-front.lamaisonsaintgobain.fr/c57576e3ca88b4d321458b05c7c7371c.svg",
    },
    type: {
      type: String,
      default: "row",
    },
    unit: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  data() {
    return {
      text: 1,
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
.number-markup {
  &__img {
    margin: 10px 0 30px 0;
    width: 100%;

    img {
      width: 170px;
      height: 140px;
    }
  }
}
</style>
