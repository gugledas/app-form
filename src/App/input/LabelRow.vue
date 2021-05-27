<template>
  <div>
    <div v-if="type == 'up'">
      <div class="number-markup__input" v-for="(item, i) in options" :key="i">
        <label class="label">{{ item.label }}</label>
        <div class="input-field">
          <b-form-input
            v-model="item.value"
            type="number"
            placeholder="--"
            class="input-field__input"
            min="1"
            max="100"
          ></b-form-input
          ><span class="input-field__unit">{{ item.unit }}</span>
        </div>
      </div>
    </div>
    <div v-if="type == 'row'">
      <div class="row-content" v-for="(item, i) in options" :key="i">
        <div class="row-content__row">
          <b-col sm="6">
            <label class="label">{{ item.label }} </label>
          </b-col>
          <b-col sm="6" class="input-field">
            <b-form-input
              v-model="item.value"
              type="number"
              placeholder="--"
              class="input-field__input"
              min="1"
              max="100"
            ></b-form-input
            ><span class="input-field__unit">{{ item.unit }}</span>
          </b-col>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "row",
    },
    unit: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  data() {
    return {
      value: 1,
    };
  },
  watch: {
    value() {
      this.$emit("label-up-value", this.value);
      this.$store.state.fields.value = this.options;
      console.log("object", this.options);
    },
  },
};
</script>

<style lang="scss">
.number-markup__input {
  display: flex;
  justify-content: center;
  flex-flow: wrap column;
  .label {
    font-weight: 600;
  }
  .input-field {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding-left: 42px;
    &__input {
      width: 131px;
      height: 50px;
      padding: 0 0 0 4em;
    }
    &__unit {
      margin: 0 8px;
    }
  }
}
.row-content {
  margin: 1.5rem auto;
  width: 100%;
  &__row {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    .label {
      font-weight: 300;
      font-size: 1.2em;
      //padding: 0 80px 0 0;
    }
    .input-field {
      display: flex;
      justify-content: center;
      align-items: center;
      &__input {
        width: 131px;
        height: 50px;
        padding: 0 0 0 3.5em;
      }
      &__unit {
        margin: 0 8px;
      }
    }
  }
}
</style>
