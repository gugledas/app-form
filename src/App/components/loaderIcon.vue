<template>
  <div class="v-100 d-flex justify-content-center align-items-center">
    <transition name="fade" v-if="busy">
      <div class="p-4 d-flex align-items-center">
        <b-icon
          icon="three-dots"
          animation="cylon"
          font-scale="3"
          variant="info"
        ></b-icon>
        <div class="text-info pl-4">
          <i> <small>Chargement ...</small> </i>
        </div>
      </div>
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
