<template>
  <div class="number-markup__img">
    <img :src="img_url_format" />
  </div>
</template>

<script>
import config from "../config/config.js";
export default {
  props: {
    field: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      text: 1,
    };
  },
  computed: {
    img_url_format() {
      if (this.field.imgUrl && this.field.imgUrl !== undefined)
        return config.baseURl + this.field.imgUrl;
      return null;
    },
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
