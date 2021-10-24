<template>
  <div>
    <b-list-group class="list-small">
      <b-list-group-item
        v-for="(option, i) in field.options"
        :key="i"
        class="item-vertical"
      >
        <div class="d-flex">
          <span class="item">{{ option.text }}</span>
          <span class="item">{{ option.cout }} €</span>
        </div>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: "radio",
  props: {
    field: {
      type: Object,
      required: true,
    },
  },
};
</script>
