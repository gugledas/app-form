<template>
  <div class="number-markup__img">
    <img :src="imgUrl" />
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: {
      type: String,
      default:
        "https://prod-taro-front.lamaisonsaintgobain.fr/c57576e3ca88b4d321458b05c7c7371c.svg",
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
    width: 100%;
    margin: 30px 0;
    img {
      width: 170px;
      height: 140px;
    }
  }
}
</style>
