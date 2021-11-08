<template lang="html">
  <div>
    <b-modal
      id="re-order-stepes"
      ref="modal"
      title="Re-ordonner les etapes"
      hide-footer
      size="lg"
    >
      <b-list-group>
        <b-list-group-item v-for="(formview, i) in form.forms" :key="i">
          <div class="d-flex align-items-center">
            <b-button
              variant="outline-info"
              class="border-0"
              @click="modeToUp(i)"
            >
              <b-icon icon="arrow-bar-up"></b-icon>
            </b-button>
            <b-button
              variant="outline-info"
              class="border-0"
              @click="moveToDown(i)"
            >
              <b-icon icon="arrow-bar-down"></b-icon>
            </b-button>
            <div
              class="pl-5"
              :class="[
                formview.states && formview.states.length > 0 ? 'ml-5' : '',
              ]"
            >
              {{ i }} : {{ formview.info.title }}
              <div v-if="formview.states && formview.states.length > 0">
                <div v-for="(state, y) in formview.states" :key="y">
                  <small :class="StepExit(state.name) ? '' : 'text-danger'">
                    {{ getNameStep(state.state_name) }} :
                    <i> {{ state.value }} </i>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </b-list-group-item>
      </b-list-group>
      <div class="justify-content-end d-flex">
        <div class="mx-2 my-4">
          <b-button
            type="submit"
            variant="primary"
            @click="$bvModal.hide('re-order-stepes')"
          >
            Mettre à jour
          </b-button>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Utilities from "../Utilities.js";
export default {
  name: "reOrderStepes",
  props: {
    //
  },
  components: {
    //
  },
  data() {
    return {};
  },
  mounted() {
    //
  },
  watch: {
    //
  },
  computed: {
    ...mapState(["form"]),
  },
  methods: {
    moveToDown(i) {
      const idN = i + 1;
      Utilities.array_move(this.form.forms, i, idN);
    },
    modeToUp(i) {
      const idP = i - 1;
      Utilities.array_move(this.form.forms, i, idP);
    },
    getNameStep(stape_name) {
      for (const i in this.form.forms) {
        if (this.form.forms[i].info.name === stape_name)
          return this.form.forms[i].info.title;
      }
    },
    /**
     * Verifie si l'etape existe.
     */
    StepExit(key_step) {
      return new Promise((resolv) => {
        var stepes = this.$store.state.form.forms;
        for (const i in stepes) {
          const step = stepes[i];
          if (step.info && step.info.name == key_step) resolv(true);
          var ii = parseInt(i) + 1;
          if (stepes.length == ii) {
            resolv(false);
          }
        }
      });
    },
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
