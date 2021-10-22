<template lang="html">
  <b-container class="bv-example-row p-5" fluid="lg">
    <div>
      <!-- <b-row align-h="center" class="mb-4">
        <b-col lg="10" cols="12">
          <div class="block-title pr-2">
            <div class="backButton" @click="returnHome" to="/">
              <img
                src="../../public/long-arrow-alt-left-solid.svg"
                alt=""
                width="55px"
                height="30px"
              />
            </div>
            <h5 class="">
              Estimation de devis :
              <span class="form-title">{{ form.name }}</span>
            </h5>
            <h5
              class="cursorHover"
              :class="uid ? 'title-right' : ''"
              @click="returnHome"
            >
              <span v-if="uid"> Voir mes devis</span>
            </h5>
          </div>
        </b-col>
      </b-row> -->
      <!-- <b-row align-h="center">
        <b-col sm="10">
          <h5 class="text-right cursorHover" @click="returnHome" v-if="uid">
            Voir mes devis
          </h5>
          <h5 class="titre mb-3 shadow-sm p-2">
            Estimation de devis :
            <span class="form-title">{{ form.name }}</span>
          </h5>
        </b-col>
      </b-row> -->
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
import TitleBar from "./TitleBar.vue";
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
