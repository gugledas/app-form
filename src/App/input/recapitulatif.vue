<template lang="html">
  <div>
    <transition name="fade">
      <div class="row-content">
        <b-row class="row-content__row">
          <b-col sm="6" class="mb-3">
            <label class="label d-flex">
              <span>{{ field.label }} :</span> <span>{{ price }}</span>
              <span>€</span>
            </label>
          </b-col>
          <b-col sm="12" v-html="field.value" class="input-field"> </b-col>
        </b-row>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "recapitulatif",
  props: {
    field: {
      type: Object,
      require: true,
    },
  },
  components: {
    ...mapState(["price"]),
  },
  data() {
    return {
      //
    };
  },
  mounted() {
    //
  },
  watch: {
    //
  },
  computed: {
    //
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
