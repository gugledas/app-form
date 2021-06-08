<template lang="html">
  <b-container class="bv-example-row bg-light p-5" fluid="lg">
    <div>
      <b-row align-h="center">
        <transition name="fade">
          <b-col class="" cols="12" lg="9" v-if="formDatas && formDatas.info">
            <pages :level="stepsIndex"></pages>
          </b-col>
        </transition>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import pages from "./pages.vue";
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
    ...mapState(["stepsIndex", "allStepsDatas", "fields", "price"]),
    ...mapGetters(["form", "formDatas"]),
  },
  methods: {
    //
  },
};
</script>

<style lang="scss" scoped></style>

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
