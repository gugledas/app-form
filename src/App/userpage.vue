<template lang="html">
  <b-container class="bv-example-row p-5" fluid="lg">
    <div>
      <title-bar :id="id"></title-bar>
      <loaderIcon :busy="isComplete"></loaderIcon>
      <b-row align-h="center">
        <transition name="fade">
          <b-col class="" cols="12" lg="12" v-if="formDatas && formDatas.info">
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
    /**
     * Cette function charge progressivement les données.
     */
    this.$store.dispatch("loadStepsDatas", { formId: this.id }).then(() => {
      this.busy = false;
    });
  },
  watch: {
    //
  },
  computed: {
    ...mapState(["stepsIndex", "allStepsDatas", "fields", "price", "form"]),
    ...mapGetters(["formDatas", "uid"]),
    /**
     * La fonction qui charge les données(loadStepsDatas) le fait de maniere progressive, ainsi il faut verifier s'il ya deja les données.
     * s'il ya deja des champs à afficher,enleve le loading, ou si on a rien trouvé (busy est revenu à false;)
     */
    isComplete() {
      if ((this.formDatas && this.formDatas.fields.length) || !this.busy) {
        return false;
      } else return true;
    },
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
