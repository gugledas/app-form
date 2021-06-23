<template>
  <div>
    <div class="simple-champ">
      <div class="label-title">{{ fields.label }}</div>
      <div class="label-title flex-wrap" v-if="val.length">
        <div class="label-title col-12" v-for="(item, i) in val" :key="i">
          <img
            v-if="item.img"
            :srcset="baseURl + item.img"
            :alt="item.test"
            width="60px"
            height="45px"
            class="mr-2"
          />
          <strong v-if="fields.type != 'checkboximg'">{{ item }}</strong>
          <strong v-if="fields.type == 'checkboximg'">{{ item.text }}</strong>
        </div>
      </div>
    </div>
    <!-- {{ val }} <br />
    {{ fields }} -->
  </div>
</template>

<script>
import config from "../../config/config.js";
export default {
  props: {
    fields: {
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
    // fields: {
    //   handle() {
    //     this.formatValue();
    //     console.log("all");
    //   },
    //   deep: true,
    // },
  },
  mounted() {
    // var option = this.fields.options;
    // var val = this.fields.value;
    // if (val != null && val != undefined) {
    //   if (option.length) {
    //     this.formatValue();
    //   }
    // }
  },
  computed: {
    val() {
      var option = this.fields.options;
      var val = this.fields.value;
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
        if (this.fields.type === "checkboximg") {
          for (let item of option) {
            if (item.value == val) valeur.push(item);
          }
        } else valeur.push(val);
      }
      if (this.fields.options.length < 1 && val !== null) valeur.push(val);
      return valeur;
    },
  },
  methods: {},
};
</script>

<style lang="scss">
.simple-champ {
  display: flex;
  .label-title {
    background: #f5f5f5;
    padding: 5px;
    border: 1px solid #dedcdc;
    margin: 1px 0;
    //width: 100%;
    flex: auto;
    display: flex;
    align-items: center;
  }
}
</style>
