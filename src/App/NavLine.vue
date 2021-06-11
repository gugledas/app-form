<template>
  <div class="nav-line">
    <div v-for="(item, i) in idLevel" :key="i" class="w-100">
      <b-button
        :title="'Etape ' + i"
        variant="info"
        class="nav-line__nav"
        :id="'tooltip-1' + i"
        :class="i == stepsIndex ? 'nav-line__nav--dark' : ''"
        @click="loadSteps(i)"
      >
      </b-button
      ><b-tooltip :target="'tooltip-1' + i" triggers="hover" variant="info">
        <b>etape {{ i }}</b> <br />
        <div>{{ form.forms[i].info.title }}</div>
      </b-tooltip>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  props: { taille: { require: true } },
  components: {},
  data() {
    return {
      value: 1,
    };
  },
  watch: {
    taille() {},
  },
  mounted() {
    var step = localStorage.getItem("step");
    var id = localStorage.getItem("id");

    if (id !== null && step.length && id == this.taille) {
      this.$store.state.stepsIndex = Number(step);
    } else {
      this.$store.state.stepsIndex = 0;
    }
  },
  computed: {
    ...mapState(["stepsIndex"]),
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

      localStorage.setItem("step", i);
      localStorage.setItem("id", this.taille);
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
    &--dark {
      background: teal !important;
    }
  }
}
</style>
