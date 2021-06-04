<template>
  <div class="nav-line">
    <b-button
      v-for="(item, i) in idLevel"
      :key="i"
      v-b-tooltip.hover
      :title="'Etape ' + i"
      variant="info"
      class="nav-line__nav"
      @click="loadSteps(i)"
    ></b-button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {},
  components: {},
  data() {
    return {
      value: 1,
    };
  },
  watch: {},
  computed: {
    ...mapGetters(["form"]),
    idLevel() {
      var id = [];
      if (this.form.forms.length) {
        for (let i in this.form.forms) {
          id.push(i);
        }
      }
      return id;
    },
  },
  methods: {
    loadSteps(i) {
      this.$store.state.stepsIndex = i;
      console.log("object,", i);
    },
  },
};
</script>

<style lang="scss">
.nav-line {
  width: 100%;
  //height: 15px;
  display: flex;
  &__nav {
    display: block;
    font-size: 8px;
    height: 12px;
    padding: 0px 5px;
    color: white;
    width: 100%;
    border-left: 1px solid rgb(237, 237, 237);
    border-radius: 0;
  }
}
</style>
