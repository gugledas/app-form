<template>
  <div>
    <div>
      <multiselect
        v-model="value.value"
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
          <span class="option__title"> Code postal ou nom de la vialle </span>
        </template>
        <template slot="noOptions">
          <span class="option__title">aea</span>
        </template>
      </multiselect>
      <!--
      <multiselect v-model="selectedCountries" id="ajax" label="name" track-by="code" placeholder="Type to search" open-direction="bottom" :options="countries" :multiple="true" :searchable="true" :loading="isLoading" :internal-search="false" :clear-on-select="false" :close-on-select="false" :options-limit="300" :limit="3" :limit-text="limitText" :max-height="600" :show-no-results="false" :hide-selected="true" @search-change="asyncFind">
          <template slot="tag" slot-scope="{ option, remove }"><span class="custom__tag"><span>{{ option.name }}</span><span class="custom__remove" @click="remove(option)">❌</span></span></template>
          <template slot="clear" slot-scope="props">
            <div class="multiselect__clear" v-if="selectedCountries.length" @mousedown.prevent.stop="clearAll(props.search)"></div>
          </template><span slot="noResult">Oops! No elements found. Consider changing the search query.</span>
      </multiselect>
      -->
    </div>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import { termsTaxo } from "drupal-vuejs";

export default {
  props: {
    value: {
      type: Object,
      default: function () {
        return { value: "" };
      },
    },
  },
  components: {
    Multiselect,
  },
  data() {
    return {
      isLoading: false,
      options: [],
    };
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
