<template>
  <b-list-group class="list-small">
    <b-list-group-item
      v-for="(stepe, i) in stepes"
      :key="i"
      class="item-vertical"
    >
      <div class="d-flex">
        <span class="item" v-if="stepe.step">
          {{ stepe.step.title }}
        </span>
        <span class="item">{{ stepe.stepid }}</span>
      </div>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
export default {
  name: "stepesInfos",
  props: {
    stepes: {
      type: Array,
    },
  },
};
</script>
