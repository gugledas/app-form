<template>
  <b-row align-h="center" class="">
    <b-col :lg="conf.col ? '12' : '10'" cols="12">
      <div class="block-title pr-2">
        <div class="backButton" @click="returnHome" to="/">
          <img
            src="../../public/long-arrow-alt-left-solid.svg"
            alt=""
            width="55px"
            height="30px"
          />
        </div>
        <h5 class="m-0">
          {{ conf.text }} :
          <span class="form-title">{{ form.name }}</span>
        </h5>
        <div>
          <h5
            class="m-0"
            v-show="showDevis"
            :class="uid ? 'title-right' : ''"
            @click="seeDevis"
          >
            <span v-if="uid"> Voir mes devis</span>
          </h5>
        </div>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  props: {
    taille: { require: true },
    id: { require: true },
    showDevis: { type: Boolean, default: true },
    conf: {
      type: Object,
      default: function () {
        return {
          col: false,
          text: "Estimation de devis",
        };
      },
    },
  },
  components: {},
  data() {
    return {
      value: 1,
    };
  },
  watch: {},
  mounted() {},
  computed: {
    ...mapState(["stepsIndex", "form"]),
    ...mapGetters(["uid"]),
  },
  methods: {
    returnHome() {
      this.$router.push({ path: `/` });
    },
    seeDevis() {
      this.$router.push({ path: `/traitement-my-own/${this.id}` });
    },
  },
};
</script>

<style lang="scss"></style>
