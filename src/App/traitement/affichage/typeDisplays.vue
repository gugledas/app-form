<template>
  <div>
    <div class="simple-champ">
      <div class="label-title">{{ fields.label }}</div>
      <div class="label-title" v-if="val.length">
        <div class="label-title" v-for="(item, i) in val" :key="i">
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
      val: [],
    };
  },
  watch: {},
  mounted() {
    var option = this.fields.options;
    var val = this.fields.value;
    if (val != null && val != undefined) {
      if (option.length) {
        this.formatValue();
      }
    }
  },
  computed: {},
  methods: {
    formatValue() {
      var option = this.fields.options;
      var val = this.fields.value;
      for (let i = 0; i < option.length; i++) {
        if (option[i].value == val) {
          this.val.push(option[i].text);
        }
      }
    },
  },
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
