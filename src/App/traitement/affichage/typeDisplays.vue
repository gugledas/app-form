<template>
  <div>
    <div class="simple-champ">
      <div class="label-title">{{ fields.label }}</div>
      <div class="label-title flex-wrap" v-if="val.length">
        <div class="label-title col-12" v-for="(item, i) in val" :key="i">
          <strong>{{ item }}</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
        if (typeValue == "object") {
          if (val.includes(option[i].value)) valeur.push(option[i].text);
        }
      }
      if (option.length && typeValue == "string" && val.length)
        valeur.push(val);
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
