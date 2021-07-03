<template>
  <div class="simple-champ" :class="field.type">
    <div class="label-title">{{ field.label }}</div>
    <div class="label-title flex-wrap" v-if="field.value">
      <component
        :is="getTemplatesFiles()"
        :field="field"
        class="content-field"
      ></component>
    </div>
  </div>
</template>

<script>
import config from "../../config/config.js";
import traitementDisplay from "./traitement-display.js";

export default {
  props: {
    field: {
      type: Object,
      required: true,
    },
  },
  components: {},
  data() {
    return {
      vale: [],
      baseURl: config.baseURl,
    };
  },
  watch: {
    // field: {
    //   handle() {
    //     this.formatValue();
    //     console.log("all");
    //   },
    //   deep: true,
    // },
  },
  mounted() {
    // var option = this.field.options;
    // var val = this.field.value;
    // if (val != null && val != undefined) {
    //   if (option.length) {
    //     this.formatValue();
    //   }
    // }
  },
  computed: {
    val() {
      var option = this.field.options;
      var val = this.field.value;
      var typeValue = typeof val;
      var valeur = [];

      for (let i = 0; i < option.length; i++) {
        if (typeValue == "object" && val !== null) {
          //console.log("object", val);
          if (val.includes(option[i].value)) {
            valeur.push(option[i].text);
          }
        }
      }
      if (option.length && typeValue == "string" && val.length) {
        if (this.field.type === "checkboximg") {
          for (let item of option) {
            if (item.value == val) valeur.push(item);
          }
        } else valeur.push(val);
      }
      if (this.field.options.length < 1 && val !== null) valeur.push(val);
      return valeur;
    },
  },
  methods: {
    getTemplatesFiles() {
      return traitementDisplay.getTemplatesFiles(this.field.type);
    },
  },
};
</script>

<style lang="scss">
@import "./traitement.scss";
</style>
