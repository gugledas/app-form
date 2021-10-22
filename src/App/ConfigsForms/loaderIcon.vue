<template>
  <div class="v-100 d-flex justify-content-center align-items-center">
    <transition name="fade" v-if="busy">
      <b-icon
        icon="three-dots"
        animation="cylon"
        font-scale="4"
        variant="info"
      ></b-icon>
    </transition>
  </div>
</template>
<script>
export default {
  props: {
    busy: {
      type: Boolean,
      required: true,
    },
  },
  name: "loaderIcon",
};
</script>
