<template lang="html">
  <b-container class="bv-example-row p-5" fluid="lg">
    <div>
      <title-bar :id="id"></title-bar>
      <b-row align-h="center">
        <transition name="fade">
          <b-col class="" cols="12" lg="10" v-if="formDatas && formDatas.info">
            <pages :level="stepsIndex"></pages>
          </b-col>
        </transition>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import pages from "./FormStep.vue";
import TitleBar from "./components/TitleBar.vue";
export default {
  name: "userpage",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  components: {
    pages,
    TitleBar,
  },
  data() {
    return {
      //
    };
  },
  mounted() {
    this.$store.dispatch("setFormId", this.id);
  },
  watch: {
    //
  },
  computed: {
    ...mapState(["stepsIndex", "allStepsDatas", "fields", "price", "form"]),
    ...mapGetters(["formDatas", "uid"]),
  },
  methods: {
    returnHome() {
      this.$router.push({ path: `/` });
    },
  },
};
</script>

<style lang="scss" scoped>
.cursorHover {
  cursor: pointer;
}
</style>

<!--
 //nom du fichier en pascal.
 //<template>
 - le nom des attributs en kebab-case;
 - la valeur des attributs et des variables en camelCase;
 - function en PascalCase
 //props, data
 - variable en camelCase
 //methods
 - variable en PascalCase
-->
