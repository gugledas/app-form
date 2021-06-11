<template>
  <div :class="!validationField && mode ? 'mb-5' : ''">
    <transition v-if="validationField" name="fade">
      <div class="choice-section min-height">
        <ValidationProvider
          v-slot="v"
          :rules="field.require"
          class="col-12 p-0"
          :name="field.name"
        >
          <div class="autocomplete">
            <multiselect
              v-model="field.value"
              :options="options"
              :custom-label="nameWithLang"
              placeholder=""
              label="text"
              track-by="text"
              :show-no-results="false"
              :showLabels="false"
              :loading="isLoading"
              @search-change="asyncFind"
            >
              <template slot="noResult">
                <span class="option__titl d-none"> Aucun contenu </span>
              </template>
              <template slot="placeholder">
                <span class="option__title">
                  Code postal ou nom de la vialle
                </span>
              </template>
              <template slot="noOptions">
                <span class="option__title">aea</span>
              </template>
            </multiselect>
            <div class="text-danger">
              <small v-for="(error, ii) in v.errors" :key="ii" class="d-block">
                {{ error }}
              </small>
            </div>
          </div>
        </ValidationProvider>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import { ValidationProvider } from "vee-validate";
import { validationRessource as Validation } from "../config/validation.js";
import "../EditsFields/vee-validate-custom.js";
import Multiselect from "vue-multiselect";
import { termsTaxo } from "drupal-vuejs";

export default {
  props: {
    field: {
      type: Object,
      require: true,
    },
  },
  components: {
    Multiselect,
    ValidationProvider,
  },
  data() {
    return {
      isLoading: false,
      options: [],
    };
  },
  computed: {
    ...mapGetters(["formDatas"]),
    ...mapState(["formDatasValidate", "mode"]),
    validationField() {
      if (this.field.states && this.field.states.length) {
        var status = Validation.computedValidation(
          this.formDatas,
          this.field,
          this.formDatasValidate
        );
        if (status !== undefined) return status;
      }
      return true;
    },
  },
  methods: {
    nameWithLang({ text }) {
      //return `${text} — [${value}]`;
      return `${text}`;
    },
    asyncFind(search) {
      console.log("search : ", search);
      if (search.length > 2) {
        const terms = new termsTaxo("departements");
        console.log("find");
        this.isLoading = true;
        terms.getSearch(search).then(() => {
          this.options = terms.getOptions();
          this.isLoading = false;
          console.log("this.options : ", this.options);
        });
      }
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style></style>
